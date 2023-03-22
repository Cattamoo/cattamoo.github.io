import React from 'react';
import {Pagination, A11y, Mousewheel} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

const pages: { element: React.ReactElement, title: string }[] = [
	{ element: <Main/>, title: 'Home' },
	{ element: <AboutMe/>, title: 'About' },
	{ element: <Skills/>, title: 'Skills' },
	{ element: <Projects/>, title: 'Projects' },
	{ element: <ContactMe/>, title: 'ContactMe' },
];

export default function App() {
	return (
		<Swiper
			className="w-full h-screen"
			modules={[Pagination, Mousewheel, A11y]}
			direction={"vertical"}
			spaceBetween={0}
			slidesPerView={1}
			pagination={{
				clickable: true,
				renderBullet: (idx, className) => {
					return `<span class="${className}">${pages[idx].title}</span>`;
				}
			}}
			mousewheel={true}
		>
			{
				pages.map((page, index) =>
					<SwiperSlide key={index}>
						{ page.element }
					</SwiperSlide>
				)
			}
		</Swiper>
	);
}
