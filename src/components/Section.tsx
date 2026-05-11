"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
	id?: string;
	children: ReactNode;
	className?: string;
	delay?: number;
}

export default function Section({
	id,
	children,
	className = "",
	delay = 0,
}: SectionProps) {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6, delay, ease: "easeOut" }}
			className={`px-5! md:px-12! lg:px-24! py-12! md:py-20! ${className}`}
		>
			{children}
		</motion.section>
	);
}
