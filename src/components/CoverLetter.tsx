import React from 'react';
import Title from "./commons/Title";
import {IoIosPeople, IoMdCheckmarkCircle, IoMdDoneAll, IoMdFlask, IoMdTime} from "react-icons/io";
import Intro from "./Intro";

const list = [
	{ icon: IoIosPeople, content: '의사소통 원할' },
	{ icon: IoMdTime, content: '시간약속 철저' },
	{ icon: IoMdDoneAll, content: '빠른 이해' },
	{ icon: IoMdFlask, content: '도전 좋아함' },
	{ icon: IoMdCheckmarkCircle, content: '긍정적인 성격' },
]

export default function CoverLetter() {
	// "grid grid-cols-3 gap-4 px-4 text-center justify-center sm:grid-cols-5"
	return (
		<div className="flex flex-col gap-10 py-10 px-2">
			<Title className="text-center text-black">자기소개</Title>
			<div className="flex flex-wrap gap-4 px-4 text-center items-center justify-center">
				{
					list.map((item, idx) => <Intro key={`cl_${idx}`} index={idx} Icon={item.icon} content={item.content} />)
				}
			</div>
		</div>
	);
}