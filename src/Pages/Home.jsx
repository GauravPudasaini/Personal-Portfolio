import React from "react";
import { Link } from "react-router-dom";

const capabilities = [
    "Discovery & research",
    "UI/UX design systems",
    "Full-stack engineering",
    "Cloud architecture",
    "Performance & observability",
    "Launch and ongoing care",
];

// const projects = [
//     {
//         title: "Restaurant ecosystem (POS + ops)",
//         description: "Full platform from ordering to kitchen to inventory with cloud-native infrastructure.",
//         stack: "React, Node, PostgreSQL, AWS",
//     },
//     {
//         title: "Portfolio and brand sites",
//         description: "High-conversion marketing experiences with clean design and fast delivery pipelines.",
//         stack: "React, Next.js, Vercel",
//     },
//     {
//         title: "Internal tools & dashboards",
//         description: "Operations tooling with role-based access, analytics, and resilient data flows.",
//         stack: "TypeScript, Tailwind, Supabase",
//     },
// ];

const Home = () => {
    return (
        <div className="mx-auto max-w-6xl px-6">
            <section className="grid gap-10 pb-16 pt-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">End-to-end builder</p>
                    <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                        I design, code, and ship <span className="text-indigo-300">complete products</span> from brief to deploy.
                    </h1>
                    <p className="text-lg text-slate-200">
                        I&apos;m Gaurav Pudasaini—software developer and AWS Certified Solutions Architect. I lead projects from research to UI/UX, frontend, backend, and cloud delivery on AWS, Azure, Vercel, or cPanel.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
                        >
                            Start a project
                        </Link>
                        {/* <Link
                            to="/portfolio"
                            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-white"
                        >
                            View work
                        </Link> */}
                    </div>

                </div>

                <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-400/10 blur-3xl" />
                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-500/20 backdrop-blur">
                        <div className="flex items-center justify-between text-sm text-slate-300">
                            <span>Stack coverage</span>
                            <span>Full lifecycle</span>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                            {capabilities.map((item) => (
                                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 text-slate-100">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Capabilities</p>
                        <h2 className="text-2xl font-semibold text-white">Everything you need to launch</h2>
                    </div>
                    <Link to="/about" className="text-sm text-indigo-300 hover:text-indigo-200">
                        Learn more about me →
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
                        <p className="text-sm text-indigo-300">01</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">Research & UX</h3>
                        <p className="mt-2 text-sm text-slate-300">Discovery, flows, wireframes, and design systems crafted for conversion and clarity.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
                        <p className="text-sm text-indigo-300">02</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">Full-stack builds</h3>
                        <p className="mt-2 text-sm text-slate-300">Frontend with React/Next and Tailwind; backend APIs with Node/Express; data you can trust.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
                        <p className="text-sm text-indigo-300">03</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">Cloud launches</h3>
                        <p className="mt-2 text-sm text-slate-300">Deployments to AWS, Azure, Vercel, or cPanel with CI/CD, monitoring, and performance tuning.</p>
                    </div>
                </div>
            </section>
{/* 
            <section className="mt-14 space-y-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Featured work</p>
                        <h2 className="text-2xl font-semibold text-white">Recent builds & ecosystems</h2>
                    </div>
                    <Link to="/portfolio" className="text-sm text-indigo-300 hover:text-indigo-200">
                        View portfolio →
                    </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-indigo-500/10">
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                            <p className="mt-3 text-xs uppercase tracking-wide text-indigo-200">{project.stack}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 md:grid-cols-[1.2fr_1fr]">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Process</p>
                    <h2 className="text-2xl font-semibold text-white">A calm, predictable delivery path</h2>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li><span className="text-white">01 • Explore.</span> Stakeholder goals, constraints, and quick research to shape the plan.</li>
                        <li><span className="text-white">02 • Design.</span> Flows, prototypes, and design systems that align with brand and usability.</li>
                        <li><span className="text-white">03 • Build.</span> Clean, testable code for frontend, backend, and integrations.</li>
                        <li><span className="text-white">04 • Launch.</span> Cloud architecture, CI/CD, performance budgets, and monitoring.</li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
                    <p className="text-sm text-indigo-300">Availability</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Booking new projects</h3>
                    <p className="mt-2 text-sm text-slate-300">Open for select collaborations—ideal for teams who need hands-on leadership across design, engineering, and cloud.</p>
                    <Link
                        to="/contact"
                        className="mt-4 inline-block rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-400"
                    >
                        Schedule a chat
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;