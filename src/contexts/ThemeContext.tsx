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

const THEME_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const PREFERS_DARK = "(prefers-color-scheme: dark)";

const applyTheme = (theme: string) => {
	window.localStorage.setItem(THEME_KEY, theme);
	if (theme === DARK_THEME) {
		document.documentElement.classList.add(DARK_THEME);
	} else {
		document.documentElement.classList.remove(DARK_THEME);
	}
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const theme = window.localStorage.getItem(THEME_KEY);
		if (theme) {
			setDarkMode(theme === DARK_THEME);
		} else if (window.matchMedia(PREFERS_DARK).matches) {
			setDarkMode(true);
		}
	}, []);

	useEffect(() => {
		const theme = darkMode ? DARK_THEME : LIGHT_THEME;
		applyTheme(theme);
	}, [darkMode]);

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
