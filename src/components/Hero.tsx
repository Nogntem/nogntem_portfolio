"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import Image from "next/image";

export default function Hero() {

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-8 lg:flex-row lg:justify-between">
            
            <div className="max-w-xl animate-fade-in-up"> 

                <h1 className="font-serif text-6xl font-light leading-tight text-neutral-900 mb-8 text-center lg:text-left">
                    <EncryptedText text="Nogntem" revealDelayMs={100}/> <br />
                    <span className="italic"><EncryptedText text="Portfolio" revealDelayMs={100}/></span>
                </h1>

                <div className="flex flex-col items-center lg:items-start"> 

                    <span className="text-xl text-neutral-600 font-light tracking-wide lg:ml-2">
                        <EncryptedText text="Étudiant en informatique" revealDelayMs={100}/>
                    </span>

                    <div className="flex items-center gap-2 -mt-4 lg:-mt-6"> 

                        <span className="text-xl text-neutral-600 font-light tracking-wide text-right leading-tight">
                           <EncryptedText text="créateur d'expériences" revealDelayMs={100}/> <br />
                            <EncryptedText text="numériques" revealDelayMs={100}/>
                        </span>

                        <span className="font-serif text-8xl italic text-neutral-800 leading-none">
                            &amp;
                        </span>

                    </div>
                    
                    <div className="mt-8 flex gap-6 text-sm uppercase tracking-widest text-neutral-400">
                        <a href="https://github.com/Nogntem" className="hover:text-neutral-900 transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/teddy-ausousseau/" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
                        <a href="mailto:teddyausousseau@gmail.com" className="hover:text-neutral-900 transition-colors">Contact</a>
                    </div>
                </div>

            </div>
            
            <div className="hidden lg:block relative group order-last">
                
                <div className="absolute inset-0 rounded-[120px] ring-1 ring-neutral-900/0 transition-all duration-700 group-hover:ring-neutral-900/10 group-hover:scale-105" />

                <Image
                    src="/profile.png"
                    alt="Portrait de Nogntem"
                    width={400}
                    height={500}
                    className="rounded-[120px] object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                />
            </div>

            <button
                onClick={handleScroll}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                aria-label="Scroll down"
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                </svg>
            </button>

        </section>
    );
}