"use client";

import Image from "next/image";

const projects = [
    {
        id: "01",
        title: "Echec",
        description: "Ce projet est une implémentation d'un jeu d'échecs en Java, jouable exclusivement sur terminal. " +
            "Une contrainte importante de développement a été respectée : aucune programmation orientée objet n'est utilisée.",
        image: "/projects/Echec/echec_main.png",
        tags: ["Java", "Algorithmique"]
    },
    {
        id: "02",
        title: "Shrooms",
        description: "Jeux vidéos TERRARIA-Like en JAVA. Gestion de la physique, génération de terrain procédurale et système d'inventaire.",
        image: "/projects/Shrooms/shrooms_main.png",
        tags: ["Java", "Game Dev"]
    },
    {
        id: "03",
        title: "A LA COOL",
        description: "Solution web complète pour fluidifier les commandes dans les buvettes. Connecte les clients aux serveurs en temps réel.",
        image: "/projects/Alacool/alacool_main.png",
        tags: ["BootStrap","PHP", "Figma"]
    },
];

export default function Projects() {
    return (
        <section className="container mx-auto min-h-screen px-8 py-32" id="projects">

            <div className="mb-24 flex items-end justify-between border-b border-neutral-200 pb-8">
                <h2 className="font-serif text-6xl md:text-9xl font-light text-neutral-900 leading-[0.9]">
                    Projets
                </h2>
                <span className="hidden font-mono text-sm uppercase tracking-widest text-neutral-400 md:block">
                    (Works {projects.length})
                </span>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-32 md:grid-cols-2">
                {projects.map((project) => (
                    <div key={project.id} className="group flex flex-col gap-8">

                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-500 group-hover:bg-neutral-900/5" />
                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-baseline justify-between border-b border-neutral-200 pb-4">
                                <h3 className="font-sans text-3xl font-medium uppercase tracking-wide text-neutral-900">
                                    {project.title}
                                </h3>
                                <span className="font-mono text-xs text-neutral-400">
                                    N°{project.id}
                                </span>
                            </div>

                            <div className="flex flex-col gap-6">
                                <p className="text-lg font-light leading-relaxed text-neutral-600">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-neutral-200 px-3 py-1 font-mono text-xs uppercase text-neutral-500 transition-colors group-hover:border-neutral-900 group-hover:text-neutral-900">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}