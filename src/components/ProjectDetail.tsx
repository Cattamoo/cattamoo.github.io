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
	const { title, content, logo, link, description } = project;
	return (
		<DetailLayout
			title={
				<div className="flex items-center gap-2">
					{
						logo
							? <img className="aspect-square w-[1.5rem]" src={logo} alt={title} />
							: <div className="aspect-square w-[1.5rem] h-[1.5rem] font-bold text-center bg-brandDark/50 text-white rounded-lg">{ title.charAt(0) }</div>
					}
					<span className="font-bold text-black">
						<span>{ title }</span>
						{ description && <span className="font-normal text-xs ml-2">({ description.personnel })</span> }
					</span>
				</div>
			}
			onClose={onClick}
		>
			<iframe title={title} className={`w-full ${description ? 'h-1/2' : 'h-full'}`} src={link?.page}></iframe>
			{
				description && (
					<div className="flex flex-col gap-1 p-2">
						<div>
							<h2 className="text-lg"><span className="font-bold">{ title }</span> 프로젝트는</h2>
							<div className="text-sm">{ content }</div>
						</div>
						<div>
							<h2 className="text-lg"><span className="font-bold">진행하게 된 계기</span>는</h2>
							<div className="whitespace-pre-line mb-0 text-sm">{ description.description }</div>
						</div>
						<div>
							<h2 className="text-lg font-bold">기능</h2>
							<ul className="text-sm">
							{
								Object.keys(description.feature).map((f) => {
									console.log(f)
									return (
										<li className="flex" key={f}>
											<div className="font-bold w-20">{f}</div>
											<div>{description.feature[f]}</div>
										</li>
									)
								})
							}
							</ul>
						</div>
						<div>
							<h2 className="text-lg font-bold">사용된 기술</h2>
							<ul className="text-sm">
								<li className="flex">
									<div className="font-bold w-24">Front-end</div>
									<span>{description.skills.frontend.join(', ')}</span>
								</li>
								<li className="flex">
									<div className="font-bold w-24">Back-end</div>
									<span>{description.skills.backend.join(', ')}</span>
								</li>
								<li className="flex">
									<div className="font-bold w-24">Deployment</div>
									<span>{description.skills.deployment.join(', ')}</span>
								</li>
							</ul>
						</div>
					</div>
				)
			}
		</DetailLayout>
	);
}