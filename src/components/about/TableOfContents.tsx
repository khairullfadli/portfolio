"use client";

import { useEffect, useState } from "react";

type Section = { id: string; title: string };

export function TableOfContents({ sections }: { sections: Section[] }) {
	const [active, setActive] = useState(sections[0]?.id);

	useEffect(() => {
		const elements = sections
			.map((section) => document.getElementById(section.id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: "-20% 0px -60% 0px" },
		);

		for (const el of elements) observer.observe(el);
		return () => observer.disconnect();
	}, [sections]);

	return (
		<nav
			aria-label="On this page"
			className="fixed top-1/2 left-6 hidden -translate-y-1/2 min-[1400px]:block"
		>
			<ul className="flex flex-col gap-6">
				{sections.map((section) => (
					<li key={section.id}>
						<button
							type="button"
							onClick={() =>
								document
									.getElementById(section.id)
									?.scrollIntoView({ behavior: "smooth" })
							}
							aria-current={active === section.id ? "true" : undefined}
							className={`flex items-center gap-3 whitespace-nowrap text-left transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
								active === section.id ? "text-ink" : "text-muted hover:text-ink"
							}`}
						>
							<span
								aria-hidden
								className={`h-px bg-current transition-all ${
									active === section.id ? "w-6" : "w-4"
								}`}
							/>
							{section.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
