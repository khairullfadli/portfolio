import { getPosts, WORK_DIR } from "@/utils/posts";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = {
	// Contoh: range={[1, 1]} menampilkan project pertama saja (dipakai di home nanti).
	range?: [number, number?];
};

export function Projects({ range }: ProjectsProps) {
	const all = getPosts(WORK_DIR);
	const projects = range
		? all.slice(range[0] - 1, range[1] ?? all.length)
		: all;

	if (projects.length === 0) {
		return (
			<p className="text-center text-muted">
				Belum ada project. Tambahkan file .mdx di src/app/work/projects.
			</p>
		);
	}

	return (
		<div className="flex flex-col gap-16">
			{projects.map((post, index) => (
				<ProjectCard key={post.slug} post={post} priority={index < 2} />
			))}
		</div>
	);
}
