// ============================================================
// 📝 EDIT THIS FILE to customize your portfolio
// ============================================================

export const siteConfig = {
	name: "Joel Koh Yit Ming",
	title: "Process Innovation Consultant | Digital Transformation | CSM",
	tagline:
		"Helping organisations make better sense and decisions based on data; where facts replace opinions. Transforming organisational processes via digitalisation and automation.",
	email: "Joelkohym@gmail.com",
	location: "Singapore",
	bio: `Results-driven technology consultant and product owner with 9 years of experience at the intersection of business and technology. Proven track record of translating complex operational requirements into scalable digital solutions — spanning full-stack development, computer vision, digital twins, process automation, and enterprise system integration. Adept at leading cross-functional teams and owning end-to-end product delivery across supply chain, manufacturing, and logistics domains.`,
	resumeUrl: "/resume.pdf", // place your resume in /public/resume.pdf
	socialLinks: {
		github: "https://github.com/Joelkohym",
		linkedin: "https://www.linkedin.com/in/joelkohym/",
	},
	profilePicture: "/profile_pic.jpg", // place your profile picture in /public/profile_pic.jpg
};

export const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export type Project = {
	title: string;
	description: string;
	tags: string[];
	liveUrl?: string;
	repoUrl?: string;
	featured?: boolean;
	image?: string; // place images in /public/projects/
};

export const projects: Project[] = [
	{
		title: "Golden Matcha",
		description: "A full-stack e-commerce platform for a premium matcha brand.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://goldenmatcha.vercel.app",
		repoUrl: "https://github.com/Joelkohym/golden-matcha",
		featured: true,
		image: "/projects/goldenmatcha.png",
	},
	{
		title: "Lau Boon Heng",
		description:
			"A full-stack e-commerce platform for a premium noodles brand.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://lauboonheng.onrender.com/",
		repoUrl: "https://github.com/Joelkohym/lau-boon-heng",
		featured: true,
		image: "/projects/lauboonheng.png",
	},

	{
		title: "VesselNow",
		description:
			"A robust platform enabling external users to efficiently search for real-time vessel locations and pilotage information.",
		tags: [
			"React.js",
			"python flask",
			"mysql",
			"AWS RDS",
			"AWS S3",
			"AWS Elastic beanstalk",
			"AWS Codepipeline",
			"AWS EC2",
			"websocket",
			"html",
			"css",
		],
		liveUrl: "https://vesselnow.sgtradex.net/",
		featured: true,
		image: "/projects/vesselnow.png",
	},
	{
		title: "SGTraDex TMS EnterpriseSG Grant Form",
		description:
			"An intuitive platform that allows external users to complete dynamic forms.",
		tags: [
			"python flask",
			"html",
			"css",
			"mysql",
			"AWS EC2",
			"AWS Elastic beanstalk",
			"AWS Codepipeline",
			"AWS RDS",
		],
		liveUrl: "https://sgtd-haulier-grant.sgtradex.net/",
		featured: true,
		image: "/projects/GrantForm.png",
	},
	{
		title: "QR Code Converter",
		description: "A QR Code generator to convert text into scannable QR codes.",
		tags: ["Python, Flask", "Docker", "ThingWorx", "Rancher", "GitLab"],
		repoUrl: "https://gitlab.com/joelkohym/qr-code-converter",
	},
];

export type Experience = {
	role: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
};

export const experiences: Experience[] = [
	{
		role: "Innovation Consultant",
		company: "Hyundai Motors Group Innovation Center, Singapore (HMGICS)",
		period: "Aug 2024 — Present",
		description:
			"Leading strategy and end-to-end delivery of innovation and integration initiatives across supply chain, manufacturing, and robotics domains.",
		highlights: [
			"Built an auto-labelling application for computer vision model training, cutting manual annotation effort by ~90%",
			"Architected a master data model for supply chain operations, standardising product, supplier, and location data",
			"Designed and implemented microservices with real-time data synchronisation across distributed systems",
			"Managed cross-functional teams delivering multiple innovation initiatives in parallel, on time and within scope",
		],
	},
	{
		role: "Digital Transformation Manager",
		company: "SGTraDex",
		period: "Jan 2023 — Aug 2024",
		description:
			"Built and deployed full-stack platforms modernising trade and logistics operations for external users and internal teams.",
		highlights: [
			"Built and deployed VesselNow — a real-time vessel tracking platform with live location search, WebSocket notifications, and data export (React.js, Python Flask, MySQL, AWS)",
			"Developed a Dynamic Form Solution with automated data extraction and a Power BI dashboard for decision-making",
			"Streamlined the Internal Billing System by integrating DocuSign and Xero, automating workflows and building a PayNow QR code generator",
		],
	},
	{
		role: "Assistant Manager, Operations Excellence",
		company: "DB Schenker",
		period: "Jan 2021 — Jan 2023",
		description:
			"Led a team of five analysts, driving automation and process improvement across logistics operations.",
		highlights: [
			"Achieved >150,000 SGD annual cost savings, reducing operational man-hours by >6,000 hours/year",
			"Removed manual SAP and Excel processes via Python, VBA, Power Apps, Power Automate, and RPA automation",
			"Designed and led Power BI training for staff; served as in-house Power Apps consultant",
		],
	},
	{
		role: "Business Intelligence Analyst",
		company: "DHL",
		period: "Jan 2020 — Dec 2020",
		description:
			"Delivered operational performance reporting to DHL's top 100 customers and management on a regional and global level.",
		highlights: [
			"Analysed operational processes and data to identify root causes for trends and issues at customer, sector, and product level",
			"Used Crystal Reports, Power BI, SQL, and UiPath to produce reporting and analysis",
		],
	},
	{
		role: "Product Owner / Pricing Analyst",
		company: "DHL",
		period: "Aug 2017 — Dec 2019",
		description:
			"Business Champion and co-creator of KIWI+, a global web-based pricing platform supporting 400+ users across 80+ countries.",
		highlights: [
			"Developed auto-assignment logic saving approximately 1 FTE per day in manual processing",
			"Scripted user stories and acceptance criteria; managed full UAT process with EU/AM business and UX/dev teams",
			"Conducted training for 100+ APAC users and produced role-specific user guides",
		],
	},
];

export const skills = [
	"Python",
	"TypeScript",
	"JavaScript",
	"React / Next.js",
	"Node.js",
	"PostgreSQL",
	"Oracle SQL",
	"Microsoft Power Platform (Power Apps, Power Automate, Power BI)",
	"Microsoft Visual Basic for Applications (VBA)",
	"Microsoft SQL Server",
	"UiPath RPA",
	"GitLab",
	"GitHub",
	"Gitbash",
	"Kafka",
	"Kubernetes",
	"Azure",
	"Tailwind CSS",
	"Docker",
	"AWS RDS",
	"AWS EC2",
	"AWS Elastic Beanstalk",
	"AWS Codepipeline",
	"WebSockets",
	"HTML & CSS",
	"Figma",
	"Jira",
	"Confluence",
	"ThingWorx",
];
