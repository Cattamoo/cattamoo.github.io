import { SkillType } from "../components/Skill";
import {
	SiCss3, SiGit, SiGraphql,
	SiHtml5,
	SiJavascript, SiNextdotjs, SiNodedotjs,
	SiOracle,
	SiPostgresql,
	SiReact, SiRedux,
	SiTailwindcss,
	SiTypescript
} from "react-icons/si";

export const skills: { [key: string]: SkillType[] } = {
	'Front-end': [
		{ Icon: SiHtml5, name: 'HTML', level: 63, color: '#ec6231' },
		{ Icon: SiCss3, name: 'CSS', level: 57.2, color: '#264de4' },
		{ Icon: SiJavascript, name: 'Javascript', level: 73, color: '#f0db4f' },
		{ Icon: SiTypescript, name: 'Typescript', level: 47, color: '#007acc' },
		{ Icon: SiReact, name: 'React', level: 63, color: '#61dbfb' },
		{ Icon: SiRedux, name: 'Redux', level: 43, color: '#764abc' },
		{ Icon: SiTailwindcss, name: 'TailwindCSS', level: 53, color: '#38bdf8' },
		{ Icon: SiNextdotjs, name: 'Next.js', level: 22, color: '#000000' },
	],
	'Back-end': [
		{ Icon: SiOracle, name: 'Oracle', level: 23, color: '#f80000' },
		{ Icon: SiPostgresql, name: 'Postgresql', level: 43, color: '#336791' },
		{ Icon: SiNodedotjs, name: 'Node.js', level: 32, color: '#68a063' },
		{ Icon: SiGraphql, name: 'GraphQL', level: 21, color: '#e535ab' },
	],
	'etc': [
		{ Icon: SiGit, name: 'Git', level: 59, color: '#f1502f' },
	]
}