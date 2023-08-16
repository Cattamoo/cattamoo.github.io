import React from 'react';
import {FaQuestionCircle} from "react-icons/fa";
import Level from "./Level";
import {SkillType} from "../data/skills";

type Props = SkillType;

export default function Skill({ Icon = FaQuestionCircle, color = '#ffedd5', name, level }: Props) {
	return (
		<li className="flex flex-col items-center text-sm gap-0.5">
			<Icon className="text-3xl" style={{ color }} />
			<span>{name}</span>
			<Level level={level} color={color} />
		</li>
	);
}