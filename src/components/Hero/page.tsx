"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Marquee from "../Marquee/page";
import DarkMode from "../DarkMode/page";

const Hero: React.FC = () => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div
			className={`flex  w-full h-screen justify-between flex-col fixed overflow-hidden ${
				darkMode ? "bg-[#ffffff]" : "bg-[#111111]"
			}`}
		>
			<div className="h-2/4 w-full">
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute left-[-41%] ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[-10deg] translate-y-[1rem] z-[1] max-[820px]:top-0 max-[820px]:left-[-7rem] max-[820px]:p-[0] max-[820px]:rotate-[-10deg] max-[480px]:top-[0.7rem] max-[480px]:p-[0] max-[480px]:rotate-[10deg] max-[300px]:top-[1rem] max-[300px]:rotate-[10deg] max-[300px]:p-[0]`}
				>
					<Marquee />
				</div>
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute left-[-67%] top-[-3%] ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[10deg] translate-y-[1rem] z-[3] max-[820px]:top-[3.3rem] max-[820px]:left-[-20rem] max-[820px]:p-[0] max-[820px]:rotate-[7.5deg] max-[480px]:top-[7.8rem] max-[480px]:p-[0] max-[480px]:rotate-[-10deg] max-[300px]:top-[7.8rem] max-[300px]:left-[-16rem] max-[300px]:rotate-[-10deg] max-[300px]:p-[0]`}
				>
					<Marquee />
				</div>
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[120deg] left-[-73%] z-[1] max-[820px]:hidden`}
				>
					<Marquee />
				</div>
			</div>

			<div className="flex items-center flex-col text-center text-[2rem] tracking-wide leading-[2.2rem] max-[480px]:text-[1.5rem]">
				<div
					className={`pt-[2rem] pb-[2rem] ${
						darkMode ? "text-[#111111]" : "text-[#ffffff]"
					}`}
				>
					<h1>DAO</h1>
					<h2>NFT DROPPING SOON...</h2>
				</div>
				<DarkMode />
			</div>

			<div className="h-2/4 w-full">
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute left-[-25%] bottom-[36%] ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[9deg] translate-y-[22rem] z-[2] max-[820px]:bottom-[25rem] max-[820px]:p-[0] max-[820px]:left-[-20rem] max-[480px]:bottom-[23rem] max-[480px]:p-[0] max-[480px]:rotate-[10deg] max-[300px]:left-[-15rem] max-[300px]:p-[0]`}
				>
					<Marquee />
				</div>
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute left-[-95%] bottom-[30%] ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[-9deg] translate-y-[22rem] z-[1] max-[820px]:bottom-[25rem] max-[820px]:p-[0] max-[820px]:left-[-30rem] max-[480px]:bottom-[30rem] max-[480px]:p-[0] max-[480px]:left-[-7rem] max-[480px]:rotate-[-11deg] max-[300px]:bottom-[28rem] max-[300px]:p-[0]`}
				>
					<Marquee />
				</div>
				<div
					className={`w-[200vw] p-[1rem] m-2 absolute ${
						darkMode ? "bg-[#111111]" : "bg-[#ffffff]"
					} rotate-[63deg] left-[-11%] z-[2] max-[820px]:hidden`}
				>
					<Marquee />
				</div>
			</div>
		</div>
	);
};

export default Hero;
