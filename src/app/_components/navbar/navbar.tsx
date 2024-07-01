import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavMenu from "./navmenu";
import SearchDialog from "./search-dialog";
import ShoppingCart from "./shopping-cart";

const Navbar = () => {
	return (
		<header className="border-b py-1.5 px-5 2xl:px-0">
			<Container className="flex justify-between items-center">
				<div className="flex items-center gap-6">
					<div>
						<Link href="/" className="text-xl font-semibold">
							Hana | ハナ
						</Link>
					</div>
					<NavMenu />
				</div>
				<div className="flex items-center space-x-2">
					<SearchDialog />
					<ShoppingCart />
					<Button size="sm" className="h-8 text-xs">
						Sign in
					</Button>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
