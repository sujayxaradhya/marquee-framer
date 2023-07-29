import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import night from "/public/darkmode-icons/night.svg";
import circum_sun from "/public/darkmode-icons/circum_sun.svg";

const DarkMode: React.FC = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);
	const [marqueeText, setMarqueeText] = useState<string>("");

	useEffect(() => {
		setMarqueeText(darkMode ? `✦ LIGHT! ✦` : `✦ NIGHT! ✦`);
	}, [darkMode]);

	return (
		<div
			className={`flex items-center flex-col w-[11rem] mt-[3rem] p-[1.7rem] rounded-full text-[1.5rem] cursor-pointer ${
				darkMode ? "bg-[#111111] text-[#ffffff]" : "bg-[#ffffff] text-[#111111]"
			} max-[820px]:mt-[1rem] max-[820px]:p-[0.9rem] max-[820px]:text-[1rem] max-[480px]:mt-[1rem] max-[480px]:p-[0.9rem] max-[480px]:text-[1rem] max-[280px]:mt-[1rem] max-[280px]:p-[0.7rem] max-[280px]:text-[0.75rem]`}
			onClick={() => setDarkMode(!darkMode)}
		>
			<Image
				className="mb-[1rem]"
				width={37}
				height={37}
				src={darkMode ? night : circum_sun}
				alt={darkMode ? "night" : "light"}
			/>
			{marqueeText}
		</div>
	);
};

export default DarkMode;
