import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/utils/posts";

const linkClass =
	"inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProjectCard({
	post,
	priority,
}: {
	post: Post;
	priority?: boolean;
}) {
	const { title, summary, images, team, link } = post.metadata;

	return (
		<article className="flex flex-col gap-5">
			{images.length > 0 && (
				<section
					aria-label={`${title} images`}
					// biome-ignore lint/a11y/noNoninteractiveTabindex: area scroll horizontal perlu bisa difokus keyboard
					tabIndex={0}
					className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-line focus-visible:outline-2 focus-visible:outline-accent"
				>
					{images.map((src, index) => (
						<div
							key={src}
							className="relative aspect-video w-full shrink-0 snap-center"
						>
							<Image
								src={src}
								alt={`${title} ${index + 1}`}
								fill
								sizes="(max-width: 768px) 100vw, 768px"
								priority={priority && index === 0}
								className="object-cover"
							/>
						</div>
					))}
				</section>
			)}

			<div className="flex flex-col gap-4 px-1">
				<h2 className="text-balance text-3xl font-bold tracking-tight">
					{title}
				</h2>

				{team.length > 0 && (
					<ul className="flex -space-x-2">
						{team.map((member) =>
							member.avatar ? (
								<li key={member.name}>
									<Image
										src={member.avatar}
										alt={member.name}
										title={member.name}
										width={32}
										height={32}
										className="h-8 w-8 rounded-full border-2 border-page object-cover"
									/>
								</li>
							) : null,
						)}
					</ul>
				)}

				{summary && <p className="max-w-xl text-muted">{summary}</p>}

				<div className="flex flex-wrap gap-6">
					{post.content.trim() && (
						<Link href={`/work/${post.slug}`} className={linkClass}>
							Read case study <ArrowRight size={14} aria-hidden />
						</Link>
					)}
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClass}
						>
							View project <ArrowUpRight size={14} aria-hidden />
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
