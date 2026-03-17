"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const GlobalBackground = dynamic(
  () => import("@/components/three/GlobalBackground"),
  { ssr: false }
);

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-navy-950">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <GlobalBackground />
      </Canvas>
    </div>
  );
}
