import React from 'react';
import {FaGithub} from "react-icons/fa";
import {MdOutlineOpenInNew} from "react-icons/md";

export type ProjectType = {
	img?: string;
	title: string;
	content?: string;
	tags?: string[];
	link?: { github?: string, page?: string };
}

export default function Project({ img = '', title, content = '', tags = [], link = {} }: ProjectType) {
	return (
		<li className="min-h-full bg-amber-50 p-4 shadow-lg flex flex-col items-center gap-1">
			<img className="w-full aspect-square object-left object-cover rounded-lg" src={img} alt={`${title}`} />
			<h2 className="flex items-center gap-2 text-lg font-bold text-black">
				{ title }
				{ link?.github && <a rel="noreferrer" className="text-black/50 hover:text-black/75" href={link.github} target="_blank"><FaGithub/></a> }
				{ link?.page && <a rel="noreferrer" className="text-black/50 hover:text-black/75" href={link.page} target="_blank"><MdOutlineOpenInNew/></a> }
			</h2>
			<ul className="flex gap-1.5 text-sm">
				{
					tags.map((tag, idx) => <li className="bg-amber-100 px-1 pb-0.5 rounded-lg" key={`tag_${title}_${idx}`}>{`#${tag}`}</li>)
				}
			</ul>
			<p>{ content }</p>
		</li>
	);
}