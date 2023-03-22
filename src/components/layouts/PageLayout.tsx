import React from 'react';

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({ children, className = '' }: Props) {
	return (
		<section className={`w-full h-full flex flex-col justify-center items-center ${className}`}>
			{ children }
		</section>
	);
}