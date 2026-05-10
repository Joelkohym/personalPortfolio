"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig, navLinks } from "@/data/site-config";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setMobileOpen(false);
			}
		}
		if (mobileOpen) document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [mobileOpen]);

	return (
		<div ref={menuRef}>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm h-24 shadow-md overflow-visible">
				<div className="max-w-auto mx-auto h-full flex items-center justify-between px-6 md:px-12 pr-12">
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
						className="md:hidden relative w-8 h-8 flex items-center justify-center group"
						aria-label="Toggle menu"
					>
						<div className="flex flex-col gap-1.5 w-5">
							<span
								className={`block h-px bg-white transition-all duration-300 ease-in-out ${
									mobileOpen ? "rotate-45 translate-y-[7px]" : ""
								}`}
							/>
							<span
								className={`block h-px bg-white transition-all duration-300 ${
									mobileOpen ? "opacity-0" : ""
								}`}
							/>
							<span
								className={`block h-px bg-white transition-all duration-300 ease-in-out ${
									mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
								}`}
							/>
						</div>
					</button>
				</div>
			</nav>

			{/* Mobile dropdown — full width, below navbar */}
			{mobileOpen && (
				<div className="md:hidden fixed top-24 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-t border-[--color-accent]/30 shadow-lg">
					<div className="py-4 px-6 flex flex-col gap-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-serif text-sm uppercase tracking-[0.15em] text-[--color-accent] hover:text-[--color-accent-bright] transition py-2"
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</a>
						))}
						<div className="border-t border-[--color-border] my-1" />
						<a
							href={siteConfig.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="font-serif text-sm uppercase tracking-[0.15em] text-[--color-accent] hover:text-[--color-accent-bright] transition py-2"
							onClick={() => setMobileOpen(false)}
						>
							Résumé ↗
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
