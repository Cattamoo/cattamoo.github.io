import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import SubTitle from "../components/commons/SubTitle";
import Skill, {SkillType} from "../components/Skill";
import {
	SiCss3, SiGit, SiGraphql,
	SiHtml5,
	SiJavascript, SiNodedotjs,
	SiOracle,
	SiPostgresql,
	SiReact,
	SiTailwindcss,
	SiTypescript
} from "react-icons/si";

const skills: { [key: string]: SkillType[] } = {
	'Front-end': [
		{ Icon: SiHtml5, name: 'HTML', level: 63, color: '#ec6231' },
		{ Icon: SiCss3, name: 'CSS', level: 57.2, color: '#264de4' },
		{ Icon: SiJavascript, name: 'Javascript', level: 73, color: '#f0db4f' },
		{ Icon: SiReact, name: 'React', level: 53, color: '#61dbfb' },
		{ Icon: SiTypescript, name: 'Typescript', level: 32, color: '#007acc' },
		{ Icon: SiTailwindcss, name: 'TailwindCSS', level: 53, color: '#38bdf8' },
	],
	'Back-end': [
		{ Icon: SiOracle, name: 'Oracle', level: 23, color: '#f80000' },
		{ Icon: SiPostgresql, name: 'Postgresql', level: 43, color: '#336791' },
		{ Icon: SiNodedotjs, name: 'Node.js', level: 32, color: '#68a063' },
		{ Icon: SiGraphql, name: 'GraphQL', level: 21, color: '#e535ab' },
	],
	'etc': [
		{ Icon: SiGit, name: 'Git', level: 53, color: '#f1502f' },
	]
}

export default function Skills() {
	return (
		<PageLayout>
			<Title className="absolute top-6 -left-4 rotate-90 text-zinc-300"><span className="text-orange-300">S</span>kills</Title>
			<div className="grid gap-2 md:grid-cols-3">
				{
					Object.keys(skills).map((name: string) => {
						return (
							<section key={name} className="flex flex-col">
								<SubTitle className="bg-orange-200 p-2 text-black">{name}</SubTitle>
								<ul className="grid grid-cols-3 gap-2 p-2">
									{
										skills[name].map(skill => (
											<Skill key={skill.name} {...skill} />
										))
									}
								</ul>
							</section>
						)
					})
				}
			</div>
		</PageLayout>
	);
}