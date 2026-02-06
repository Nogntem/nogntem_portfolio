"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="relative w-full px-8 py-16 flex flex-col gap-12" id="contact">


            <div className="flex justify-between items-center border-b border-neutral-200 pb-6">
                <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
                    <span className="text-sm md:text-base text-neutral-600 font-light tracking-wide">
                Disponible pour 2026
            </span>
                </div>
                <span className="hidden md:block text-sm text-neutral-400 font-light tracking-wide">
         </span>
            </div>


            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

                <div className="flex flex-col gap-4">
                    <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-neutral-900">
                        Une idée ? <span className="italic text-neutral-600">On en discute.</span>
                    </h2>

                    <a
                        href="mailto:teddyausousseau@gmail.com"
                        className="group flex items-center gap-3 w-fit"
                    >
                <span className="font-sans text-2xl md:text-4xl font-normal text-neutral-900 transition-colors duration-300 group-hover:text-neutral-500">
                    teddyausousseau@gmail.com
                </span>
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-neutral-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4">
                    <span className="text-sm text-neutral-400 font-mono">
                {time} (Paris)
             </span>

                    <div className="flex gap-6">
                        {[
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/teddy-ausousseau/" },
                            { name: "GitHub", url: "https://github.com/Nogntem" },
                        ].map((network) => (
                            <a
                                key={network.name}
                                href={network.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-neutral-800 font-light tracking-wide hover:underline hover:text-neutral-500 transition-all"
                            >
                                {network.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </footer>
    );
}