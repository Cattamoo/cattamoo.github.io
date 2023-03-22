import React from 'react';

type Props = {
	level: number;
}

export default function Level({ level }: Props) {
	return (
		<div className="flex items-center gap-0.5">
			{
				Array.from({length: level}).map((_, idx) => <div key={`lv_${idx}`} className="w-4 h-4 bg-orange-100" />)
			}
			{
				Array.from({length: 5 - level}).map((_, idx) => <div key={`lv_o_${idx}`} className="w-4 h-4 bg-zinc-50" />)
			}
		</div>
	);
}