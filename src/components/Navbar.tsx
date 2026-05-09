"use client";

import { useState } from "react";
import { siteConfig, navLinks } from "@/data/site-config";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm h-24 shadow-md">
				<div className="max-w-auto mx-auto h-full flex items-center justify-between px-6 md:px-12">
					{/* Logo */}
					<a
						href="#"
						className="font-serif text-2xl tracking-tight text-[--color-accent] hover:text-[--color-accent-bright] transition"
					>
						{siteConfig.name.split(" ")[0]}
						<span className="text-[--color-accent-bright]">.</span>
					</a>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-serif text-xs uppercase tracking-[0.15em] text-[--color-accent] hover:text-[--color-accent-bright] transition"
							>
								{link.label}
							</a>
						))}
						<a
							href={siteConfig.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="font-serif text-xs uppercase tracking-[0.15em] px-4 py-2 border border-[--color-accent] text-[--color-accent] rounded-full hover:bg-[--color-accent] hover:text-[--color-bg] transition-all duration-300"
						>
							Résumé
						</a>
					</div>

					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden flex flex-col gap-1.5 p-2"
						aria-label="Toggle menu"
					>
						<span
							className={`block w-5 h-px bg-[--color-accent] transition-all duration-300 ${
								mobileOpen ? "rotate-45 translate-y-1.25" : ""
							}`}
						/>
						<span
							className={`block w-5 h-px bg-[--color-accent] transition-all duration-300 ${
								mobileOpen ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`block w-5 h-px bg-[--color-accent] transition-all duration-300 ${
								mobileOpen ? "-rotate-45 -translate-y-1.25" : ""
							}`}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden fixed top-24 left-0 right-0 bg-black border-t border-yellow-900 shadow-md z-40 font-serif">
					<div className="px-4 pt-4 pb-6 space-y-1">
						{navLinks.map(({ href, label }) => (
							<a
								key={href}
								href={href}
								onClick={() => setMobileOpen(false)}
								className="block w-full text-left px-3 py-2 text-[--color-accent] hover:bg-yellow-900/30 rounded uppercase tracking-wide text-sm"
							>
								{label}
							</a>
						))}
						<a
							href={siteConfig.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setMobileOpen(false)}
							className="block w-full text-left px-3 py-2 text-[--color-accent] hover:bg-yellow-900/30 rounded uppercase tracking-wide text-sm"
						>
							Résumé
						</a>
					</div>
				</div>
			)}
		</>
	);
}
