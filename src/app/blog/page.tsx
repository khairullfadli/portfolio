import type { Metadata } from "next";

import { Posts } from "@/components/blog/Posts";
import { blog } from "@/resources/content";
import { BLOG_DIR, getPosts } from "@/utils/posts";

export const metadata: Metadata = {
	title: blog.title,
	description: blog.description,
};

export default function Blog() {
	const total = getPosts(BLOG_DIR).length;

	return (
		<div className="w-full max-w-3xl pb-16">
			<h1 className="mb-10 text-4xl font-bold tracking-tight">{blog.title}</h1>

			{total === 0 ? (
				<p className="text-muted">
					Belum ada post. Tambahkan file .mdx di src/app/blog/posts.
				</p>
			) : (
				<div className="flex flex-col gap-10">
					<Posts range={[1, 1]} thumbnail />
					<Posts range={[2, 3]} columns={2} thumbnail />
					{total > 3 && (
						<>
							<h2 className="text-3xl font-bold tracking-tight">
								Earlier posts
							</h2>
							<Posts range={[4]} columns={2} />
						</>
					)}
				</div>
			)}
		</div>
	);
}
