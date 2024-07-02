"use client";

import Container from "@/components/container";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { set } from "zod";

const BestSellers = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number>(0);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 3);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 3);
		});
	}, [api]);

	return (
		<Container className="flex justify-center w-full flex-col py-16 gap-10">
			<h1 className="text-4xl xl:text-5xl font-semibold text-center">
				Our Best Seller
			</h1>
			<Carousel
				setApi={setApi}
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/356039326_816908229869602_5989506973685575536_n.png"
										alt="product 1"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>Euphoria Crop Blouse</h2>
									<p className="text-sm tracking-wide">Rp.125.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/352158854_3608341479451255_1472828259758897531_n.png"
										alt="product 2"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>Venus Helter Dress</h2>
									<p className="text-sm tracking-wide">Rp.180.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/355278786_1944515739251375_2601576688677791938_n.png"
										alt="product 3"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>Snap Pure Blouse</h2>
									<p className="text-sm tracking-wide">Rp.129.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/349227038_1836161470102594_5650869863153805497_n.png"
										alt="product 4"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>West Bootscut Denim</h2>
									<p className="text-sm tracking-wide">Rp.229.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/350520368_1293582501553282_1706240161763761566_n.png"
										alt="product 5"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>Ribbon Check Long</h2>
									<p className="text-sm tracking-wide">Rp.175.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Link href="#go-to-detail-product">
							<div className="space-y-3 p-1">
								<div className="relative h-[541px] overflow-hidden">
									<Image
										fill
										src="/assets/best-sellers/354184225_234170616063635_8207167133769842801_n.png"
										alt="product 6"
										className="object-cover scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="text-center">
									<h2>Shouldcut Knit</h2>
									<p className="text-sm tracking-wide">Rp.159.000</p>
								</div>
							</div>
						</Link>
					</CarouselItem>
				</CarouselContent>
				{api?.canScrollPrev && <CarouselPrevious className="ml-5 size-16" />}
				{api?.canScrollNext && <CarouselNext className="mr-5 size-16" />}
			</Carousel>
		</Container>
	);
};

export default BestSellers;
