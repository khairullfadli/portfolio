import {
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaWhatsapp,
} from "react-icons/fa";

import { person, social } from "@/resources/content";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
	github: FaGithub,
	linkedin: FaLinkedin,
	instagram: FaInstagram,
	whatsapp: FaWhatsapp,
	email: FaEnvelope,
};

export function Footer() {
	return (
		<footer className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 pt-8 pb-4 text-sm sm:flex-row">
			<p className="text-muted">
				&copy; {new Date().getFullYear()} /{" "}
				<span className="text-ink">{person.name}</span> / Built with Next.js
			</p>

			<ul className="flex items-center gap-1">
				{social.map((item) => {
					const Icon = icons[item.icon];
					return (
						<li key={item.name}>
							<a
								href={item.href}
								target={item.href.startsWith("http") ? "_blank" : undefined}
								rel="noopener noreferrer"
								aria-label={item.name}
								className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
							>
								<Icon size={20} />
							</a>
						</li>
					);
				})}
			</ul>
		</footer>
	);
}
