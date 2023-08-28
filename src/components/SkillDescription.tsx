import React from 'react';
import {SkillDescriptionType} from "../data/skills";

type Props = SkillDescriptionType & {
	isCurrent: boolean;
	setFilter: (scores: SkillDescriptionType["scores"]) => void;
	clearFilter: () => void;
};

export default function SkillDescription({ isCurrent, scores, description, setFilter, clearFilter }: Props) {
	console.log(scores, isCurrent)
	return (
		<li className="flex gap-1">
			<span
				className={`cursor-pointer text-center ${isCurrent ? 'bg-brand text-brandDark' : 'bg-brandDark text-white'} text-xs self-center px-2 rounded-lg`}
				onClick={!isCurrent ? () => setFilter(scores) : clearFilter}
			>
				{
					scores.min || <span className="text-transparent">00</span>
				}
				&nbsp;~&nbsp;
				{
					scores.max || <span className="text-transparent">00</span>
				}
			</span>
			<span className="text-sm">{ description }</span>
		</li>
	);
}