import React from "react";

const work = [
    {
        title: "Restaurant ecosystem (POS + ops)",
        timeline: "Multi-quarter engagement",
        summary: "Built a full platform connecting ordering, kitchen, inventory, and analytics with real-time data flows.",
        contributions: ["Product discovery and flows", "UI/UX system for operators", "Full-stack implementation", "AWS infrastructure & monitoring"],
        tech: "React, Tailwind, Node, PostgreSQL, AWS",
    },
    {
        title: "Portfolio & brand launches",
        timeline: "2-6 week cycles",
        summary: "Fast-turn marketing and portfolio sites with high performance and smooth authoring workflows.",
        contributions: ["Design system creation", "Animation & interactions", "Headless CMS integration", "Vercel deploys"],
        tech: "Next.js, Tailwind, Vercel",
    },
    {
        title: "Operational dashboards",
        timeline: "6-10 weeks",
        summary: "Secure internal tools with role-based access, reporting, and streamlined data pipelines.",
        contributions: ["UX flows and prototyping", "API + auth", "Data modeling", "CI/CD and observability"],
        tech: "TypeScript, Supabase, Express, Azure",
    },
];

const Portfolio = () => {
    return (
        <div className="mx-auto max-w-5xl px-6">
            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-indigo-500/10">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Portfolio</p>
                <h1 className="text-3xl font-semibold text-white">Selected work snapshots</h1>
                <p className="text-lg text-slate-200">A mix of end-to-end builds and focused engagements—always shipping with reliability and polish.</p>
            </section>

            <div className="mt-10 space-y-6">
                {work.map((item) => (
                    <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-lg shadow-indigo-500/10">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                                <p className="text-sm text-indigo-200">{item.timeline}</p>
                            </div>
                            <span className="rounded-full border border-indigo-400/40 px-4 py-2 text-xs uppercase tracking-wide text-indigo-200">
                                {item.tech}
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300">{item.summary}</p>
                        <div className="mt-4 grid gap-2 md:grid-cols-2">
                            {item.contributions.map((point) => (
                                <div key={point} className="flex items-start gap-2 text-sm text-slate-200">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;