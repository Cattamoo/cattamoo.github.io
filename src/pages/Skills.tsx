import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import SubTitle from "../components/commons/SubTitle";
import Skill from "../components/Skill";
import { skills } from "../data/skills";

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