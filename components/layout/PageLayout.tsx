import React from 'react';

type Props = {
	children: React.ReactNode;
	title?: string;
}

export default function PageLayout({ children, title }: Props) {
	return (
		<main className="page">
			{ title && <h2 className="text-lg font-bold">{`📕 ${title}`}</h2> }
			{ children }
		</main>
	);
}