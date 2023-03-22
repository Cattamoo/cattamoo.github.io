import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Project, {ProjectType} from "../components/Project";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";


const projects: ProjectType[] = [
	{
		title: 'Markdown Editor',
		img: 'https://user-images.githubusercontent.com/87294942/226334946-b12df126-06dc-4a6b-a210-1335927c0697.png',
		tags: ['React', 'TailwindCSS'],
		content: 'Markdown 파일을 저장/수정 할 수 있는 웹어플리케이션입니다.',
		link: 'https://github.com/Cattamoo/editor'
	},
	{
		title: 'Colorful Log Maker',
		img: 'https://user-images.githubusercontent.com/87294942/226336432-bcbb4c36-15f5-4001-a8ab-759b625380fa.png',
		tags: ['React', 'TailwindCSS', 'Typescript'],
		content: 'console.log 를 커스터마이징할 수 있는 웹어플리케이션입니다.',
		link: 'https://github.com/Cattamoo/colorful-log-maker'
	},
	{
		title: 'Like Momentum',
		img: 'https://user-images.githubusercontent.com/87294942/226338171-3ee6ef0c-0d00-4a34-aa81-804e04b0d4bf.png',
		tags: ['JQuery'],
		content: 'Momentum 클론코딩(개인 대시보드 웹어플리케이션)입니다.',
		link: 'https://github.com/j-dea/like.momentum'
	}
]

export default function Projects() {
	return (
		<PageLayout>
			<Title className="absolute top-11 -left-8 rotate-90 text-zinc-300"><span className="text-yellow-300">P</span>rojects</Title>
			<Swiper
				className="w-80"
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}>
				{
					projects.map((project, idx) =>
						<SwiperSlide key={`pj_${idx}`} className="rounded-lg">
							<Project {...project} />
						</SwiperSlide>
					)
				}
			</Swiper>
		</PageLayout>
	);
}