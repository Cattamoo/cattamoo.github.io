import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Project from "../components/Project";
import { projects } from "../data/projects";

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