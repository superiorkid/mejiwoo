import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<Container className="h-full relative pt-8">
			<div className="flex h-full justify-between space-x-36">
				<div className="flex-1 grid grid-cols-2">
					<div className="relative h-full">
						<Image
							fill
							src="/assets/hero/image-7.png"
							alt="hero image 1"
							className="object-contain"
							loading="eager"
						/>
					</div>
					<div className="relative h-full">
						<Image
							fill
							src="/assets/hero/image-10.png"
							alt="hero image 1"
							className="object-contain"
							loading="eager"
						/>
					</div>
				</div>
				<div className="flex-1 grid grid-cols-2">
					<div className="relative full">
						<Image
							fill
							src="/assets/hero/image-20.png"
							alt="hero image 1"
							className="object-contain"
							loading="eager"
						/>
					</div>
					<div className="relative full">
						<Image
							fill
							src="/assets/hero/image-21.png"
							alt="hero image 1"
							className="object-contain"
							loading="eager"
						/>
					</div>
				</div>
			</div>

			<div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[295px]">
				<div className="border-b pb-3 text-center">
					<h1 className="text-5xl font-semibold">Hana</h1>
					<p className="text-3xl">ハナ</p>
				</div>
				<p className="mt-3 text-center text-lg font-light text-balance">
					Make your everyday look prettier with{" "}
					<span className="font-bold">HANA</span> korean/japanese made
				</p>
			</div>
		</Container>
	);
};

export default Hero;
