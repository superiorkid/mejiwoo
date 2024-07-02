import { StarIcon } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
	imageUrl: string;
	productName: string;
	reviewerName: string;
	review: string;
}

const ReviewCard = ({
	imageUrl,
	productName,
	review,
	reviewerName,
}: ReviewCardProps) => {
	return (
		<div className="p-1">
			<div className="p-5 space-y-4">
				<div className="relative aspect-square">
					<Image
						fill
						src={imageUrl}
						alt={`${productName} review by ${reviewerName}`}
						className="object-cover"
					/>
				</div>

				<div className="text-center space-y-1.5">
					<h2 className="text-lg">{productName}</h2>
					<div className="flex space-x-1 items-center justify-center">
						{Array.from({ length: 5 }).map((_, index) => (
							<StarIcon
								className="size-4 fill-yellow-400 stroke-yellow-400"
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
							/>
						))}
					</div>
					<h5>-{reviewerName}-</h5>
					<p>{review}</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
