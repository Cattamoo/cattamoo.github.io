import {IconType} from "react-icons";
import {
	SiAdobephotoshop,
	SiCss3, SiGit, SiGraphql,
	SiHtml5,
	SiJavascript, SiNextdotjs, SiNodedotjs,
	SiOracle,
	SiPostgresql,
	SiReact, SiRedux,
	SiTailwindcss,
	SiTypescript
} from "react-icons/si";

export type SkillType = {
	Icon?: IconType;
	color?: string;
	name: string;
	level: number;
};

export type SkillDescriptionType = {
	scores: {
		min?: number;
		max?: number;
	};
	description: string;
};

export const skillDescriptions: SkillDescriptionType[] = [
	{ scores: { max: 30 }, description: '시도해봄' },
	{ scores: { min: 31, max: 60 }, description: "기본지식 있음" },
	{ scores: { min: 61, max: 90 }, description: "어느정도 능숙하게 사용 가능" },
	{ scores: { min: 91 }, description: "모든 곳에서 사용 가능" },
];

export const skills: { [key: string]: SkillType[] } = {
	'Front-end': [
		{ Icon: SiHtml5, name: 'HTML', level: 63, color: '#ec6231' },
		{ Icon: SiCss3, name: 'CSS', level: 59, color: '#264de4' },
		{ Icon: SiJavascript, name: 'Javascript', level: 83, color: '#f0db4f' },
		{ Icon: SiTypescript, name: 'Typescript', level: 55, color: '#007acc' },
		{ Icon: SiReact, name: 'React', level: 83, color: '#61dbfb' },
		{ Icon: SiRedux, name: 'Redux', level: 33, color: '#764abc' },
		{ Icon: SiTailwindcss, name: 'TailwindCSS', level: 63, color: '#38bdf8' },
		{ Icon: SiNextdotjs, name: 'Next.js', level: 22, color: '#000000' },
	],
	'Back-end': [
		{ Icon: SiOracle, name: 'Oracle', level: 23, color: '#f80000' },
		{ Icon: SiPostgresql, name: 'Postgresql', level: 53, color: '#336791' },
		{ Icon: SiNodedotjs, name: 'Node.js', level: 62, color: '#68a063' },
		{ Icon: SiGraphql, name: 'GraphQL', level: 11, color: '#e535ab' },
	],
	'etc': [
		{ Icon: SiGit, name: 'Git', level: 59, color: '#f1502f' },
		{ Icon: SiAdobephotoshop, name: 'Photoshop', level: 61, color: '#31A8FF' },
	]
};

