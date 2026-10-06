import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { home } from "@/resources/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: home.title,
	description: home.description,
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning className={inter.variable}>
			<body className="flex min-h-screen flex-col font-sans antialiased">
				<Providers>
					<Header />
					<main className="flex flex-1 flex-col items-center px-6 pt-28">
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
