import { User } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { home } from "@/resources/content";

export default function Home() {
	return (
		<section className="flex max-w-3xl flex-col items-center py-12 text-center">
			<Reveal y={8}>
				<p className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
					{home.badge}
				</p>
			</Reveal>

			<Reveal delay={0.1} y={16} className="mt-10">
				<h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
					{home.headline}
				</h1>
			</Reveal>

			<Reveal delay={0.25} y={20} className="mt-8 max-w-2xl">
				<p className="text-balance text-lg leading-relaxed text-muted sm:text-xl">
					{home.subline}
				</p>
			</Reveal>

			<Reveal delay={0.4} y={20} className="mt-10">
				<Link
					href="/about"
					className="flex items-center gap-3 rounded-full border border-line bg-surface/60 py-1.5 pr-5 pl-1.5 text-sm font-medium transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
				>
					<span
						aria-hidden
						className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent"
					>
						<User size={18} />
					</span>

					{home.aboutLabel}
				</Link>
			</Reveal>
		</section>
	);
}
