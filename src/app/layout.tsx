import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
	title: "Marquee Framer",
	description: "Seamless fluid motion with typography of Marquee Framer"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
