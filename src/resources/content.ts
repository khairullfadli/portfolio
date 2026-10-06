// Semua teks dan data ada di sini. Ubah sesuai dirimu.

export const person = {
	name: "Khairul Fadli",
	role: "Backend Developer",
	// Zona waktu IANA, dipakai untuk jam di header dan di halaman About.
	timeZone: "Asia/Jakarta",
	// Taruh foto di public/images/avatar.jpg. Kosongkan untuk memakai inisial.
	avatar: "/images/avatar.jpg",
	email: "khairulfadli.dev@gmail.com",
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
	badge: "welcome to my portfolio",
	headline: `Hello There! I'm ${person.name}`,
	subline:
		"An Informatics Engineering graduate with a passion for technology and a drive for continuous learning. Experienced in Full-Stack Development, Networking, and IT Support. Based in Bekasi, Indonesia.",
	aboutLabel: `About – ${person.name}`,
};

export const about = {
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from Bekasi, Indonesia`,
	tableOfContent: true,
	calendar: {
		display: true,
		label: "Schedule a call",
		href: "https://cal.com",
	},
	intro: {
		title: "Introduction",
		// GANTI: ini masih teks sementara.
		description: `${person.name} is a ${person.role} based in Bekasi, Indonesia, with a passion for building reliable systems and learning new technology.`,
	},
	// GANTI: bagian di bawah masih data contoh dari template referensi.
	work: {
		title: "Work Experience",
		experiences: [
			{
				company: "FLY",
				timeframe: "2022 - Present",
				role: "Senior Design Engineer",
				achievements: [
					"Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
				],
			},
			{
				company: "Creativ3",
				timeframe: "2018 - 2022",
				role: "Lead Designer",
				achievements: [
					"Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
					"Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
				],
			},
		],
	},
	studies: {
		title: "Studies",
		institutions: [
			{
				name: "University of Jakarta",
				description: "Studied software engineering.",
			},
			{
				name: "Build the Future",
				description: "Studied online marketing and personal branding.",
			},
		],
	},
	technical: {
		title: "Technical skills",
		skills: [
			{
				title: "Figma",
				description: "Able to prototype in Figma with unnatural speed.",
				tags: ["Figma"],
			},
			{
				title: "Next.js",
				description: "Building next gen apps with Next.js and Supabase.",
				tags: ["JavaScript", "Next.js", "Supabase"],
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
