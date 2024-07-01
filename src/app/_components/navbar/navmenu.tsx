import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenu = () => {
	return (
		<nav>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="#products" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Products
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Seasons</NavigationMenuTrigger>
						<NavigationMenuContent className="p-6">
							<div className="grid grid-cols-2 gap-x-6 gap-y-4 w-[567px]">
								<NavigationMenuLink className="col-span-2 bg-[#F8F8F9] p-5 flex flex-col justify-center gap-2">
									<h1 className="text-xl font-bold">Season</h1>
									<p className="text-muted-foreground text-sm">
										Discover our curated selections perfect for every time of
										the year. Whether you're looking for something light and
										airy for spring, cool and comfortable for summer, or cozy
										and warm for winter, we have you covered with our seasonal
										collections.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Spring</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Light and breezy styles, perfect for the blossoming season.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Summer</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Cool and comfortable clothing to beat the heat.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Winter</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Cozy and warm outfits for the colder months.
									</p>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Collections</NavigationMenuTrigger>
						<NavigationMenuContent className="p-6">
							<div className="grid grid-cols-2 gap-x-6 gap-y-4 w-[567px]">
								<NavigationMenuLink className="col-span-2 bg-[#F8F8F9] p-5 flex flex-col justify-center gap-2">
									<h1 className="text-xl font-bold">Collections</h1>
									<p className="text-muted-foreground text-sm">
										Explore our exclusive collections, each thoughtfully
										designed to bring you the best in Asian fashion. From
										vibrant knitwear to elegant dresses, find the perfect pieces
										to enhance your wardrobe with our unique series.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Colorful Knitwear Series</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Vibrant knitwear perfect for adding a pop of color to your
										wardrobe.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Top Pants Series</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Versatile and stylish pants to complement any outfit.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Jiwoo Made Special Series</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Unique and exclusive pieces designed by Jiwoo.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Freshider Top Series</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Fresh and trendy tops to elevate your style.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Sweet Dress Series</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Elegant and sweet dresses for any occasion.
									</p>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
						<NavigationMenuContent className="p-6">
							<div className="grid grid-cols-2 gap-x-6 gap-y-4 w-[567px]">
								<NavigationMenuLink className="col-span-2 bg-[#F8F8F9] p-5 flex flex-col justify-center gap-2">
									<h1 className="text-xl font-bold">Categories</h1>
									<p className="text-muted-foreground text-sm">
										Step into our curated Collections, where each series is
										crafted with a unique vision in mind. From the vibrant hues
										of our Colorful Knitwear Series to the exclusive designs of
										the Jiwoo Made Special Series, explore the variety and find
										the perfect pieces to express your style.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Top</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Discover a variety of stylish tops, from casual tees to
										elegant blouses, perfect for any occasion.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Bottom</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Explore our collection of bottoms, including skirts, pants,
										and shorts, designed for comfort and style.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Dress</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Find the perfect dress for any event, whether it's a casual
										day out or a formal gathering.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Set</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Coordinated sets that offer a complete and effortless look,
										combining tops and bottoms in perfect harmony.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Knit</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Cozy and chic knitwear to keep you warm and fashionable,
										featuring sweaters, cardigans, and more.
									</p>
								</NavigationMenuLink>
								<NavigationMenuLink>
									<h2 className="font-medium">Outer</h2>
									<p className="line-clamp-2 text-sm text-muted-foreground">
										Outerwear that adds the finishing touch to your outfit, from
										stylish jackets to warm coats.
									</p>
								</NavigationMenuLink>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};

export default NavMenu;
