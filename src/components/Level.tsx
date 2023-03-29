import React from 'react';

type Props = {
	level: number;
	color: string;
}

export default function Level({ level, color }: Props) {
	return (
		<div className="flex items-center w-full">
			<div className="overflow-hidden w-full h-2" style={{ backgroundColor: `${color}20` }}>
				<div className="h-full" style={{ backgroundColor: color, width: `${level}%` }} />
			</div>
		</div>
	);
}