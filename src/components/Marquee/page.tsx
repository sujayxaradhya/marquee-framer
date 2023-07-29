import React, { useEffect, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/contexts/ThemeContext";

const Marquee: React.FC = () => {
	const { darkMode } = useContext(ThemeContext);
	const [textWidth, setTextWidth] = useState<number>(0);
	const text = `CREEATIVEE DEEVEELOPEER ✦ FFOLLOW MEE! ✦`;
	const repeatTimes = 50;
	const repeatedText = Array(repeatTimes).fill(text).join(" ");

	const textRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (textRef.current) {
			setTextWidth(textRef.current.offsetWidth);
		}
	}, [textRef]);

	const tickerVariants = {
		animate: {
			x: [0, -textWidth],
			transition: {
				x: {
					duration: 120,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear"
				}
			}
		}
	};

	return (
		<div className="overflow-hidden whitespace-nowrap w-full flex">
			<motion.div
				className={`${
					darkMode ? "text-[#ffffff]" : "text-[#111111]"
				} inline-block text-[2rem]`}
				variants={tickerVariants}
				initial="animate"
				animate="animate"
				ref={textRef}
			>
				{repeatedText}
			</motion.div>
			<motion.div
				className={`${
					darkMode ? "text-[#ffffff]" : "text-[#111111]"
				} inline-block text-[2rem]`}
				variants={tickerVariants}
				initial="animate"
				animate="animate"
			>
				{repeatedText}
			</motion.div>
		</div>
	);
};

export default Marquee;
