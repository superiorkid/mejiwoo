import BestSellers from "./_components/best-sellers";
import FeaturedCollections from "./_components/featured-collections";
import Hero from "./_components/hero";
import OurProducts from "./_components/our-products";
import PromotionBanner from "./_components/promotion-banner";
import Reviews from "./_components/reviews";
import SeasonCollections from "./_components/season-collections";

export default function Home() {
	return (
		<>
			<section className="h-[74dvh] bg-[#F7F6F0]">
				<Hero />
			</section>
			<section className="min-h-[78dvh] flex items-center">
				<SeasonCollections />
			</section>
			<section className="min-h-[78dvh] flex items-center">
				<BestSellers />
			</section>
			<section className="min-h-[54dvh] flex items-center bg-[#F7F6F0]">
				<PromotionBanner />
			</section>
			<section className="min-h-[78dvh] flex items-center">
				<OurProducts />
			</section>
			<section className="min-h-[78dvh] flex items-center">
				<FeaturedCollections />
			</section>
			<section className="min-h-[78dvh] flex items-center">
				<Reviews />
			</section>
		</>
	);
}
