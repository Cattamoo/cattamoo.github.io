import React from 'react';

type Props = {
	children?: React.ReactNode;
	className?: string;
}

export default function Title({ children = '', className = '' }: Props) {
	return (
		<h1 className={`text-3xl font-bold ${className}`}>{ children }</h1>
	);
}