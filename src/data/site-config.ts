// ============================================================
// 📝 EDIT THIS FILE to customize your portfolio
// ============================================================

export const siteConfig = {
	name: "Joel Koh Yit Ming",
	title: "Process Innovation Consultant | Digital Transformation | CSM",
	tagline:
		"Helping organisations make better sense and decisions based on data; where facts replace opinions. Transforming organisational processes via digitalisation and automation.\nI analyse process flows, identify gaps, and build digital solutions that turn operational complexity into streamlined, data-driven outcomes.", // "Helping organisations make better sense and decisions based on data; where facts replace opinions. Transforming organisational processes via digitalisation and automation.",
	email: "Joelkohym@gmail.com",
	location: "Singapore",
	bio: `Results-driven technology consultant and product owner with 9 years of experience at the intersection of business and technology. I specialise in analysing end-to-end process and data flows, documenting the as-is state, identifying gaps and constraints, and designing to-be solutions that close them. This process-first approach underpins every digital solution I deliver — spanning full-stack development, computer vision, digital twins, process automation, and enterprise system integration. Adept at leading cross-functional teams and owning end-to-end product delivery across supply chain, manufacturing, and logistics domains.`,
	resumeUrl: "/resume.pdf",
	socialLinks: {
		github: "https://github.com/Joelkohym",
		linkedin: "https://www.linkedin.com/in/joelkohym/",
	},
	profilePicture: "/profile_pic.jpg",
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
	image?: string;
};

export const projects: Project[] = [
	{
		title: "Golden Matcha",
		description:
			"A full-stack e-commerce platform for a Bangkok-born premium matcha brand sourcing directly from Japanese tea farms. Features product browsing, cart management, and checkout — built to make quality matcha accessible to everyday drinkers and businesses alike.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://goldenmatcha.vercel.app",
		repoUrl: "https://github.com/Joelkohym/golden-matcha",
		featured: true,
		image: "/projects/goldenmatcha.png",
	},
	{
		title: "Lau Boon Heng",
		description:
			"A full-stack e-commerce platform for one of Singapore's leading noodle manufacturers, established in 1962. Features product catalogue, next-day delivery ordering, and a brand story showcasing over 60 years of innovation — from handcrafted rice noodles to fully automated production.",
		tags: ["React.js", "TypeScript", "Tailwind CSS"],
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
			"Python Flask",
			"MySQL",
			"AWS RDS",
			"AWS S3",
			"AWS Elastic Beanstalk",
			"AWS CodePipeline",
			"AWS EC2",
			"WebSocket",
			"HTML",
			"CSS",
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
			"Python Flask",
			"HTML",
			"CSS",
			"MySQL",
			"AWS EC2",
			"AWS Elastic Beanstalk",
			"AWS CodePipeline",
			"AWS RDS",
		],
		liveUrl: "https://sgtd-haulier-grant.sgtradex.net/",
		featured: true,
		image: "/projects/GrantForm.png",
	},
	{
		title: "QR Code Converter",
		description: "A QR Code generator to convert text into scannable QR codes.",
		tags: ["Python", "Flask", "Docker", "ThingWorx", "Rancher", "GitLab"],
	},
	{
		title: "PayNow QR Code Generator",
		description:
			"A PayNow QR Code generator integrated with Xero that automatically fills payment details to prevent human error and ensures the invoice number appears in the reference section of the PayNow receipt.",
		tags: [
			"Python Flask",
			"React.js",
			"Xero",
			"Power Automate",
			"VBA",
			"AWS Elastic Beanstalk",
		],
	},
	{
		title: "Customer Operations Automation",
		description:
			"Collaborated with external customers to identify pain points in their operational processes and developed tailored automation solutions to optimize their workflows, leading to improved efficiency and customer satisfaction.",
		tags: ["Python", "Power Automate", "Process Automation"],
	},
	{
		title: "SMS & QR Code Website",
		description:
			"A website with the ability to send SMS via API and generate QR codes, built to support internal logistics operations.",
		tags: ["Python", "Flask", "API", "QR Code"],
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
		role: "Process Innovation Consultant",
		company: "Hyundai Motor Group Innovation Center Singapore (HMGICS)",
		period: "Aug 2024 — Present",
		description:
			"Full-time, on-site in Singapore. Leading strategy and end-to-end delivery of innovation and integration initiatives across supply chain, manufacturing, and robotics domains.",
		highlights: [
			"Built an auto-annotation application for computer vision model training supporting a pick-and-place robotics use case, cutting manual annotation effort by ~90% and significantly accelerating AI-driven model development",
			"Led strategy and end-to-end project delivery of a non-intrusive systems monitoring platform capable of detecting issues in legacy systems without source-code modifications",
			"Architected a master data model for supply chain operations, standardising product, supplier, and location data to improve data quality, system integration, and end-to-end visibility",
			"Owned the full feature lifecycle, refactoring codebases for maintainability while integrating frontend applications with backend services",
			"Implemented microservices with real-time data synchronization to ensure consistency across the ecosystem",
			"Analysed and documented process and data flows across multiple legacy systems, identifying constraints and designing innovative solutions to enhance functionality and integration",
			"Managed cross-functional teams to deliver multiple innovation and integration projects simultaneously, ensuring on-time delivery, resource optimization, and alignment with strategic goals",
			"Designed, developed, and deployed a barcode conversion platform using ThingWorx, Python, Rancher, GitLab, and Docker, enabling seamless 1D/2D barcode transformation for legacy systems without vendor or source-code changes",
			"Mentored team members and fostered a culture of agile delivery, design thinking, and continuous improvement",
		],
	},
	{
		role: "Digital Transformation Manager",
		company: "SGTraDex",
		period: "Jan 2023 — Aug 2024",
		description:
			"Full-time. Built and deployed full-stack platforms modernising trade and logistics operations for external users and internal teams.",
		highlights: [
			"Developed VesselNow (React.js, Python Flask, MySQL, AWS RDS, AWS S3, AWS Elastic Beanstalk, AWS CodePipeline, AWS EC2, WebSocket, HTML, CSS) — a robust platform enabling external users to efficiently search for real-time vessel locations and pilotage information",
			"Implemented a notification feature that alerts users when timestamps change, ensuring timely updates",
			"Designed the system to export data seamlessly for downstream automation and data entry processes",
			"Spearheaded the development of a Dynamic Form Solution (Python Flask, HTML, CSS, MySQL, AWS EC2, AWS Elastic Beanstalk, AWS CodePipeline, AWS RDS) — an intuitive platform allowing external users to complete dynamic forms",
			"Leveraged automation to extract data from AWS S3 and AWS RDS, streamlining data retrieval and analysis; developed a Power BI dashboard for comprehensive data visualization",
			"Streamlined the Internal Billing System (Python Flask, React.js, Power Automate, VBA, Microsoft Teams, AWS Elastic Beanstalk, AWS CodePipeline, DocuSign, Xero) — engineered automation solutions to integrate with DocuSign, significantly reducing manual billing processes",
			"Created a PayNow QR Code generator integrated with Xero, automatically filling payment details to prevent human error and ensure invoice number appears in the reference section",
			"Collaborated with external customers to identify pain points in their operational processes and developed tailored automation solutions to optimize their workflows",
		],
	},
	{
		role: "Assistant Manager — Analytics and Process Improvement",
		company: "DB Schenker",
		period: "Jan 2022 — Jan 2023",
		description:
			"Full-time. Led a team of five analysts/executives driving analytics, automation, and process improvement across logistics operations.",
		highlights: [
			"Led a team of five analysts/executives",
			"Project Manager for the Spatial Digital Twin Project",
			"Developed Power BI dashboards to analyse and monitor operational processes",
			"Developed a website with the ability to send SMS via API and generate QR codes using Python",
			"Developed mobile and web applications using PowerApps",
			"Designed and conducted Power BI trainings with hands-on exercises",
			"Maintained >10 implemented automation solutions",
		],
	},
	{
		role: "Senior Analyst — Operations Excellence",
		company: "DB Schenker",
		period: "Jan 2021 — Dec 2021",
		description:
			"Full-time. Drove automation and cost savings initiatives across logistics operations.",
		highlights: [
			"Achieved >100,000 SGD annual cost savings, reducing operational man-hours by >6,000 hours a year",
			"Introduced the ability to use Ghostscript in Python and convert .py files to .exe, enabling development of customised in-house applications",
			"Streamlined and automated retrieval methods to shorten preparation time, using Python, Excel VBA, Power Apps, Power Automate, SharePoint, and RPA",
			"Removed manual SAP and Excel processes via automation, saving time and reducing fatigue and error rates",
			"Worked with internal IT and customers on changes and improvements of existing and new parameters",
			"Assisted in-house workshops as a Power Apps / Power Automate consultant",
		],
	},
	{
		role: "Global Business Intelligence Analyst",
		company: "DHL",
		period: "Jan 2020 — Dec 2020",
		description:
			"Full-time. Provided operational performance reporting to DHL's top 100 customers and management on both regional and global levels.",
		highlights: [
			"Conducted accurate, proven and reliable analysis through the practical application of First Choice / Six Sigma and designated tools",
			"Analysed operational processes and data to identify root causes for trends and issues at customer, sector/industry, or product level",
			"Proficiently used Crystal Reports, Power BI, SQL, and UiPath for reporting and analysis across CSI and other business units",
			"Implemented Weight Break Analysis using Power BI, allowing RCMs to maximise savings for their customers and gain insights on shipments to identify new business opportunities",
		],
	},
	{
		role: "APAC Pricing Analyst / Product Owner",
		company: "DHL",
		period: "Aug 2017 — Dec 2019",
		description:
			"Full-time. Business Champion who co-created KIWI+, a global web-based system tool covering the entire workflow for Key Account Pricing (KAP) teams, encompassing 400+ users from 80+ countries.",
		highlights: [
			"Developed the logic and criteria of the Auto-assignment feature, which helped save 1 manpower a day",
			"Scripted user stories and acceptance criteria for KIWI+; managed the User Acceptance Testing (UAT) process",
			"Collaborated with EU & AM Business Teams and UX & Web Development Teams to ensure successful take-up of the system",
			"Created a User Guide for each role to assist users in navigating and understanding the system functions with ease",
			"Conducted trainings for more than 100 users in APAC on how to use KIWI+ and shared best practices",
			"Conducted customer pricing analysis for requests from 15 different countries in Asia Pacific, including China, regarding special rates",
			"Simulated and analysed entire customer business with existing and potential volumes using up-to-date pricing tools and systems",
			"Supported the regional Tender Review Board (TRB) process for eligible KAPs",
			"Generated accurate Customer Pricing Reports including pricing comments/recommendations, opportunity snap-shots, and detailed analysis by product, lane, and weight breaks",
			"Meticulously implemented and updated rates into in-house billing system",
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
	"Microsoft Power Platform",
	"Power BI",
	"Power Apps",
	"Power Automate",
	"VBA",
	"Microsoft SQL Server",
	"UiPath RPA",
	"GitLab",
	"GitHub",
	"Kafka",
	"Kubernetes",
	"Azure",
	"Tailwind CSS",
	"Docker",
	"AWS",
	"WebSockets",
	"HTML & CSS",
	"Figma",
	"Jira",
	"Confluence",
	"ThingWorx",
];
