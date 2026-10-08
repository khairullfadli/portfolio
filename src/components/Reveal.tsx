import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	// Jeda sebelum animasi mulai, dalam detik.
	delay?: number;
	// Jarak geser awal dari bawah, dalam px.
	y?: number;
	className?: string;
};

// Animasi murni CSS (kelas .reveal di globals.css), tanpa JavaScript tambahan.
export function Reveal({
	children,
	delay = 0,
	y = 12,
	className = "",
}: RevealProps) {
	return (
		<div
			className={`reveal ${className}`}
			style={
				{
					"--reveal-delay": `${delay}s`,
					"--reveal-y": `${y}px`,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
}
