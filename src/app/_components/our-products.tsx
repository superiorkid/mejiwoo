import Container from "@/components/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./product-card";

const OurProducts = () => {
	return (
		<Container className="flex justify-center w-full flex-col pb-16 pt-20 gap-10">
			<h1 className="text-4xl xl:text-5xl font-semibold text-center">
				Our Products
			</h1>
			<div>
				<div>
					<Tabs
						defaultValue="top"
						className="flex flex-col justify-center space-y-0"
					>
						<div className="flex justify-center">
							<TabsList className="h-14 px-3 bg-[#F7F6F0]">
								<TabsTrigger value="top" className="h-10 px-6 text-lg">
									Top
								</TabsTrigger>
								<TabsTrigger
									value="bottom"
									className="h-10 px-6 text-lg"
									disabled
								>
									Bottom
								</TabsTrigger>
								<TabsTrigger
									value="dress"
									className="h-10 px-6 text-lg"
									disabled
								>
									Dress
								</TabsTrigger>
								<TabsTrigger value="set" className="h-10 px-6 text-lg" disabled>
									Set
								</TabsTrigger>
								<TabsTrigger
									value="knit"
									className="h-10 px-6 text-lg"
									disabled
								>
									Knit
								</TabsTrigger>
								<TabsTrigger
									value="outer"
									className="h-10 px-6 text-lg"
									disabled
								>
									Outer
								</TabsTrigger>
							</TabsList>
						</div>
						<TabsContent value="top" className="p-5 bg-[#F7F6F0]">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
								<ProductCard
									name="Eto V Nect Yellow"
									price="129.000"
									imageUrl="/assets/our-products/product-1.png"
								/>
								<ProductCard
									name="Macaroon Dry Half"
									price="139.000"
									imageUrl="/assets/our-products/product-2.png"
								/>
								<ProductCard
									name="Wave Stripe Hally"
									price="130.000"
									imageUrl="/assets/our-products/product-3.png"
								/>
								<ProductCard
									name="Eve Punching Floral"
									price="229.000"
									imageUrl="/assets/our-products/product-4.png"
								/>
								<ProductCard
									name="Floral Waffle Tee"
									price="119.000"
									imageUrl="/assets/our-products/product-5.png"
								/>
								<ProductCard
									name="Snap Pure Blouse"
									price="225.000"
									imageUrl="/assets/our-products/product-6.png"
								/>
							</div>
						</TabsContent>
						<TabsContent value="bottom">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
								bottom products
							</div>
						</TabsContent>
						<TabsContent value="dress">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
								dress products
							</div>
						</TabsContent>
						<TabsContent value="set">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
								set products
							</div>
						</TabsContent>
						<TabsContent value="knit">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
								knit products
							</div>
						</TabsContent>
						<TabsContent value="outer">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
								outer products
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</Container>
	);
};

export default OurProducts;
