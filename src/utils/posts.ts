import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type TeamMember = {
	name: string;
	role?: string;
	avatar?: string;
	linkedIn?: string;
};

export type PostMetadata = {
	title: string;
	publishedAt: string;
	summary: string;
	images: string[];
	team: TeamMember[];
	link?: string;
	// Khusus blog
	subtitle?: string;
	image?: string;
	tag?: string;
};

export type Post = { slug: string; metadata: PostMetadata; content: string };

// Lokasi file .mdx untuk project. Dipakai juga oleh blog nanti.
export const WORK_DIR = ["src", "app", "work", "projects"];
export const BLOG_DIR = ["src", "app", "blog", "posts"];

export function getPosts(dir: string[]): Post[] {
	const folder = path.join(/* turbopackIgnore: true */ process.cwd(), ...dir);
	if (!fs.existsSync(folder)) return [];

	return fs
		.readdirSync(folder)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => {
			const raw = fs.readFileSync(path.join(folder, file), "utf8");
			const { data, content } = matter(raw);
			const date = new Date(data.publishedAt);

			return {
				slug: file.replace(/\.mdx$/, ""),
				content,
				metadata: {
					title: data.title ?? file.replace(/\.mdx$/, ""),
					publishedAt: Number.isNaN(date.getTime())
						? ""
						: date.toISOString().slice(0, 10),
					summary: data.summary ?? "",
					images: data.images ?? [],
					team: data.team ?? [],
					link: data.link,
					subtitle: data.subtitle,
					image: data.image,
					tag: data.tag,
				},
			};
		})
		.sort((a, b) =>
			b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
		);
}

export function formatDate(date: string) {
	if (!date) return "";
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	}).format(new Date(date));
}
