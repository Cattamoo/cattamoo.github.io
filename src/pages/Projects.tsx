import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Project from "../components/Project";
import ProjectDetail from "../components/ProjectDetail";
import { projects, ProjectType } from "../data/projects";

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
			<div className="w-80 mt-1.5 mb-3">
				<p>제가 진행한 사이드 프로젝트입니다.</p>
				<p>클릭 시 해당 프로젝트를 테스트할 수 있는 팝업이 오픈됩니다.</p>
			</div>
			<Swiper
				className="w-80"
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}>
				{
					projects.map((project, idx) =>
						<SwiperSlide key={`pj_${idx}`} className="rounded-lg">
							<Project project={project} onClick={handleChangeCurrent} />
						</SwiperSlide>
					)
				}
			</Swiper>
			<ProjectDetail project={current} onClick={handleClearCurrent} />
		</PageLayout>
	);
}