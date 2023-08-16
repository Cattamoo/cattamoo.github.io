import React from 'react';
import {SkillDescriptionType} from "../data/skills";

type Props = SkillDescriptionType;

export default function SkillDescription({ scores, description }: Props) {
	return (
		<li className="flex gap-1">
			<span className="text-center bg-brandDark text-white text-xs self-center px-2 rounded-lg">
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