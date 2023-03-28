import React from 'react';

type Props = {
	children?: React.ReactNode;
	className?: string;
}

export default function SubTitle({ children = '', className = '' }: Props) {
	return (
		<h3 className={`text-lg font-semibold ${className}`}>{ children }</h3>
	);
}