import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Project, {ProjectType} from "../components/Project";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/projects";
import {useState} from "react";

export default function Projects() {
	const [current, setCurrent] = useState<ProjectType | null>(null);

	const handleChangeCurrent = (project: ProjectType) => {
		setCurrent(project);
	}
	const handleClearCurrent = () => {
		setCurrent(null);
	}

	return (
		<PageLayout>
			<Title className="text-amber-300">Projects</Title>
			<Swiper
				className="w-80"
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}>
				{
					projects.map((project, idx) =>
						<SwiperSlide key={`pj_${idx}`} className="rounded-lg">
							<Project onClick={() => handleChangeCurrent(project)} {...project} />
						</SwiperSlide>
					)
				}
			</Swiper>
			<ProjectDetail project={current} onClick={handleClearCurrent} />
		</PageLayout>
	);
}