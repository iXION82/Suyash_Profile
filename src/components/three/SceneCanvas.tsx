"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";

interface SceneCanvasProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

export default function SceneCanvas({
  children,
  className = "",
  camera = { position: [0, 0, 5], fov: 75 },
}: SceneCanvasProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={camera} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
