import type { MetadataRoute } from "next";

import { baseURL } from "@/resources/site";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: `${baseURL}/sitemap.xml`,
	};
}
