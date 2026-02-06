import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    // { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link to="/" className="text-lg font-semibold text-white">
                    Gaurav Pudasaini
                </Link>

                <button
                    className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span className="block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                </button>

                <nav className="hidden items-center gap-6 md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm ${isActive ? "text-indigo-300" : "text-slate-200 hover:text-white"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-400"
                    >
                        Let&apos;s Talk
                    </Link>
                </nav>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `text-base ${isActive ? "text-indigo-300" : "text-slate-200 hover:text-white"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setOpen(false)}
                            className="rounded-full bg-indigo-500 px-4 py-2 text-center text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-400"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;