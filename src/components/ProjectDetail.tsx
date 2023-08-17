import React from 'react';
import DetailLayout from "./layouts/DetailLayout";
import { ProjectType } from "../data/projects";

type Props = {
	project: ProjectType | null;
	onClick: () => void;
}

export default function ProjectDetail({ project, onClick }: Props) {
	if(!project) {
		return <></>
	}
	const { title, logo, link } = project;
	return (
		<DetailLayout
			title={
				<div className="flex items-center gap-2">
					{
						logo
							? <img className="aspect-square w-[1.5rem]" src={logo} alt={title} />
							: <div className="aspect-square w-[1.5rem] h-[1.5rem] font-bold text-center bg-brandDark/50 text-white rounded-lg">{ title.charAt(0) }</div>
					}
					<span className="font-bold text-black">{ title }</span>
				</div>
			}
			onClose={onClick}
		>
			<iframe title={title} className="w-full h-full" src={link?.page}></iframe>
		</DetailLayout>
	);
}