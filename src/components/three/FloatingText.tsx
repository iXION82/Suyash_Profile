"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingText() {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (groupRef.current) {
      if (!hovered) {
        // Smooth continuous rotation when not hovered
        targetRotation.current.y += 0.005;
        targetRotation.current.x = 0;
      } else {
        // Track mouse position mapped to rotation when hovered
        const mouseX = (state.pointer.x * Math.PI) / 4;
        const mouseY = -(state.pointer.y * Math.PI) / 4;
        targetRotation.current.x = mouseY;
        targetRotation.current.y = mouseX;
      }

      // Smoothly interpolate current rotation to target rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.1
      );

      // Simple bobbing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={hovered ? 0 : 0.5} floatIntensity={0.8}>
      <group
        ref={groupRef}
        scale={1.8}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Center>
          <Text3D
            ref={textRef}
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
              color="#00e5ff" // Cyan accent
              wireframe
              transparent
              opacity={0.8}
              emissive={hovered ? "#f0c040" : "#00e5ff"}
              emissiveIntensity={hovered ? 0.8 : 0.4}
            />
          </Text3D>
        </Center>

        {/* Dynamic lights based on hover state */}
        <pointLight
          position={[0, 0, -1]}
          color={hovered ? "#f0c040" : "#00e5ff"}
          intensity={hovered ? 2 : 1.5}
          distance={8}
        />
        
        <pointLight
          position={[0, 0, 2]}
          color={hovered ? "#00e5ff" : "#f0c040"}
          intensity={hovered ? 1.5 : 0.8}
          distance={6}
        />
      </group>
    </Float>
  );
}
