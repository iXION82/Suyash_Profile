"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

function AuroraDust() {
  const meshRef = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();
  const count = 15000;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorTheme = [
      new THREE.Color("#00e5ff"), // Cyan
      new THREE.Color("#f0c040"), // Gold
      new THREE.Color("#4a5abf"), // Purple-blue
    ];

    for (let i = 0; i < count; i++) {
      // Create a wide cylinder-like spread for a flow effect
      const radius = 5 + Math.random() * 25; // Wider spread
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      // Massive vertical spread to cover the entire page
      // Spread from roughly +30 down to -200
      const y = 30 - Math.random() * 230;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = colorTheme[Math.floor(Math.random() * colorTheme.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Smooth scroll interpolation
    scrollY.current = THREE.MathUtils.lerp(scrollY.current, targetScrollY.current, 0.05);

    // Dynamic rotation based on time, mouse, and scroll
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05 + mouse.current.x * 0.2;
    meshRef.current.rotation.x = mouse.current.y * 0.1;
    
    // Parallax effect applied to the entire particle group based on scroll
    meshRef.current.position.y = scrollY.current * 0.005;

    // Animate individual particles for a flowing "aurora" effect
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gently drift particles
      positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + positions[i3]) * 0.01;
      positions[i3] += Math.cos(state.clock.elapsedTime * 0.3 + positions[i3 + 1]) * 0.01;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionWeb() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    lineRef.current.rotation.z = state.clock.elapsedTime * 0.01;
    lineRef.current.position.y = -scrollY.current * 0.005; // Different parallax speed
  });

  return (
    <group position={[0, -5, -15]}>
      <mesh ref={lineRef as any}>
        {/* Large intricate icosahedron representing global connection */}
        <icosahedronGeometry args={[12, 2]} />
        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.03}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Inner complementary shape */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <octahedronGeometry args={[8, 1]} />
        <meshBasicMaterial
          color="#f0c040"
          wireframe
          transparent
          opacity={0.02}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function GlobalBackground() {
  return (
    <>
      <color attach="background" args={["#0a0e27"]} />
      <fog attach="fog" args={["#0a0e27", 10, 40]} />
      
      <ambientLight intensity={0.2} />
      
      {/* Dynamic dust aurora */}
      <AuroraDust />
      
      {/* Abstract geometric background structures */}
      <ConnectionWeb />
      
      {/* Subtle deep space stars to add extreme depth */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={0.5} />
    </>
  );
}
