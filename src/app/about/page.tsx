import { CalendarDays, ChevronRight, Globe } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import {
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaWhatsapp,
} from "react-icons/fa";

import { TableOfContents } from "@/components/about/TableOfContents";
import { about, person, social } from "@/resources/content";

export const metadata: Metadata = {
	title: about.title,
	description: about.description,
};

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
	github: FaGithub,
	linkedin: FaLinkedin,
	instagram: FaInstagram,
	whatsapp: FaWhatsapp,
	email: FaEnvelope,
};

const slug = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

const sections = [
	about.intro.title,
	about.work.title,
	about.studies.title,
	about.technical.title,
].map((title) => ({ id: slug(title), title }));

const initials = person.name
	.split(" ")
	.map((part) => part[0])
	.slice(0, 2)
	.join("")
	.toUpperCase();

const heading = "scroll-mt-28 text-3xl font-bold tracking-tight sm:text-4xl";
const focus =
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function About() {
	return (
		<div className="w-full max-w-4xl pb-16">
			{about.tableOfContent && <TableOfContents sections={sections} />}

			<div className="flex flex-col gap-10 md:flex-row md:gap-12">
				<aside className="flex flex-col items-center gap-5 self-start md:sticky md:top-28 md:w-56 md:shrink-0">
					{person.avatar ? (
						<Image
							src={person.avatar}
							alt={person.name}
							width={176}
							height={176}
							priority
							className="h-44 w-44 rounded-full border border-line object-cover"
						/>
					) : (
						<span
							aria-hidden
							className="flex h-44 w-44 items-center justify-center rounded-full bg-accent/20 text-5xl font-bold text-accent"
						>
							{initials}
						</span>
					)}
					<p className="flex items-center gap-2 text-sm">
						<Globe size={16} className="text-accent" aria-hidden />
						{person.timeZone}
					</p>
					<ul className="flex flex-wrap justify-center gap-2">
						{person.languages.map((language) => (
							<li
								key={language}
								className="rounded-md border border-line px-2.5 py-1 text-sm"
							>
								{language}
							</li>
						))}
					</ul>
				</aside>

				<div className="min-w-0 flex-1">
					<section id={sections[0].id} className="scroll-mt-28">
						{about.calendar.display && (
							<a
								href={about.calendar.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 py-1.5 pr-1.5 pl-4 text-sm ${focus}`}
							>
								<CalendarDays size={16} className="text-accent" aria-hidden />
								{about.calendar.label}
								<span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/60">
									<ChevronRight size={16} aria-hidden />
								</span>
							</a>
						)}

						<h1 className="text-5xl font-bold leading-none tracking-tight sm:text-7xl">
							{person.name}
						</h1>
						<p className="mt-3 text-2xl text-muted sm:text-3xl">
							{person.role}
						</p>

						<ul className="mt-6 flex flex-wrap gap-2">
							{social.map((item) => {
								const Icon = icons[item.icon];
								return (
									<li key={item.name}>
										<a
											href={item.href}
											target={
												item.href.startsWith("http") ? "_blank" : undefined
											}
											rel="noopener noreferrer"
											aria-label={item.name}
											className={`flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm transition-colors hover:bg-ink/5 ${focus}`}
										>
											<Icon size={16} />
											<span className="hidden sm:inline">{item.name}</span>
										</a>
									</li>
								);
							})}
						</ul>

						<p className="mt-10 max-w-xl text-lg leading-relaxed">
							{about.intro.description}
						</p>
					</section>

					<section id={sections[1].id} className="mt-20">
						<h2 className={heading}>{about.work.title}</h2>
						<div className="mt-8 flex flex-col gap-10">
							{about.work.experiences.map((job) => (
								<article key={`${job.company}-${job.timeframe}`}>
									<div className="flex flex-wrap items-baseline justify-between gap-x-4">
										<h3 className="text-2xl font-bold">{job.company}</h3>
										<p className="text-muted">{job.timeframe}</p>
									</div>
									<p className="mt-1 text-sm text-accent">{job.role}</p>
									<ul className="mt-4 flex list-disc flex-col gap-3 pl-5">
										{job.achievements.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</section>

					<section id={sections[2].id} className="mt-20">
						<h2 className={heading}>{about.studies.title}</h2>
						<div className="mt-8 flex flex-col gap-6">
							{about.studies.institutions.map((school) => (
								<article key={school.name}>
									<h3 className="text-2xl font-bold">{school.name}</h3>
									<p className="mt-1 text-muted">{school.description}</p>
								</article>
							))}
						</div>
					</section>

					<section id={sections[3].id} className="mt-20">
						<h2 className={heading}>{about.technical.title}</h2>
						<div className="mt-8 flex flex-col gap-8">
							{about.technical.skills.map((skill) => (
								<article key={skill.title}>
									<h3 className="text-2xl font-bold">{skill.title}</h3>
									<p className="mt-1 text-muted">{skill.description}</p>
									<ul className="mt-3 flex flex-wrap gap-2">
										{skill.tags.map((tag) => (
											<li
												key={tag}
												className="rounded-md border border-line px-2.5 py-1 text-sm"
											>
												{tag}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
