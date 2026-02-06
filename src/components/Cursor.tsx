"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const cursorX = useMotionValue(-100); // Commence hors écran
    const cursorY = useMotionValue(-100);

    // damping : amortissement (plus c'est haut, moins ça oscille)
    // stiffness : raideur (plus c'est haut, plus ça suit vite)
    const springConfig = { damping: 50, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full bg-white mix-blend-difference md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        />
    );
}