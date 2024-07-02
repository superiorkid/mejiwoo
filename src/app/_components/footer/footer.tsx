import Container from "@/components/container";
import MdiGithub from "@/components/icons/MdiGithub";
import PhFigmaLogo from "@/components/icons/PhFigmaLogo";
import { Button, buttonVariants } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="border-t py-7">
			<Container className="flex items-center justify-between">
				<div>
					<p className="text-muted-foreground text-sm">
						Buit by <span className="font-bold">Moh. Ilhamuddin</span>
					</p>
				</div>
				<div className="flex gap-2">
					<Link
						href="https://github.com/superiorkid/mejiwoo-ecommerce-landing-page"
						className={buttonVariants({
							variant: "outline",
							size: "icon",
							className: "h-8",
						})}
					>
						<MdiGithub className="size-5" />
					</Link>
					<Link
						href="https://www.figma.com/design/adKyOvwHjkGkk73Ou8WyVk/MEJIWOO-Fashion---E-commerce-Website-Landing-Page-(Community)?node-id=0-1&t=E6vQ5JiHuMLbtxOi-0"
						className={buttonVariants({
							variant: "outline",
							size: "icon",
							className: "h-8",
						})}
					>
						<PhFigmaLogo className="size-5" />
					</Link>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
