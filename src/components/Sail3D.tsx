import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Square rig (pano redondo) — caravel / nau
const SAIL_W = 7.0;   // wider than tall (typical course sail)
const SAIL_H = 5.4;
const COLS = 64;
const ROWS = 48;
const MAST_H = 9.5;
const YARD_OVERHANG = 0.6;

/* ---------- Canvas texture: panel seams + Order of Christ cross ---------- */
function makeSailTexture() {
  const w = 1024;
  const h = 800;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;

  // Base linen color with subtle vertical gradient
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "#f3ead4");
  grad.addColorStop(1, "#e6d9b8");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Weave noise
  const img = ctx.getImageData(0, 0, w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 14;
    img.data[i] = Math.max(0, Math.min(255, img.data[i] + n));
    img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + n));
    img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + n - 4));
  }
  ctx.putImageData(img, 0, 0);

  // Horizontal panel seams (cloths sewn together)
  ctx.strokeStyle = "rgba(120,100,60,0.35)";
  ctx.lineWidth = 1.5;
  const panels = 7;
  for (let i = 1; i < panels; i++) {
    const y = (i / panels) * h;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Bolt-rope border
  ctx.strokeStyle = "rgba(80,60,30,0.6)";
  ctx.lineWidth = 6;
  ctx.strokeRect(3, 3, w - 6, h - 6);

  // Cruz da Ordem de Cristo (subtle red cross, iconic for Portuguese caravels)
  const cx = w / 2;
  const cy = h / 2;
  const armLen = w * 0.22;
  const armThk = w * 0.07;
  ctx.fillStyle = "rgba(170,30,30,0.78)";
  ctx.fillRect(cx - armLen, cy - armThk / 2, armLen * 2, armThk);
  ctx.fillRect(cx - armThk / 2, cy - armLen, armThk, armLen * 2);
  // White inner cross
  ctx.fillStyle = "rgba(245,238,220,0.95)";
  const iLen = armLen * 0.55;
  const iThk = armThk * 0.32;
  ctx.fillRect(cx - iLen, cy - iThk / 2, iLen * 2, iThk);
  ctx.fillRect(cx - iThk / 2, cy - iLen, iThk, iLen * 2);

  // Soft dirt/age stains
  for (let i = 0; i < 18; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = 60 + Math.random() * 120;
    const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
    g2.addColorStop(0, "rgba(120,95,55,0.10)");
    g2.addColorStop(1, "rgba(120,95,55,0)");
    ctx.fillStyle = g2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/* ---------- Sail geometry (rectangular plane, will billow) ---------- */
function buildSailGeometry() {
  const geom = new THREE.PlaneGeometry(SAIL_W, SAIL_H, COLS, ROWS);
  return geom;
}

function Sail() {
  const groupRef = useRef<THREE.Group>(null);
  const geom = useMemo(() => buildSailGeometry(), []);
  const tex = useMemo(() => makeSailTexture(), []);
  const original = useMemo(
    () => new Float32Array(geom.attributes.position.array as Float32Array),
    [geom]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.45;
    const pos = geom.attributes.position.array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];

      const u = (ox + SAIL_W / 2) / SAIL_W; // 0..1 left→right
      const v = (oy + SAIL_H / 2) / SAIL_H; // 0..1 bottom→top

      // Anchored along top (yard) and at the two lower clew corners (sheets).
      // Foot can curve forward freely (loose-footed course).
      const topAnchor = Math.pow(v, 1.4);             // 0 bottom, 1 top → suppress billow near yard
      const sideAnchor =                              // 0 at corners' x, 1 mid-width
        Math.sin(u * Math.PI);
      const bottomCornerAnchor =                       // pulls bottom corners back
        1 - Math.pow(1 - v, 4) * (1 - Math.pow(Math.sin(u * Math.PI), 0.5));

      const bellyShape =
        sideAnchor *
        (1 - topAnchor * 0.9) *
        bottomCornerAnchor;

      // Main belly (forward, +Z)
      const belly = bellyShape * 1.55;

      // Wind ripples traveling left→right, modulated by belly area
      const ripple =
        (Math.sin(ox * 1.6 - t * 1.9) * 0.10 +
          Math.sin(ox * 3.4 + oy * 1.1 - t * 2.6) * 0.05) *
        bellyShape;

      pos[i + 2] = belly + ripple;

      // Slight foot rise (curve up at bottom edges as wind lifts)
      const footLift = Math.pow(1 - v, 3) * sideAnchor * 0.25;
      pos[i + 1] = oy + footLift;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.05 - 0.18;
      groupRef.current.rotation.z = Math.sin(t * 0.22) * 0.012;
    }
  });

  // Sail hangs from yard; center it so top edge sits at the yard
  const sailY = -SAIL_H / 2;

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Mast */}
      <mesh position={[0, MAST_H / 2 - 2, 0]}>
        <cylinderGeometry args={[0.11, 0.14, MAST_H, 24]} />
        <meshStandardMaterial color="#7a5a35" roughness={0.75} metalness={0.05} />
      </mesh>
      {/* Masthead cap */}
      <mesh position={[0, MAST_H - 2 + 0.05, 0]}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial color="#5d4322" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Yard (horizontal spar) */}
      <group position={[0, SAIL_H / 2 + sailY + 0.05, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry
            args={[0.09, 0.09, SAIL_W + YARD_OVERHANG * 2, 18]}
          />
          <meshStandardMaterial color="#6b4a28" roughness={0.7} metalness={0.05} />
        </mesh>
        {/* Yard tips */}
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * (SAIL_W / 2 + YARD_OVERHANG), 0, 0]}>
            <sphereGeometry args={[0.11, 14, 14]} />
            <meshStandardMaterial color="#4f3719" roughness={0.6} />
          </mesh>
        ))}
      </group>

      {/* Sail */}
      <mesh
        geometry={geom}
        position={[0, sailY + SAIL_H / 2, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          map={tex}
          side={THREE.DoubleSide}
          roughness={0.88}
          metalness={0.0}
          emissive="#2a2418"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Rigging — braces from yard tips down to mast base */}
      {[-1, 1].map((s) => {
        const start = new THREE.Vector3(
          s * (SAIL_W / 2 + YARD_OVERHANG),
          SAIL_H / 2 + sailY + 0.05,
          0
        );
        const end = new THREE.Vector3(0, -2, 0);
        const mid = start.clone().lerp(end, 0.5);
        const len = start.distanceTo(end);
        const dir = end.clone().sub(start).normalize();
        const axis = new THREE.Vector3(0, 1, 0);
        const quat = new THREE.Quaternion().setFromUnitVectors(axis, dir);
        return (
          <mesh
            key={`brace-${s}`}
            position={mid.toArray()}
            quaternion={quat}
          >
            <cylinderGeometry args={[0.015, 0.015, len, 6]} />
            <meshStandardMaterial color="#2a2018" roughness={0.9} />
          </mesh>
        );
      })}

      {/* Sheets — from lower clews outward & down (suggest deck) */}
      {[-1, 1].map((s) => {
        const start = new THREE.Vector3(s * (SAIL_W / 2), sailY + 0.1, 0.8);
        const end = new THREE.Vector3(s * (SAIL_W / 2 + 1.2), sailY - 1.8, -0.2);
        const mid = start.clone().lerp(end, 0.5);
        const len = start.distanceTo(end);
        const dir = end.clone().sub(start).normalize();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir
        );
        return (
          <mesh key={`sheet-${s}`} position={mid.toArray()} quaternion={quat}>
            <cylinderGeometry args={[0.018, 0.018, len, 6]} />
            <meshStandardMaterial color="#1f1812" roughness={0.95} />
          </mesh>
        );
      })}
    </group>
  );
}

const Sail3D = () => {
  return (
    <Canvas
      camera={{ position: [5.5, 1.0, 9.5], fov: 36 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Warm sunlight from upper-front-right */}
      <ambientLight intensity={0.45} color="#cfd8e6" />
      <directionalLight
        position={[7, 9, 6]}
        intensity={2.4}
        color="#ffe9c2"
      />
      {/* Cool ocean fill from below-left */}
      <directionalLight
        position={[-6, -2, 2]}
        intensity={0.55}
        color="#4f6f99"
      />
      {/* Subtle rim light to separate from black */}
      <directionalLight
        position={[-3, 4, -5]}
        intensity={0.5}
        color="#8aa8d6"
      />
      <Sail />
    </Canvas>
  );
};

export default Sail3D;
