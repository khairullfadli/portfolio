import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/Mdx";
import { formatDate, getPosts, WORK_DIR } from "@/utils/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return getPosts(WORK_DIR).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = getPosts(WORK_DIR).find((item) => item.slug === slug);
	if (!post) return {};
	return { title: post.metadata.title, description: post.metadata.summary };
}

export default async function Project({ params }: Props) {
	const { slug } = await params;
	const post = getPosts(WORK_DIR).find((item) => item.slug === slug);
	if (!post) notFound();

	const { title, publishedAt, summary, images, link } = post.metadata;

	return (
		<article className="w-full max-w-3xl pb-16">
			<Link
				href="/work"
				className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				<ArrowLeft size={14} aria-hidden /> Projects
			</Link>

			<h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
				{title}
			</h1>
			<p className="mt-4 text-muted">
				{formatDate(publishedAt)}
				{summary && <span className="mt-2 block max-w-xl">{summary}</span>}
			</p>

			{link && (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-5 inline-flex items-center gap-1.5 text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
				>
					View project <ArrowUpRight size={14} aria-hidden />
				</a>
			)}

			{images[0] && (
				<div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-line">
					<Image
						src={images[0]}
						alt={title}
						fill
						priority
						sizes="(max-width: 768px) 100vw, 768px"
						className="object-cover"
					/>
				</div>
			)}

			<div className="mt-8">
				<Mdx source={post.content} />
			</div>
		</article>
	);
}
