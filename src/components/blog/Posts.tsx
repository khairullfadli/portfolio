import { BLOG_DIR, getPosts } from "@/utils/posts";
import { Post } from "./Post";

type PostsProps = {
	// Contoh: [1, 1] = post pertama saja, [4] = dari post ke-4 sampai akhir.
	range?: [number] | [number, number];
	columns?: 1 | 2;
	thumbnail?: boolean;
	exclude?: string[];
};

export function Posts({
	range,
	columns = 1,
	thumbnail = false,
	exclude = [],
}: PostsProps) {
	const all = getPosts(BLOG_DIR).filter((post) => !exclude.includes(post.slug));
	const posts = range
		? all.slice(range[0] - 1, range.length === 2 ? range[1] : undefined)
		: all;

	if (posts.length === 0) return null;

	return (
		<div
			className={`grid gap-6 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}
		>
			{posts.map((post) => (
				<Post key={post.slug} post={post} thumbnail={thumbnail} />
			))}
		</div>
	);
}
