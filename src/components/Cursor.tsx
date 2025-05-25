import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="hidden lg:inline fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none"
      animate={{
        x: mousePosition.x - 2,
        y: mousePosition.y - 2,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
