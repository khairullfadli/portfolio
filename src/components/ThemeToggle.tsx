"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Hindari mismatch hydration: tema baru diketahui setelah mount.
	useEffect(() => setMounted(true), []);

	const next = resolvedTheme === "dark" ? "light" : "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(next)}
			aria-label={`Switch to ${next} mode`}
			className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
		>
			{mounted &&
				(resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
		</button>
	);
}
