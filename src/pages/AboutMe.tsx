import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import Resume from "../components/Resume";
import CoverLetter from "../components/CoverLetter";
import {Navigation, Pagination} from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import {HiArrowCircleLeft, HiArrowCircleRight} from "react-icons/hi";

export default function AboutMe() {
	return (
		<PageLayout>
			<Title className="text-zinc-300 absolute top-8 -left-6 rotate-90 "><span className="text-red-300">A</span>bout</Title>
			<Swiper
				className="max-w-2xl w-full"
				direction={"horizontal"}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev'
				}}
				pagination={{
					type: "fraction",
				}}
				onResize={(swiper) => { swiper.updateSlides() }}
			>
				<SwiperSlide>
					<Resume />
				</SwiperSlide>
				<SwiperSlide>
					<CoverLetter />
				</SwiperSlide>
				<div className="swiper-prev absolute z-20 -left-0 text-2xl top-1/2 opacity-0 cursor-pointer duration-200 hover:opacity-50">
					<HiArrowCircleLeft />
				</div>
				<div className="swiper-next absolute z-20 -right-0 text-2xl top-1/2 opacity-0 cursor-pointer duration-200 hover:opacity-50">
					<HiArrowCircleRight />
				</div>
			</Swiper>
		</PageLayout>
	);
}