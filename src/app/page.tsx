import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
			{/* Adding flex-col and a large gap-y ensures a massive 
          distance between the end of one section and the start of another 
      */}
			<main className="relative min-h-screen flex flex-col gap-y-5 md:gap-y-10">
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</main>
		</>
	);
}
