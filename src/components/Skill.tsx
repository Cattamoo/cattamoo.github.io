import React from 'react';
import {IconType} from "react-icons";
import {FaQuestionCircle} from "react-icons/fa";
import Level from "./Level";

export type SkillType = {
	Icon?: IconType;
	color?: string;
	name: string;
	level: number;
}

export default function Skill({ Icon = FaQuestionCircle, color = '#ffedd5', name, level }: SkillType) {
	return (
		<li className="flex flex-col items-center text-sm gap-0.5">
			<Icon className="text-3xl" style={{ color }} />
			<span>{name}</span>
			<Level level={level} color={color} />
		</li>
	);
}