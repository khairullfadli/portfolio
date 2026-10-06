import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page not found",
};

const linkClass =
	"rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function NotFound() {
	return (
		<section className="flex max-w-xl flex-1 flex-col items-center justify-center gap-6 py-16 text-center">
			<p className="text-8xl font-bold tracking-tight text-accent sm:text-9xl">
				404
			</p>
			<h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
			<p className="text-lg text-muted">
				The page you are looking for doesn&apos;t exist or has been moved.
			</p>
			<div className="mt-2 flex flex-wrap justify-center gap-3">
				<Link
					href="/"
					className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-page transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
				>
					Back to home
				</Link>
				<Link href="/work" className={linkClass}>
					See my work
				</Link>
				<Link href="/blog" className={linkClass}>
					Read the blog
				</Link>
			</div>
		</section>
	);
}
