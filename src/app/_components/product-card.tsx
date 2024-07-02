import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	name: string;
	price: string;
	imageUrl: string;
}

const ProductCard = ({ imageUrl, name, price }: ProductCardProps) => {
	return (
		<Link href="#go-to-detail-product">
			<div className="space-y-3 p-1">
				<div className="relative h-[541px] overflow-hidden">
					<Image
						fill
						src={imageUrl}
						alt={`${name} image`}
						className="object-cover scale-105"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="text-center">
					<h2>{name}</h2>
					<p className="text-sm tracking-wide">Rp.{price}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
