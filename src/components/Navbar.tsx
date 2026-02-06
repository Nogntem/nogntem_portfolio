"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150 && !menuOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links = [
        { name: "Projets", href: "#projects" },
        { name: "Expertise", href: "#stack" },
        { name: "Contact", href: "#contact" },
    ];


    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-end px-8 py-6 text-white mix-blend-difference pointer-events-auto"
            >
                <div className="hidden items-center gap-12 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="block text-sm font-bold uppercase tracking-widest md:hidden cursor-pointer relative z-[70]"
                >
                    {menuOpen ? "Fermer" : "Menu"}
                </button>

            </motion.nav>


            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-[#FFF7ED] md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className="font-serif text-5xl font-light text-neutral-900 hover:italic"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="absolute bottom-12 text-xs uppercase tracking-widest text-neutral-400">
                            Nogntem Portfolio © 2026
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}