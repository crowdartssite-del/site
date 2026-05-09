import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-[#FF2D2D] pointer-events-none z-[9998] mix-blend-difference"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}
