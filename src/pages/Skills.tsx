import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import SubTitle from "../components/commons/SubTitle";
import Level from "../components/Level";

type SkillItem = {
	name: string;
	level: 1 | 2 | 3 | 4 | 5;
	description?: string;
}

const skills: { [key: string]: SkillItem[] } = {
	'Front-end': [
		{ name: 'HTML', level: 3, },
		{ name: 'CSS', level: 3, },
		{ name: 'Javascript', level: 3, },
		{ name: 'React', level: 3, },
		{ name: 'Typescript', level: 2, },
		{ name: 'TailwindCSS', level: 3, },
	],
	'Back-end': [
		{ name: 'Oracle', level: 3 },
		{ name: 'Postgresql', level: 3 },
		{ name: 'Node.js', level: 2, },
		{ name: 'GraphQL', level: 1, },
	],
	'etc': [
		{ name: 'Git', level: 3 },
	]
}

export default function Skills() {
	return (
		<PageLayout>
			<Title className="absolute top-6 -left-4 rotate-90 text-zinc-300"><span className="text-orange-300">S</span>kills</Title>
			<div className="grid gap-2 w-full sm:w-auto sm:grid-cols-3">
				{
					Object.keys(skills).map((name: string) => {
						return (
							<section key={name} className="flex flex-col">
								<SubTitle className="bg-orange-50 p-2 text-black">{name}</SubTitle>
								<ul className="ml-2">
								{
									skills[name].map(skill => (
										<li key={skill.name} className="grid grid-cols-[100px_5.5rem] items-center text-sm">
											{skill.name}
											<Level level={skill.level} />
										</li>
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