import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { CornerUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeaturedCollections = () => {
	return (
		<Container className="flex justify-center w-full flex-col py-16 gap-10">
			<h1 className="text-4xl xl:text-5xl font-semibold text-center">
				Our Featured Collections
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
				<div className="relative aspect-square">
					<Image
						fill
						src="/assets/featured-collections/SmartSelect_20230715_144134_Instagram.png"
						alt="product 1"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute bottom-3 left-5 max-w-[185px]">
						<h1 className="uppercase text-xl font-bold leading-tight">
							colorful knitwear series
						</h1>
					</div>

					<Button
						variant="secondary"
						size="icon"
						className="absolute bottom-0 right-0 rounded-none rounded-tl-xl size-16"
					>
						<CornerUpRightIcon className="size-10" />
						<span className="sr-only">go to featured collectios</span>
					</Button>
				</div>
				<div className="relative h-full row-span-2">
					<Image
						fill
						src="/assets/featured-collections/SmartSelect_20230715_150946_Instagram.png"
						alt="product 2"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute bottom-3 left-5 max-w-[185px]">
						<h1 className="uppercase text-xl font-bold leading-tight">
							jiwoo made special series
						</h1>
					</div>

					<Button
						variant="secondary"
						size="icon"
						className="absolute bottom-0 right-0 rounded-none rounded-tl-xl size-16"
					>
						<CornerUpRightIcon className="size-10" />
						<span className="sr-only">go to featured collectios</span>
					</Button>
				</div>
				<div className="relative aspect-square">
					<Image
						fill
						src="/assets/featured-collections/SmartSelect_20230715_150433_Instagram.png"
						alt="product 3"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute bottom-3 left-5 max-w-[185px]">
						<h1 className="uppercase text-xl font-bold leading-tight">
							freshider top series
						</h1>
					</div>

					<Button
						variant="secondary"
						size="icon"
						className="absolute bottom-0 right-0 rounded-none rounded-tl-xl size-16"
					>
						<CornerUpRightIcon className="size-10" />
						<span className="sr-only">go to featured collectios</span>
					</Button>
				</div>
				<div className="relative aspect-square">
					<Image
						fill
						src="/assets/featured-collections/SmartSelect_20230715_151533_Instagram.png"
						alt="product 4"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute bottom-3 left-5 max-w-[185px]">
						<h1 className="uppercase text-xl font-bold leading-tight">
							top pants series
						</h1>
					</div>

					<Button
						variant="secondary"
						size="icon"
						className="absolute bottom-0 right-0 rounded-none rounded-tl-xl size-16"
					>
						<CornerUpRightIcon className="size-10" />
						<span className="sr-only">go to featured collectios</span>
					</Button>
				</div>
				<div className="relative aspect-square">
					<Image
						fill
						src="/assets/featured-collections/SmartSelect_20230715_143815_Instagram.png"
						alt="product 5"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute bottom-3 left-5 max-w-[185px]">
						<h1 className="uppercase text-xl font-bold leading-tight">
							sweet dresses series
						</h1>
					</div>

					<Button
						variant="secondary"
						size="icon"
						className="absolute bottom-0 right-0 rounded-none rounded-tl-xl size-16"
					>
						<CornerUpRightIcon className="size-10" />
						<span className="sr-only">go to featured collectios</span>
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default FeaturedCollections;
