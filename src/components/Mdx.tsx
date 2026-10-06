import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const components = {
	h2: (props: ComponentProps<"h2">) => (
		<h2 className="mt-12 mb-4 text-3xl font-bold tracking-tight" {...props} />
	),
	h3: (props: ComponentProps<"h3">) => (
		<h3 className="mt-8 mb-3 text-2xl font-bold" {...props} />
	),
	p: (props: ComponentProps<"p">) => (
		<p className="mb-4 text-lg leading-relaxed" {...props} />
	),
	ul: (props: ComponentProps<"ul">) => (
		<ul
			className="my-4 flex list-disc flex-col gap-3 pl-5 text-lg"
			{...props}
		/>
	),
	ol: (props: ComponentProps<"ol">) => (
		<ol
			className="my-4 flex list-decimal flex-col gap-3 pl-5 text-lg"
			{...props}
		/>
	),
	a: (props: ComponentProps<"a">) => (
		<a className="text-accent underline underline-offset-4" {...props} />
	),
	hr: () => <hr className="my-10 border-line" />,
	code: (props: ComponentProps<"code">) => (
		<code className="rounded bg-ink/10 px-1.5 py-0.5 text-sm" {...props} />
	),
	pre: (props: ComponentProps<"pre">) => (
		<pre
			className="my-6 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
			{...props}
		/>
	),
};

export function Mdx({ source }: { source: string }) {
	return <MDXRemote source={source} components={components} />;
}
