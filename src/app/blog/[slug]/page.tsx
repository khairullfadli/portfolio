import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";
import { Mdx } from "@/components/Mdx";
import { person } from "@/resources/content";
import { BLOG_DIR, formatDate, getPosts } from "@/utils/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return getPosts(BLOG_DIR).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = getPosts(BLOG_DIR).find((item) => item.slug === slug);
	if (!post) return {};
	return { title: post.metadata.title, description: post.metadata.summary };
}

export default async function BlogPost({ params }: Props) {
	const { slug } = await params;
	const post = getPosts(BLOG_DIR).find((item) => item.slug === slug);
	if (!post) notFound();

	const { title, subtitle, publishedAt, image } = post.metadata;

	return (
		<article className="w-full max-w-2xl pb-16">
			<header className="flex flex-col items-center gap-4 text-center">
				<Link
					href="/blog"
					className="text-sm font-medium hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
				>
					Blog
				</Link>
				<p className="text-sm text-muted">{formatDate(publishedAt)}</p>
				<h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
					{title}
				</h1>
				{subtitle && (
					<p className="max-w-xl text-lg italic text-muted">{subtitle}</p>
				)}
				<p className="mt-2 flex items-center gap-3 text-sm font-medium text-accent">
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
				</p>
			</header>

			{image && (
				<div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-line">
					<Image
						src={image}
						alt={title}
						fill
						priority
						sizes="(max-width: 768px) 100vw, 672px"
						className="object-cover"
					/>
				</div>
			)}

			<div className="mt-8">
				<Mdx source={post.content} />
			</div>

			<ShareSection title={title} />

			<section className="mt-16 flex flex-col gap-6 border-t border-line pt-10">
				<h2 className="text-center text-3xl font-bold tracking-tight">
					Recent posts
				</h2>
				<Posts exclude={[post.slug]} range={[1, 2]} columns={2} thumbnail />
			</section>
		</article>
	);
}
