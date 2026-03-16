"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const GlobalBackground = dynamic(
  () => import("@/components/three/GlobalBackground"),
  { ssr: false }
);

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <GlobalBackground />
      </Canvas>
    </div>
  );
}
