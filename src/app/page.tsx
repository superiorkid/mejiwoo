import Hero from "./_components/hero";
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
			<section>hana store</section>
		</>
	);
}
