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
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import ReviewCard from "./review-card";

const Reviews = () => {
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
				What They Said
			</h1>
			<Carousel
				setApi={setApi}
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-1.png"
							productName="Essence Long Denim"
							reviewerName="Lisa"
							review="I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes."
						/>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-2.png"
							productName="Andcable Knit Top"
							reviewerName="Celine"
							review="I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good. I love shopping here and Ill be a frequent customer at this store"
						/>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-3.png"
							productName="Candy Stripe Boxy"
							reviewerName="Tiffany"
							review="This shirt is very pretty and nice. The color is cute too. At first i bought it as a present for my friend but i also wanted it so we ended up going out wearing twit clothes haha."
						/>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-4.png"
							productName="Summer Cheese Slacks"
							reviewerName="Mona"
							review="This pants are very comfortable to wear in the office all day. The material is breathable and stretchy. I also bought this cardigan because i like the beautiful pattern. It goes very well with the pants."
						/>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-5.png"
							productName="Tinkerbell Chiffon Skirt"
							reviewerName="Hana"
							review="I bought this one set of this pretty cardigan and skirt. I really like the Korean style. It's very trendy and comfortable to use when hanging out. I&apos;m happy to be a regular customer at this store."
						/>
					</CarouselItem>

					<CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#F7F6F0]">
						<ReviewCard
							imageUrl="/assets/reviews/review-6.png"
							productName="Sweet Serendipity Cardigan"
							reviewerName="Bella"
							review="I really like this cardigan. I like the material because its very soft and comfortable to use. I also bought 2 different colors because they are really good to use and pretty."
						/>
					</CarouselItem>
				</CarouselContent>
				{api?.canScrollPrev && <CarouselPrevious className="ml-5 size-16" />}
				{api?.canScrollNext && <CarouselNext className="mr-5 size-16" />}
			</Carousel>
		</Container>
	);
};

export default Reviews;
