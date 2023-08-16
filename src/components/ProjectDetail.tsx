import React from 'react';
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
		<div className="absolute z-[5000] bg-white w-full h-full sm:w-2/3 sm:h-2/3 sm:rounded-lg border-[1px] border-zinc-50">
			<header className="bg-brand p-2 flex justify-between border-b-2 border-brandDark">
				<div className="flex items-center gap-2">
					{
						logo
							? <img className="aspect-square w-[1.5rem]" src={logo} alt={title} />
							: <div className="aspect-square w-[1.5rem] h-[1.5rem] font-bold text-center bg-brandDark/50 text-white rounded-lg">{ title.charAt(0) }</div>
					}
					<span className="font-bold text-black">{ title }</span>
				</div>
				<button className="bg-brandDark/75 px-2 py-0.1 rounded text-white hover:bg-brandDark" onClick={onClick}>닫기</button>
			</header>
			<iframe title={title} className="w-full h-full" src={link?.page}></iframe>
		</div>
	);
}