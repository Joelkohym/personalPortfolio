"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-[#050505] pb-20 px-6 md:px-12 lg:px-24 z-0 text-center">
			{/* Background grid */}
			<div className="absolute inset-0 opacity-[0.04]">
				<div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]" />
			</div>

			{/* Large ambient glows */}
			<motion.div
				className="absolute -top-32 left-0 rounded-full bg-[--color-accent] blur-[140px] opacity-20"
				animate={{
					x: [0, 40, 0],
					y: [0, -20, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute bottom-0 right-0 rounded-full bg-white blur-[160px] opacity-[0.03]"
				animate={{
					x: [0, -30, 0],
					y: [0, 20, 0],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Decorative radial ring */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div className="w-[75vw] h-[75vw] border border-white/5 rounded-full" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20">
				<div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
					{/* LEFT CONTENT */}
					<div className="text-left">
						{/* Label */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mb-8"
						>
							<span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[--color-accent]">
								<span className="h-px bg-[--color-accent]" />
								Portfolio
							</span>
						</motion.div>
						<div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[--color-accent]" />
						<div />

						{/* Main heading */}
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-[-0.05em] mb-12 md:mb-16"
						>
							<span className="block">{siteConfig.name}</span>

							<span className="text-white max-w-3xl text-xl md:text-3xl leading-relaxed mb-10 mt-12 md:mt-20 pt-10">
								{siteConfig.title}
							</span>
						</motion.h1>
						<div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[--color-accent]" />
						<div />

						{/* Tagline */}
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}
							className="max-w-3xl text-lg md:text-2xl leading-relaxed mb-8"
						>
							{siteConfig.tagline}
						</motion.p>
						{/* Bio */}
						{/* <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[--color-accent]" />
						<div />

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
							className="max-w-2xl text-base md:text-lg leading-relaxed text-white/50 mb-14"
						>
							{siteConfig.bio}
						</motion.p> */}
						<div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-[--color-accent]" />
						<div />

						{/* Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.7 }}
							className="flex flex-wrap gap-5"
						>
							<motion.a
								href="#projects"
								className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[--color-accent] font-medium tracking-wide"
								whileHover={{
									scale: 1.04,
								}}
								whileTap={{ scale: 0.96 }}
							>
								<span className="relative z-10 text-white">View Projects</span>

								<svg
									className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="White"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</motion.a>

							<motion.a
								href="#contact"
								className="inline-flex items-center px-8 py-10 rounded-full border text-white border-white/15 backdrop-blur-sm hover:bg-white/5 transition-all"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.96 }}
							>
								Get in Touch
							</motion.a>
						</motion.div>
					</div>

					{/* RIGHT VISUAL */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							delay: 0.3,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative flex justify-center lg:justify-end"
					>
						{/* Outer glow */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-[24rem] h-[24rem] rounded-full bg-[--color-accent] opacity-20 blur-[120px]" />
						</div>

						{/* Profile image frame */}
						<div className="relative">
							<div className="absolute -inset-6 rounded-[2rem] border border-white/10 rotate-6" />

							<div className="absolute -inset-3 rounded-[2rem] border border-[--color-accent]/30 -rotate-3" />

							<div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
								<Image
									src={siteConfig.profilePicture}
									alt="Profile picture"
									fill
									priority
									className="object-cover hover:grayscale-0 transition duration-700"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8, duration: 0.8 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
			>
				<span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
					Scroll
				</span>

				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 1.6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"
				/>
			</motion.div>
		</section>
	);
}
