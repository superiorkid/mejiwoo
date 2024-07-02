import Container from "@/components/container";
import type React from "react";

interface AuthenticationLayoutProps {
	children: Readonly<React.ReactNode>;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
	return (
		<Container className="flex min-h-[72dvh] items-center">
			{children}
		</Container>
	);
};

export default AuthenticationLayout;
