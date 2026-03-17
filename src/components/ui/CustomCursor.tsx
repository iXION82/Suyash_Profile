"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
      if (isTouch) {
        setIsVisible(false);
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("mouseenter", handleMouseEnter);
        window.removeEventListener("mouseover", handleElementHover);
      }
      return isTouch;
    };

    if (checkMobile()) return;

    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[110] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-accent pointer-events-none z-[110] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
