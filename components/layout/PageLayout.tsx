import React from 'react';
import Head from "next/head";
import Seo from "../common/Seo";

type Props = {
	children: React.ReactNode;
	title: string;
	hideTitle?: boolean;
}

export default function PageLayout({ children, title, hideTitle = true }: Props) {
	return (
		<>
			<Seo title={title} />
			<main className="page">
				{ !hideTitle && <h2 className="text-lg font-bold">{`📕 ${title}`}</h2> }
				{ children }
			</main>
		</>
	);
}