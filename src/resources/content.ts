// Semua teks dan data ada di sini. Ubah sesuai dirimu.

export const person = {
	name: "Khairul Fadli",
	role: "Full-Stack Developer",
	// Zona waktu IANA, dipakai untuk jam di header dan di halaman About.
	timeZone: "Asia/Jakarta",
	location: "Indonesia/Bekasi",
	// Taruh foto di public/images/avatar.jpg. Kosongkan untuk memakai inisial.
	avatar: "/images/avatar.jpg",
	email: "khairulfadli.job@gmail.com",
	languages: ["Indonesian", "English", "Japanese"],
};

export const labels = {
	about: "About",
	work: "Work",
	blog: "Blog",
};

// icon: github | linkedin | instagram | whatsapp | email
export const social = [
	{ name: "GitHub", icon: "github", href: "https://github.com/khairullfadli" },
	{
		name: "LinkedIn",
		icon: "linkedin",
		href: "https://www.linkedin.com/in/khairulfadli-dev/",
	},
	{
		name: "Instagram",
		icon: "instagram",
		href: "https://www.instagram.com/khairull.fadli/",
	},
	{ name: "Whatsapp", icon: "whatsapp", href: "https://wa.me/6283895783378" },
	{ name: "Email", icon: "email", href: `mailto:${person.email}` },
];

export const home = {
	title: "Khairul's Portfolio",
	description: `Portfolio website showcasing my work as a ${person.role}`,
	badge: "My Journey in Technology",
	headline: `Hello There! I'm ${person.name}`,
	subline:
		"An Informatics Engineering graduate passionate about technology, continuous growth, and exploring new ideas. Experienced in Full-Stack Development, IT Operations, and IT Security.",
	aboutLabel: "About Me",
};

export const about = {
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from Bekasi, Indonesia`,
	tableOfContent: true,
	cta: { display: true, label: "Download CV", href: "/CV_Khairul Fadli.pdf" },
	intro: {
		title: "Introduction",
		// GANTI: ini masih teks sementara.
		description: `I’m passionate about building reliable digital solutions, solving technical challenges, and continuously learning new technologies. My experience spans Full-Stack Development, IT Operations, and IT Security.`,
	},
	// GANTI: bagian di bawah masih data contoh dari template referensi.
	work: {
		title: "Work Experience",
		experiences: [
			{
				company: "PT Bank Negara Indonesia (Persero) Tbk.",
				timeframe: "August 2026 - Present",
				role: "IT Developer",
				achievements: [
					"Engineered and developed end-to-end web applications from the ground up, handling both frontend user interfaces and backend business logic.",
					"Collaborated closely in an Agile environment with cross-functional team members, including fellow developers, product managers, and QA engineers, to translate business requirements into scalable digital solutions.",
					"Ensured high application responsiveness, optimized code performance, and applied strict banking security standards across all development phases.",
				],
			},
			{
				company: "CV Alvirel Putra Teknik",
				timeframe: "January 2025 - July 2026",
				role: "IT Support Staff",
				achievements: [
					"Provided daily technical support for hardware, software, and network infrastructures.",
					"Installed, configured, and maintained computers, and other peripheral devices.",
					"Resolved complex system issues through effective troubleshooting and technical analysis.",
				],
			},
			{
				company: "BPTI UHAMKA",
				timeframe: "August - November 2023",
				role: "Internship Full Stack Developer",
				achievements: [
					"Developed a web-based student activities system interface using PHP (Laravel Framework).",
					"Implemented a digital system to support student activities.",
				],
			},
		],
	},
	studies: {
		title: "Studies",
		institutions: [
			{
				name: "Universitas Muhammadiyah Prof. Dr. Hamka",
				description: "B.Eng. in Informatics Engineering",
				grade: "GPA: 3.53/4.00",
			},
			{
				name: "SMAN 01 Cibarusah",
				description: "Science (MIPA)",
				grade: "Average Grade: 88.00/100.00",
			},
		],
	},
	technical: {
		title: "Technical skills",
		skills: [
			{
				title: "Full-Stack Development",
				description:
					"Building end-to-end web applications with a focus on responsive interfaces and reliable backend systems.",
				tags: [
					"JavaScript",
					"TypeScript",
					"React",
					"Next.js",
					"Node.js",
					"Python",
					"PHP",
					"MySQL",
					"C#",
					".NET",
					"HTML",
					"CSS",
					"Laravel",
					"Rest API",
					"Git",
				],
			},
			{
				title: "IT Operations & Security",
				description:
					"Supporting IT infrastructure, network environments, and secure system operations.",
				tags: ["IT Support", "LAN/WAN", "Network Security", "Cloud Security"],
			},
			{
				title: "Cloud & DevOps",
				description:
					"Working with cloud infrastructure, system deployment, monitoring, and operational reliability.",
				tags: [
					"Cloud Storage",
					"Compute Engine",
					"IAM",
					"Cloud Monitoring & Logging",
				],
			},
			{
				title: "AI & Machine Learning",
				description:
					"Exploring intelligent systems, machine learning models, and data-driven solutions.",
				tags: [
					"AI Agents",
					"Generative AI",
					"Machine Learning",
					"Data Engineering",
					"TensorFlow",
				],
			},
		],
	},
};

export const work = {
	title: `Projects – ${person.name}`,
	description: `Projects by ${person.name}`,
};

export const blog = {
	title: "Writing about tech and development",
	description: `Read what ${person.name} has been up to recently`,
};
