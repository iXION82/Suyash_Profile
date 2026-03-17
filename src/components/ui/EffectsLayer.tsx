"use client";

import { useEffect, useMemo, useState } from "react";
import CursorTrail from "@/components/ui/CursorTrail";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundCanvas from "@/components/three/BackgroundCanvas";

function useShouldReduceEffects() {
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const compute = () => {
      const isCoarse = coarse.matches || window.innerWidth <= 768;
      const isReducedMotion = reducedMotion.matches;
      setReduce(isCoarse || isReducedMotion);
    };

    compute();

    const onChange = () => compute();
    coarse.addEventListener?.("change", onChange);
    reducedMotion.addEventListener?.("change", onChange);
    window.addEventListener("resize", onChange);

    return () => {
      coarse.removeEventListener?.("change", onChange);
      reducedMotion.removeEventListener?.("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return reduce;
}

export default function EffectsLayer() {
  const reduce = useShouldReduceEffects();

  const effects = useMemo(() => {
    if (reduce) return null;
    return (
      <>
        <CursorTrail />
        <CustomCursor />
        <BackgroundCanvas />
      </>
    );
  }, [reduce]);

  return effects;
}

