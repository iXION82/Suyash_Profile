"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";

const GlobalBackground = dynamic(
  () => import("@/components/three/GlobalBackground"),
  { ssr: false }
);

export default function BackgroundCanvas() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-navy-950">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <GlobalBackground />
      </Canvas>
    </div>
  );
}
