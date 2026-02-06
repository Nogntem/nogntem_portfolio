"use client";

export default function Stack() {
    const categories = [
        {
            id: "01",
            title: "Backend & Architecture",
            description: "Conception d'API robustes et logique métier complexe.",
            tools: ["Java", "Python", "SQL", "PHP", "Laravel"]
        },
        {
            id: "02",
            title: "Frontend & UI",
            description: "Interfaces réactives, typées et pixel-perfect.",
            tools: ["React", "TypeScript", "Tailwind CSS", "BootStrap"]
        },
        {
            id: "03",
            title: "Système & DevOps",
            description: "Environnements Linux et automatisation.",
            tools: ["Linux", "Docker", "Git", "Bash"]
        }
    ];

    return (
        <section className=" py-24 px-8" id="stack">

            <div className="container mx-auto mb-20 border-b border-neutral-300 pb-8">
                <h2 className="font-serif text-5xl md:text-7xl font-light text-neutral-900 mb-6">
                    Expertise <span className="italic text-neutral-400">&</span> Stack
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <p className="max-w-xl text-lg text-neutral-600 font-light leading-relaxed">
                        Je conçois des écosystèmes numériques complets. De l&#39;architecture serveur invisible à l&#39;interaction utilisateur fluide, chaque couche est pensée pour la performance.
                    </p>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Tech_Spec_2026
            </span>
                </div>
            </div>
            
            <div className="container mx-auto flex flex-col">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group flex flex-col md:flex-row border-b border-neutral-300 py-12 transition-colors hover:bg-[#FFF7ED]/50"
                    >

                        <div className="md:w-1/3 flex flex-col justify-between mb-6 md:mb-0">
                <span className="font-mono text-xs text-neutral-400 mb-2">
                    ({cat.id})
                </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-neutral-900">
                                {cat.title}
                            </h3>
                        </div>

                        <div className="md:w-2/3 flex flex-col gap-6 md:pl-12 border-l-0 md:border-l border-neutral-200">
                            <p className="text-lg text-neutral-500 font-light">
                                {cat.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {cat.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 border border-neutral-300 rounded-full text-sm font-sans text-neutral-800 uppercase tracking-wide transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white"
                                    >
                            {tool}
                        </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}