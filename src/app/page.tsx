import Image from "next/image";
import Link from "next/link";

import { home, person } from "@/resources/content";

const initials = person.name
	.split(" ")
	.map((part) => part[0])
	.slice(0, 2)
	.join("")
	.toUpperCase();

export default function Home() {
	return (
		<section className="flex max-w-3xl flex-col items-center py-12 text-center">
			<p className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
				{home.badge}
			</p>

			<h1 className="mt-10 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
				{home.headline}
			</h1>

			<p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-2xl">
				{home.subline}
			</p>

			<Link
				href="/about"
				className="mt-10 flex items-center gap-3 rounded-full border border-line bg-surface/60 py-1.5 pr-5 pl-1.5 text-sm font-medium transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				{person.avatar ? (
					<Image
						src={person.avatar}
						alt=""
						width={36}
						height={36}
						className="h-9 w-9 rounded-full object-cover"
					/>
				) : (
					<span
						aria-hidden
						className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent"
					>
						{initials}
					</span>
				)}
				{home.aboutLabel}
			</Link>
		</section>
	);
}
