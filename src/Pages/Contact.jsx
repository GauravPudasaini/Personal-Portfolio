import React from "react";
import { CheckCircle2, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    const contactMethods = [
        {
            label: "Email",
            href: "mailto:gauravpudasaini11@gmail.com",
            icon: Mail,
            copy: "gauravpudasaini11@gmail.com",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/gaurav-pudasaini/",
            icon: Linkedin,
            copy: "Gaurav Pudasaini on LinkedIn",
        },
    ];

    return (
        <div className="mx-auto max-w-4xl px-6">
            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-indigo-500/10">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
                <h1 className="text-3xl font-semibold text-white">Let&apos;s build something great together.</h1>
                <p className="text-lg text-slate-200">Tell me about your product, the outcomes you&apos;re chasing, and where you&apos;re deploying. I respond quickly.</p>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                        <h2 className="text-xl font-semibold text-white">Ways to reach me</h2>
                        <p className="mt-3 text-sm text-slate-300">Email is best for projects; I&apos;m also open to quick calls to scope timelines.</p>
                        <div className="mt-4 space-y-3 text-sm text-slate-200">
                            {contactMethods.map(({ label, href, icon: Icon, copy }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:border-indigo-400 hover:bg-indigo-500/5"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20 group-hover:ring-indigo-400/40">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block text-sm font-semibold text-white">{label}</span>
                                        <span className="block text-xs text-slate-300">{copy}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                        <h2 className="text-xl font-semibold text-white">Project fit</h2>
                        <ul className="mt-4 space-y-3 text-sm text-slate-200">
                            {["End-to-end delivery: discovery, design, engineering, cloud launch.", "Modern stacks: React/Next, Tailwind, Node/Express, PostgreSQL.", "Deployments on AWS, Azure, Vercel, or cPanel with CI/CD and monitoring."].map((item) => (
                                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5">
                                    <span className="mt-0.5 text-indigo-300">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;