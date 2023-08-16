import React from 'react';

type Props = {
	level: number;
	color: string;
}

export default function Level({ level, color }: Props) {
	return (
		<div className="flex items-center w-full relative">
			<span className="absolute left-1/2 -translate-x-2/4 px-1 text-[#202020] font-bold">{ level }</span>
			<div className="overflow-hidden w-full h-4" style={{ backgroundColor: `${color}20` }}>
				<div className="h-full" style={{ backgroundColor: color, width: `${level}%` }} />
			</div>
		</div>
	);
}