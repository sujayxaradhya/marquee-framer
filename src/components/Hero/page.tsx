"use client";
import React from "react";
import Marquee from "../Marquee/page";

const Hero: React.FC = () => {
	return (
		<div className="flex  w-full h-screen justify-between flex-col fixed overflow-hidden">
			<div className="h-2/4 w-full">
				<div className="w-[200vw] p-[2rem] m-2 absolute left-[-50rem] bg-[#111111] rotate-[-11deg] translate-y-[1rem] z-[1] max-[820px]:top-0 max-[820px]:left-[-7rem] max-[820px]:rotate-[-10deg] max-[480px]:top-[2.7rem] max-[480px]:rotate-[10deg] max-[300px]:top-[1rem] max-[300px]:rotate-[10deg]">
					<Marquee />
				</div>
				<div className="w-[200vw] p-[2rem] m-2 absolute left-[-70%] top-[-1rem] bg-[#111111] rotate-[10deg] translate-y-[1rem] z-[3] max-[820px]:top-[3.3rem] max-[820px]:left-[-20rem] max-[820px]:rotate-[7.5deg] max-[480px]:top-[11.8rem] max-[480px]:rotate-[-10deg] max-[300px]:top-[9.8rem] max-[300px]:left-[-16rem] max-[300px]:rotate-[-10deg]">
					<Marquee />
				</div>
				<div className="w-[200vw] p-[2rem] m-2 absolute bg-[#111111] rotate-[120deg] left-[-92rem] z-[1] max-[820px]:hidden">
					<Marquee />
				</div>
			</div>

			<div className="text-center text-[2rem] tracking-wide leading-[2.2rem] max-[480px]:text-[1.5rem]">
				<h1>DAO</h1>
				<h2>NFT DROPPING SOON...</h2>
			</div>

			<div className="h-2/4 w-full">
				<div className="w-[200vw] p-[2rem] m-2 absolute left-[-28rem] bottom-[23rem] bg-[#111111] rotate-[10deg] translate-y-[22rem] z-[2] max-[820px]:bottom-[25rem] max-[820px]:left-[-20rem] max-[480px]:bottom-[23rem] max-[480px]:rotate-[10deg] max-[300px]:left-[-15rem]">
					<Marquee />
				</div>
				<div className="w-[200vw] p-[2rem] m-2 absolute left-[-95%] bg-[#111111] rotate-[-11deg] translate-y-[22rem] z-[1] max-[820px]:bottom-[25rem] max-[820px]:left-[-30rem] max-[480px]:bottom-[30rem] max-[480px]:left-[-7rem] max-[480px]:rotate-[-11deg] max-[300px]:bottom-[30rem]">
					<Marquee />
				</div>
				<div className="w-[200vw] p-[2rem] m-2 absolute bg-[#111111] rotate-[55.75deg] left-[-15rem] z-[2] max-[820px]:hidden">
					<Marquee />
				</div>
			</div>
		</div>
	);
};

export default Hero;
