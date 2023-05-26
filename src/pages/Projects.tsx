import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Project, {ProjectType} from "../components/Project";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";


const projects: ProjectType[] = [
	{
		title: 'ANYTHING',
		date: { start: '2023-05-24', end: '2023-05-26'},
		img: 'https://github.com/Cattamoo/anything/assets/87294942/01b417fd-5271-4c0d-9249-e9e0a49068b9',
		tags: ['React', 'Typescript', 'TailwindCSS', 'Redux', 'firebase'],
		content: '구글 로그인을 연동하여 다른 사용자들과 소통할 수 있는 웹 어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/anything', page: 'https://anything-cattamoo.vercel.app' }
	},
	{
		title: 'MEMO',
		date: { start: '2023-04-20', end: '2023-05-23'},
		img: 'https://github.com/Cattamoo/memo/assets/87294942/ca2db2ba-ff3d-4cff-ba52-d6e666c323e4',
		tags: ['React', 'Typescript', 'TailwindCSS', 'Redux'],
		content: '개인 메모 웹 어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/memo', page: 'https://memo-cattamoo.vercel.app' }
	},
	{
		title: 'Weather',
		date: { start: '2023-05-18', end: '2023-05-21'},
		img: 'https://github.com/Cattamoo/weather/assets/87294942/3e55cd5f-a7e0-45cf-b119-1c1cf1a212c3',
		tags: ['Vue', 'Typescript', 'TailwindCSS'],
		content: '날씨 API를 사용한 날씨정보 웹 어플리케이션 입니다.',
		link: { github: 'https://github.com/Cattamoo/weather', page: 'https://weather-cattamoo.vercel.app' }
	},
	{
		title: 'YouTube',
		date: { start: '2022-11', end: '2023-04'},
		img: 'https://user-images.githubusercontent.com/87294942/230587851-f0c574aa-16e9-400a-baa0-de7fcc030095.png',
		tags: ['React', 'TailwindCSS'],
		content: 'YouTube API를 사용한 YouTube 클론코딩 프로젝트입니다.',
		link: { github: 'https://github.com/Cattamoo/youtube', page: 'https://youtube-cattamoo.vercel.app/', gist: 'https://gist.github.com/Cattamoo/80e8d1b595beac5648ecc58a54babc47' }
	},
	{
		title: 'Colorful Log Maker',
		date: { start: '2023-01', end: '2023-03'},
		img: 'https://user-images.githubusercontent.com/87294942/226336432-bcbb4c36-15f5-4001-a8ab-759b625380fa.png',
		tags: ['React', 'TailwindCSS', 'Typescript'],
		content: 'console.log 를 커스터마이징할 수 있는 웹어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/colorful-log-maker', page: 'https://cattamoo.github.io/colorful-log-maker', gist: 'https://gist.github.com/Cattamoo/dc60bc06d190359a8158b304869bc35b' }
	},
	{
		title: 'Markdown Editor',
		date: { start: '2022-11', end: '2023-01'},
		img: 'https://user-images.githubusercontent.com/87294942/226334946-b12df126-06dc-4a6b-a210-1335927c0697.png',
		tags: ['React', 'TailwindCSS'],
		content: 'Markdown 파일을 저장/수정 할 수 있는 웹어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/editor', page: 'https://cattamoo.github.io/editor' }
	},
	{
		title: 'Like Momentum',
		date: { start: '2022-11', end: '2023-01'},
		img: 'https://user-images.githubusercontent.com/87294942/226338171-3ee6ef0c-0d00-4a34-aa81-804e04b0d4bf.png',
		tags: ['JQuery'],
		content: 'Momentum 클론코딩(개인 대시보드 웹어플리케이션)입니다.',
		link: { github: 'https://github.com/j-dea/like.momentum', page: 'https://j-dea.github.io/like.momentum', gist: 'https://gist.github.com/Cattamoo/60d2e48cbd4ad1ce9c7938e54cea2ab0' }
	},
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