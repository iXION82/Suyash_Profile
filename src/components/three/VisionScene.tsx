"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function VisionScene() {
  const groupRef = useRef<THREE.Group>(null);
  const pillarCount = 7;

  const pillars = useMemo(() => {
    return Array.from({ length: pillarCount }, (_, i) => ({
      x: (i - pillarCount / 2) * 1.2,
      height: 1 + Math.random() * 2,
      delay: i * 0.3,
      color: i % 2 === 0 ? "#f0c040" : "#00e5ff",
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const pillar = pillars[i];
      if (!pillar) return;
      const scale = (Math.sin(t * 0.5 + pillar.delay) + 1) * 0.5;
      child.scale.y = 0.3 + scale * pillar.height;
      child.position.y = child.scale.y * 0.5;
    });
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} color="#f0c040" intensity={1} />
      <pointLight position={[-3, 3, -2]} color="#00e5ff" intensity={0.6} />

      <group ref={groupRef}>
        {pillars.map((p, i) => (
          <mesh key={i} position={[p.x, 0, 0]}>
            <boxGeometry args={[0.6, 1, 0.6]} />
            <meshStandardMaterial
              color={p.color}
              emissive={p.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
              metalness={0.4}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#0d1333"
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
}
