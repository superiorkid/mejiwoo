import Container from "@/components/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SectionCollections = () => {
	return (
		<Container className="flex justify-center w-full flex-col pb-16 pt-20 gap-10">
			<h1 className="text-4xl xl:text-5xl font-semibold text-center">
				Season Collections
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
				<div className="space-y-5">
					<div className="relative h-[541px] overflow-hidden">
						<Image
							fill
							src="/assets/seasons/spring.png"
							alt="spring collections image"
							className="object-cover scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<h1 className="text-3xl uppercase font-medium text-center">Spring</h1>
					<div className="flex justify-center">
						<Link
							href="#season-collections"
							className={cn(
								buttonVariants({
									className: "rounded-xl text-base",
									variant: "secondary",
								}),
							)}
						>
							More
						</Link>
					</div>
				</div>
				<div className="space-y-5">
					<div className="relative h-[541px] overflow-hidden">
						<Image
							fill
							src="/assets/seasons/summer.png"
							alt="summer collections image"
							className="object-cover scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<h1 className="text-3xl uppercase font-medium text-center">Summer</h1>
					<div className="flex justify-center">
						<Link
							href="#season-collections"
							className={cn(
								buttonVariants({
									className: "rounded-xl text-base",
									variant: "secondary",
								}),
							)}
						>
							More
						</Link>
					</div>
				</div>
				<div className="space-y-5">
					<div className="relative h-[541px] overflow-hidden">
						<Image
							fill
							src="/assets/seasons/winter.png"
							alt="winter collections image"
							className="object-cover scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<h1 className="text-3xl uppercase font-medium text-center">Winter</h1>
					<div className="flex justify-center">
						<Link
							href="#season-collections"
							className={cn(
								buttonVariants({
									className: "rounded-xl text-base",
									variant: "secondary",
								}),
							)}
						>
							More
						</Link>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SectionCollections;
