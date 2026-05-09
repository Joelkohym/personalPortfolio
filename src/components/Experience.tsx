"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/data/site-config";

export default function Experience() {
	return (
		<Section
			id="about"
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

								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
									<div>
										<h3 className="text-display text-xl text-[--color-text-primary]">
											{exp.role}
										</h3>
										<p className="text-[--color-accent-dim] text-sm">
											{exp.company}
										</p>
									</div>
									<span className="text-xs tracking-wider uppercase text-[--color-text-muted] md:mt-1.5 shrink-0">
										{exp.period}
									</span>
								</div>

								<p className="text-[--color-text-secondary] text-sm mb-4 leading-relaxed">
									{exp.description}
								</p>

								<ul className="space-y-2">
									{exp.highlights.map((h) => (
										<li
											key={h}
											className="flex items-start gap-3 text-sm text-[--color-text-muted]"
										>
											<span className="mt-2 w-1 h-1 rounded-full bg-[--color-accent] shrink-0" />
											{h}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
