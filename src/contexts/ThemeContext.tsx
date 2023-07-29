"use client";
import { useState, useEffect, createContext, ReactNode } from "react";

type ThemeContextProps = {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
	darkMode: false,
	setDarkMode: () => {}
});

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const theme = window.localStorage.getItem("theme");
		if (theme) {
			setDarkMode(theme === "dark");
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setDarkMode(true);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
