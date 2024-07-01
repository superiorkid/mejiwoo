import Container from "@/components/container";
import MdiGithub from "@/components/icons/MdiGithub";
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
						href="#github-repo-link"
						className={buttonVariants({
							variant: "outline",
							size: "icon",
							className: "h-8",
						})}
					>
						<MdiGithub className="size-5" />
					</Link>
					<Button variant="outline" size="icon" className="h-8">
						<SunIcon className="size-5" />
					</Button>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
