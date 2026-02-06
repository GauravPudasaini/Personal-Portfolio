import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    // { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">Gaurav Pudasaini</p>
          <p className="max-w-xl text-sm text-slate-300">
            Building end-to-end digital experiences—strategy, design, frontend, backend, and cloud deploys on AWS, Azure, Vercel, and cPanel.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-indigo-400">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Gaurav Pudasaini. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
