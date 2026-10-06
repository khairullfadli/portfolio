import type { Metadata } from "next";

import { Projects } from "@/components/work/Projects";
import { work } from "@/resources/content";

export const metadata: Metadata = {
	title: work.title,
	description: work.description,
};

export default function Work() {
	return (
		<div className="w-full max-w-3xl pb-16">
			<h1 className="mb-12 text-center text-4xl font-bold tracking-tight">
				{work.title}
			</h1>
			<Projects />
		</div>
	);
}
