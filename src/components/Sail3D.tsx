import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const SAIL_W = 3.2;
const SAIL_H = 4.6;
const SEG = 48;

function Sail() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  // Store original positions to displace from
  const original = useMemo(() => {
    const geom = new THREE.PlaneGeometry(SAIL_W, SAIL_H, SEG, SEG);
    const pos = geom.attributes.position.array as Float32Array;
    return new Float32Array(pos);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.6;
    const geom = geomRef.current;
    if (!geom) return;
    const pos = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];
      // Distance from mast (left edge): more flex toward the right (free leech)
      const u = (ox + SAIL_W / 2) / SAIL_W; // 0 at mast, 1 at leech
      const v = (oy + SAIL_H / 2) / SAIL_H; // 0 bottom, 1 top

      // Wind ripple: traveling wave along x, modulated vertically
      const wave =
        Math.sin(ox * 2.2 - t * 1.8) * 0.18 +
        Math.sin(ox * 4.5 + oy * 1.3 - t * 2.4) * 0.07;

      // Belly: sail curves away from mast
      const belly = Math.sin(u * Math.PI) * 0.55;

      // Vertical taper (less movement near boom/head)
      const taper = Math.sin(v * Math.PI) * 0.6 + 0.4;

      const z = (belly + wave * taper) * u; // anchored at mast (u=0)
      pos[i + 2] = z;

      // Slight horizontal pull as it bellies
      pos[i] = ox - belly * 0.04 * u;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();

    // Gentle overall sway
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.08;
      meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.02;
    }
  });

  return (
    <group position={[0.2, 0, 0]}>
      {/* Mast */}
      <mesh position={[-SAIL_W / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.05, SAIL_H + 0.6, 16]} />
        <meshStandardMaterial color="#d8d4cc" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* Boom */}
      <mesh position={[0, -SAIL_H / 2 - 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, SAIL_W + 0.2, 12]} />
        <meshStandardMaterial color="#c9c4ba" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* Sail */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry ref={geomRef} args={[SAIL_W, SAIL_H, SEG, SEG]} />
        <meshStandardMaterial
          color="#f5f1e8"
          side={THREE.DoubleSide}
          roughness={0.85}
          metalness={0.0}
          emissive="#1a1a1a"
          emissiveIntensity={0.05}
        />
      </mesh>
    </group>
  );
}

const Sail3D = () => {
  return (
    <Canvas
      camera={{ position: [3.8, 0.4, 4.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#7a8fb8" />
      <Sail />
    </Canvas>
  );
};

export default Sail3D;
