import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PromotionBanner = () => {
	return (
		<Container className="w-full relative">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[261px] space-y-7">
				<div className="text-center space-y-3.5">
					<h1 className="text-4xl font-bold">Get 50% Off</h1>
					<p className="tracking-wide">
						for all new product purchases min. purchase Rp.350.000
					</p>
				</div>
				<div className="flex justify-center">
					<Button
						variant="outline"
						size="lg"
						className="text-xl font-light rounded-2xl"
					>
						SHOP NOW
					</Button>
				</div>
			</div>

			<div className="flex gap-44 justify-between">
				<div className="flex-1">
					<div className="grid grid-cols-2">
						<div className="relative size-72">
							<Image
								fill
								src="/assets/banners/image-3.png"
								alt="banner image 1"
								className="object-contain"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="relative size-72">
							<Image
								fill
								src="/assets/banners/image-4.png"
								alt="banner image 2"
								className="object-contain"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
				</div>
				<div className="flex-1 flex justify-end">
					<div className="relative h-80 w-[450px]">
						<Image
							fill
							src="/assets/banners/image-5.png"
							alt="banner image 3"
							className="object-contain"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PromotionBanner;
