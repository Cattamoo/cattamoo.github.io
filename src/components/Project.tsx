import React from 'react';
import {FaGithub} from "react-icons/fa";
import {MdCode, MdOutlineOpenInNew} from "react-icons/md";
import {RiCalendarTodoFill} from "react-icons/ri";
import {ProjectType} from "../data/projects";

type Props = {
	project: ProjectType;
	onClick: (project: ProjectType) => void
};

export default function Project({ project, onClick }: Props) {
	const { img = '', title, date, content = '', tags = [], link = {} } = project;
	const handleOnClick: React.MouseEventHandler<HTMLLIElement> = ({ target }) => {
		if(!target.toString().includes('SVG')) {
			onClick(project);
		}
	}
	return (
		<li className="relative min-h-full bg-amber-50 p-4 shadow-lg flex flex-col items-center gap-1" onClick={handleOnClick}>
			<div className="absolute -left-3 top-3 text-sm flex gap-0.5 items-center py-2 px-6 font-semibold text-zinc-600/75 bg-amber-200 shadow">
				<RiCalendarTodoFill className="mr-2 text-amber-600" /><span>{date.start}</span>~{date.end && <span>{date.end}</span>}
			</div>
			<img className="w-full aspect-square object-center object-cover rounded-lg" src={img} alt={`${title}`} />
			<div className="w-full relative">
				<h2 className="text-center text-lg font-bold text-black">
					{ title }
				</h2>
				<div className="absolute top-1/2 right-0 -translate-y-2/4 flex gap-1 items-center text-lg">
					{ link?.gist && <a rel="noreferrer" className="text-black/50 hover:text-black/75" href={link.gist} target="_blank"><MdCode/></a> }
					{ link?.github && <a rel="noreferrer" className="text-black/50 hover:text-black/75" href={link.github} target="_blank"><FaGithub/></a> }
					{ link?.page && <a rel="noreferrer" className="text-black/50 hover:text-black/75" href={link.page} target="_blank"><MdOutlineOpenInNew/></a> }
				</div>
			</div>
			<ul className="flex flex-wrap justify-center gap-1.5 text-sm">
				{
					tags.map((tag, idx) => <li className="bg-amber-100 px-1 pb-0.5 rounded-lg" key={`tag_${title}_${idx}`}>{`#${tag}`}</li>)
				}
			</ul>
			<p>{ content }</p>
		</li>
	);
}