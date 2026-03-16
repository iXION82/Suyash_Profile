"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingText() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth continuous rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef} scale={1.8}>
        <Center>
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={1.5}
            height={0.4}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.03}
            bevelOffset={0}
            bevelSegments={8}
          >
            ISM
            <meshStandardMaterial
              color="#54575cff" // Gold
              metalness={0.6}
              roughness={0.2}
              emissive="#0b0b0bff"
              emissiveIntensity={0.3}
            />
          </Text3D>
        </Center>

        {/* Cyan glow light behind the text */}
        <pointLight
          position={[0, 0, -1]}
          color="#00e5ff"
          intensity={1.5}
          distance={8}
        />
        
        {/* Soft gold light illuminating the front */}
        <pointLight
          position={[0, 0, 2]}
          color="#4ac1f0ff"
          intensity={0.8}
          distance={6}
        />
      </group>
    </Float>
  );
}
