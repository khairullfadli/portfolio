// Alamat situs. Isi NEXT_PUBLIC_SITE_URL di .env (lokal) atau di pengaturan
// Environment Variables Vercel, contoh: https://namamu.vercel.app
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
	? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: undefined;

export const baseURL = (
	process.env.NEXT_PUBLIC_SITE_URL ??
	fromVercel ??
	"http://localhost:3000"
).replace(/\/$/, "");
