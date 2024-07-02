import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

const ShoppingCart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="outline" className="h-8 text-xs">
					<ShoppingCartIcon className="size-4" />
					<span className="sr-only">Shopping cart</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="min-w-[483px] flex flex-col gap-5">
				<SheetHeader className="border-b pb-2">
					<SheetTitle>Cart</SheetTitle>
				</SheetHeader>

				<div className="flex-1 overflow-hidden flex justify-center items-center">
					<div className="text-muted-foreground flex gap-4 items-center flex-col">
						<ShoppingCartIcon className="size-16" />
						<div className="text-center">
							<h3 className="text-2xl font-semibold">Your cart is empty</h3>
							<p className="font-medium">Add item to your cart to checkout</p>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default ShoppingCart;
