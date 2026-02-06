import React from "react";
import { BadgeCheck, CheckCircle2, Compass, Cpu, Sparkles } from "lucide-react";

const skillColumns = [
    ["Product discovery", "User flows", "Wireframing"],
    ["React / Next.js", "Node.js / Express", "REST & GraphQL"],
    ["TailwindCSS & design systems", "PostgreSQL / Supabase", "CI/CD"],
    ["AWS & Azure architecture", "Monitoring & observability", "Performance tuning"],
];

const About = () => {
    const workPrinciples = [
        "Collaborative discovery to align on goals and constraints.",
        "Design systems that keep interfaces consistent and adaptable.",
        "Ship-ready code with attention to accessibility, performance, and testing.",
        "Cloud architectures that scale—deployments on AWS, Azure, Vercel, and cPanel.",
    ];

    const credentials = [
        "AWS Certified Solutions Architect.",
        "Hands-on with research, UI/UX, frontend, backend, and cloud deploys.",
        "Experience running full lifecycles—ideation, build, launch, and iteration.",
    ];

    return (
        <div className="mx-auto max-w-5xl px-6">
            <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-indigo-500/10">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">About</p>
                <h1 className="text-3xl font-semibold text-white">Hi, I&apos;m Gaurav—builder of resilient, end-to-end experiences.</h1>
                <p className="text-lg text-slate-200">
                    I bridge strategy, design, and engineering so teams can move fast with confidence. I&apos;ve delivered projects across scales—from streamlined portfolio sites to large restaurant ecosystems with POS, inventory, and analytics. I focus on clarity, thoughtful UX, and cloud-native reliability.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                        <div className="flex items-center gap-2 text-indigo-300">
                            <Compass className="h-4 w-4" />
                            <h2 className="text-xl font-semibold text-white">How I work</h2>
                        </div>
                        <ul className="mt-4 space-y-3 text-sm text-slate-200">
                            {workPrinciples.map((item) => (
                                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                        <div className="flex items-center gap-2 text-indigo-300">
                            <BadgeCheck className="h-4 w-4" />
                            <h2 className="text-xl font-semibold text-white">Credentials</h2>
                        </div>
                        <ul className="mt-4 space-y-3 text-sm text-slate-200">
                            {credentials.map((item) => (
                                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
                                    <Cpu className="mt-0.5 h-4 w-4 text-indigo-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mt-12 rounded-3xl border border-white/10 bg-slate-900/50 p-10 backdrop-blur">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Expertise</p>
                        <h2 className="text-2xl font-semibold text-white">Tools and focus areas</h2>
                        <p className="text-sm text-slate-300">A stack built for reliable delivery, from discovery to cloud launch.</p>
                    </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {skillColumns.map((column, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-100 shadow-lg shadow-indigo-500/10 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/70 hover:shadow-indigo-500/20"
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10" />
                            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl" />
                            <div className="relative space-y-2">
                                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                                    <Sparkles className="h-4 w-4" />
                                    <span>Stack lane {idx + 1}</span>
                                </div>
                                <div className="space-y-2">
                                    {column.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 transition group-hover:ring-indigo-400/50"
                                        >
                                            <CheckCircle2 className="h-4 w-4 text-indigo-300" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;