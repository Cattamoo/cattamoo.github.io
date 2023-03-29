import React from 'react';
import {IconType} from "react-icons";

type Props = {
	index: number;
	Icon: IconType;
	content: string;
}

export default function Intro({ index, Icon, content }: Props) {
	const bgColor = index % 2 === 0 ? 'bg-red-100' : 'bg-red-50';
	return (
		<div className="basis-1/4 sm:basis-1/6">
			<div className={`flex items-center justify-center text-[3rem] ${bgColor} rounded-full p-4 text-red-300`}>
				<Icon />
			</div>
			<p className="font-semibold text-sm">{content}</p>
		</div>
	);
}