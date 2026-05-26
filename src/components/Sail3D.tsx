import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const LUFF = 5.2;   // vertical edge on mast
const FOOT = 3.6;   // horizontal edge on boom
const ROWS = 40;    // along luff
const COLS = 28;    // across to leech

/** Build a triangular sail mesh:
 *  - left edge (x=0) is the mast (luff), from y=0 (tack) to y=LUFF (head)
 *  - bottom edge (y=0) is the boom (foot), from x=0 (tack) to x=FOOT (clew)
 *  - leech is the hypotenuse from head (0,LUFF) to clew (FOOT,0)
 *  Vertices are laid out in a grid; for each row v (0..1 along luff),
 *  the row spans x in [0, FOOT*(1-v)] across COLS segments.
 */
function buildSailGeometry() {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let r = 0; r <= ROWS; r++) {
    const v = r / ROWS;
    const rowWidth = FOOT * (1 - v);
    for (let c = 0; c <= COLS; c++) {
      const u = c / COLS;
      const x = u * rowWidth;
      const y = v * LUFF;
      positions.push(x, y, 0);
      uvs.push(u, v);
    }
  }

  const stride = COLS + 1;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const a = r * stride + c;
      const b = a + 1;
      const d = a + stride;
      const e = d + 1;
      indices.push(a, d, b);
      indices.push(b, d, e);
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3)
  );
  geom.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

function Sail() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => buildSailGeometry(), []);
  const original = useMemo(
    () => new Float32Array(geom.attributes.position.array as Float32Array),
    [geom]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.5;
    const pos = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];

      // Distance from mast (luff), normalized by available width at that height
      const rowWidth = FOOT * (1 - oy / LUFF) || 0.0001;
      const u = ox / rowWidth;          // 0 at luff, 1 at leech
      const vy = oy / LUFF;             // 0 boom, 1 head

      // Billowing belly (anchored at luff, foot, and head)
      const belly =
        Math.sin(u * Math.PI) *           // 0 at mast & leech
        Math.sin(vy * Math.PI) *          // 0 at boom & head
        0.95;

      // Wind ripples traveling across the sail
      const ripple =
        Math.sin(u * 6.0 - t * 2.2) * 0.08 +
        Math.sin(u * 11.0 + vy * 3.0 - t * 3.1) * 0.04;

      const z = belly + ripple * Math.sin(u * Math.PI) * Math.sin(vy * Math.PI);
      pos[i + 2] = z;
      // Slight inward pull as it bellies (keeps edges anchored)
      pos[i] = ox - belly * 0.05 * u;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.06 - 0.15;
      groupRef.current.rotation.z = Math.sin(t * 0.25) * 0.015;
    }
  });

  return (
    <group ref={groupRef} position={[-0.4, -2.2, 0]}>
      {/* Mast */}
      <mesh position={[0, LUFF / 2 + 0.1, 0]}>
        <cylinderGeometry args={[0.06, 0.07, LUFF + 0.8, 20]} />
        <meshStandardMaterial color="#cfc7b6" roughness={0.5} metalness={0.35} />
      </mesh>
      {/* Masthead cap */}
      <mesh position={[0, LUFF + 0.55, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#b8ad97" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Boom */}
      <mesh
        position={[FOOT / 2, -0.02, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.05, 0.05, FOOT + 0.1, 14]} />
        <meshStandardMaterial color="#bdb39d" roughness={0.5} metalness={0.35} />
      </mesh>
      {/* Sail */}
      <mesh ref={meshRef} geometry={geom} castShadow>
        <meshStandardMaterial
          color="#f6f1e3"
          side={THREE.DoubleSide}
          roughness={0.78}
          metalness={0.02}
          emissive="#3a3526"
          emissiveIntensity={0.18}
        />
      </mesh>
    </group>
  );
}

const Sail3D = () => {
  return (
    <Canvas
      camera={{ position: [4.5, 1.2, 6.5], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} color="#fff4d6" />
      <directionalLight position={[-5, 3, -2]} intensity={0.7} color="#6b8cc9" />
      <pointLight position={[0, 2, 4]} intensity={0.6} color="#ffffff" />
      <Sail />
    </Canvas>
  );
};

export default Sail3D;
