"use client";

import { BookOpen, CircleUser, House, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { labels, person } from "@/resources/content";
import { ThemeToggle } from "./ThemeToggle";

function Clock({ timeZone }: { timeZone: string }) {
	const [time, setTime] = useState("");

	useEffect(() => {
		const tick = () =>
			setTime(
				new Intl.DateTimeFormat("en-GB", {
					timeZone,
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: false,
				}).format(new Date()),
			);
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, [timeZone]);

	return <span className="tabular-nums">{time}</span>;
}

const items = [
	{ href: "/about", label: labels.about, Icon: CircleUser },
	{ href: "/work", label: labels.work, Icon: LayoutGrid },
	{ href: "/blog", label: labels.blog, Icon: BookOpen },
];

const linkClass = (active: boolean) =>
	`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
		active ? "bg-ink/10 text-ink" : "text-muted hover:text-ink"
	}`;

export function Header() {
	const pathname = usePathname() ?? "";

	return (
		<header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center p-2">
			<div className="hidden px-3 text-sm sm:block">{person.timeZone}</div>

			<nav
				aria-label="Main"
				className="flex items-center gap-1 rounded-2xl border border-line bg-page/80 p-1 shadow-lg backdrop-blur"
			>
				<Link
					href="/"
					aria-label="Home"
					aria-current={pathname === "/" ? "page" : undefined}
					className={linkClass(pathname === "/")}
				>
					<House size={16} />
				</Link>
				<span className="mx-1 h-6 w-px bg-line" aria-hidden />
				{items.map(({ href, label, Icon }) => {
					const active = pathname.startsWith(href);
					return (
						<Link
							key={href}
							href={href}
							aria-label={label}
							aria-current={active ? "page" : undefined}
							className={linkClass(active)}
						>
							<Icon size={16} />
							<span className="hidden sm:inline">{label}</span>
						</Link>
					);
				})}
				<span className="mx-1 h-6 w-px bg-line" aria-hidden />
				<ThemeToggle />
			</nav>

			<div className="hidden px-3 text-right text-sm sm:block">
				<Clock timeZone={person.timeZone} />
			</div>
		</header>
	);
}
