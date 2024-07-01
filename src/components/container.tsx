import { cn } from "@/lib/utils";
import type React from "react";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

const Container = (props: ContainerProps) => {
	const { className, children, ...restProps } = props;

	return (
		<div className={cn("max-w-screen-xl mx-auto", className)} {...restProps}>
			{children}
		</div>
	);
};

export default Container;
