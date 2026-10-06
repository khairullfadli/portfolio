"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const buttonClass =
	"flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ShareSection({ title }: { title: string }) {
	const [url, setUrl] = useState("");
	const [copied, setCopied] = useState(false);

	// URL halaman diambil di browser, jadi tidak perlu mengatur domain manual.
	useEffect(() => setUrl(window.location.href), []);

	const q = encodeURIComponent(url);
	const t = encodeURIComponent(title);
	const platforms = [
		{
			name: "X",
			Icon: FaXTwitter,
			href: `https://twitter.com/intent/tweet?text=${t}&url=${q}`,
		},
		{
			name: "LinkedIn",
			Icon: FaLinkedin,
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${q}`,
		},
		{
			name: "WhatsApp",
			Icon: FaWhatsapp,
			href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
		},
		{ name: "Email", Icon: FaEnvelope, href: `mailto:?subject=${t}&body=${q}` },
	];

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
			<p className="text-sm text-muted">Share this post:</p>
			<ul className="flex gap-3">
				{platforms.map(({ name, Icon, href }) => (
					<li key={name}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Share on ${name}`}
							className={buttonClass}
						>
							<Icon size={15} />
						</a>
					</li>
				))}
				<li>
					<button
						type="button"
						onClick={copy}
						aria-label="Copy link"
						className={buttonClass}
					>
						{copied ? <Check size={15} /> : <Link2 size={15} />}
					</button>
				</li>
			</ul>
			<span role="status" className="sr-only">
				{copied ? "Link copied to clipboard" : ""}
			</span>
		</div>
	);
}
