"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  spread?: number;
}

export default function ParticleField({
  count = 600,
  color = "#f0c040",
  size = 0.02,
  spread = 15,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return pos;
  }, [count, spread]);

  const speeds = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.002,
      y: (Math.random() - 0.5) * 0.002,
      z: (Math.random() - 0.5) * 0.002,
    }));
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const posArray = geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += speeds[i].x + Math.sin(time + i) * 0.0003;
      posArray[i * 3 + 1] += speeds[i].y + Math.cos(time + i * 0.5) * 0.0003;
      posArray[i * 3 + 2] += speeds[i].z;

      // Wrap around
      const half = spread / 2;
      if (Math.abs(posArray[i * 3]) > half) posArray[i * 3] *= -0.9;
      if (Math.abs(posArray[i * 3 + 1]) > half) posArray[i * 3 + 1] *= -0.9;
      if (Math.abs(posArray[i * 3 + 2]) > half) posArray[i * 3 + 2] *= -0.9;
    }
    geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
