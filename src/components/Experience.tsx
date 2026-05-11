"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/data/site-config";

export default function Experience() {
	return (
		<Section
			id="experience"
			className="py-32 px-6 md:px-12 lg:px-24 w-full bg-black text-center flex flex-col items-center"
		>
			{/* 1. 'text-center' handles the text alignment.
          2. 'items-center' on the Section ensures the content stays in the middle.
      */}

			<div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
				{/* Section Label */}
				<motion.span
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-sm md:text-base tracking-[0.3em] uppercase text-[--color-accent] mb-6 block font-medium"
				></motion.span>
				{/* Main Heading */}
				<h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12 font-serif text-white">
					Where I&apos;ve{" "}
					<span className="text-[--color-accent] italic">worked</span>
				</h2>
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-[--color-accent]/40 via-[--color-border] to-transparent" />

					<div className="space-y-16">
						{experiences.map((exp, i) => (
							<motion.div
								key={exp.company + exp.role}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="relative pl-8 md:pl-20"
							>
								{/* Timeline dot */}
								<div className="absolute left-0 md:left-8 top-1.5 w-2 h-2 rounded-full bg-[--color-accent] -translate-x-1">
									<div className="absolute inset-0 rounded-full bg-[--color-accent] animate-ping opacity-20" />
								</div>

								<div className="flex flex-col md:flex-row md:items-start md:justify-center gap-2 mb-4">
									<div>
										<h3 className="text-display text-2xl text-white font-extrabold">
											{exp.role}
										</h3>
										<p className="text-lg mt-1 font-extrabold text-white/90">
											{exp.company}
										</p>
									</div>
									<span className="text-lg tracking-wider uppercase text-[--color-text-muted] md:mt-1.5 shrink-0">
										{exp.period}
									</span>
								</div>

								<p className="text-[--color-text-secondary] text-left  text-lg mb-4 leading-relaxed">
									{"Summary: " + exp.description}
								</p>
								<div className="inline-flex items-center gap-3 text-lg uppercase tracking-[0.35em] text-[--color-accent]" />
								<div />
								<ul className="space-y-2 text-left w-full">
									{exp.highlights.map((h) => (
										<li
											key={h}
											className="flex items-start gap-3 text-lg text-[--color-text-muted]"
										>
											<span className="shrink-0">•</span>
											<span>{h}</span>
										</li>
									))}
								</ul>
								<div className="inline-flex items-center gap-3 text-lg uppercase tracking-[0.35em] text-[--color-accent]" />
								<div />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
