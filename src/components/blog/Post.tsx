import Image from "next/image";
import Link from "next/link";

import { person } from "@/resources/content";
import { formatDate, type Post as PostType } from "@/utils/posts";

type PostProps = { post: PostType; thumbnail?: boolean };

export function Post({ post, thumbnail = false }: PostProps) {
	const { title, image, tag, publishedAt } = post.metadata;

	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group flex flex-col gap-4 rounded-2xl p-1 transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		>
			{thumbnail && image && (
				<div className="relative aspect-video overflow-hidden rounded-xl border border-line">
					<Image
						src={image}
						alt={`Thumbnail of ${title}`}
						fill
						sizes="(max-width: 768px) 100vw, 640px"
						className="object-cover"
					/>
				</div>
			)}
			<div className="flex flex-col gap-3 px-3 pb-4">
				<div className="flex items-center gap-4 text-sm">
					<span className="flex items-center gap-2 font-medium">
						{person.avatar && (
							<Image
								src={person.avatar}
								alt=""
								width={28}
								height={28}
								className="h-7 w-7 rounded-full object-cover"
							/>
						)}
						{person.name}
					</span>
					<span className="text-muted">{formatDate(publishedAt)}</span>
				</div>
				<h2 className="text-balance text-2xl font-bold leading-snug group-hover:text-accent">
					{title}
				</h2>
				{tag && <p className="text-sm text-muted">{tag}</p>}
			</div>
		</Link>
	);
}
