"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingBallotBox() {
  const groupRef = useRef<THREE.Group>(null);
  const slotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.2}>
        {/* Main box */}
        <RoundedBox args={[2, 1.5, 1.2]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#1b2466"
            metalness={0.3}
            roughness={0.4}
            emissive="#232d80"
            emissiveIntensity={0.15}
          />
        </RoundedBox>

        {/* Slot on top */}
        <mesh ref={slotRef} position={[0, 0.76, 0]}>
          <boxGeometry args={[1.0, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#0a0e27"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Gold trim lines */}
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[2, 1.5]} />
          <meshStandardMaterial
            color="#f0c040"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Vote star emblem */}
        <mesh position={[0, 0.1, 0.62]}>
          <circleGeometry args={[0.25, 5]} />
          <meshStandardMaterial
            color="#f0c040"
            emissive="#f0c040"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Glow ring around emblem */}
        <mesh position={[0, 0.1, 0.615]}>
          <ringGeometry args={[0.28, 0.35, 32]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={0.6}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Base */}
        <mesh position={[0, -0.85, 0]}>
          <boxGeometry args={[2.2, 0.15, 1.4]} />
          <meshStandardMaterial
            color="#141b4d"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>

        {/* Point light for glow effect */}
        <pointLight
          position={[0, 0.5, 1.5]}
          color="#f0c040"
          intensity={0.8}
          distance={5}
        />
        <pointLight
          position={[0, -0.5, -1.5]}
          color="#00e5ff"
          intensity={0.4}
          distance={4}
        />
      </group>
    </Float>
  );
}
