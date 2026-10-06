import type { MetadataRoute } from "next";

import { baseURL } from "@/resources/site";
import { BLOG_DIR, getPosts, WORK_DIR } from "@/utils/posts";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ["", "/about", "/work", "/blog"].map((path) => ({
		url: `${baseURL}${path}`,
		lastModified: new Date(),
	}));

	const projects = getPosts(WORK_DIR).map((post) => ({
		url: `${baseURL}/work/${post.slug}`,
		lastModified: post.metadata.publishedAt || new Date(),
	}));

	const articles = getPosts(BLOG_DIR).map((post) => ({
		url: `${baseURL}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt || new Date(),
	}));

	return [...pages, ...projects, ...articles];
}
