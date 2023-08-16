import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Skill from "../components/Skill";
import SkillDescription from "../components/SkillDescription";
import {skillDescriptions, skills, SkillType} from "../data/skills";

export default function Skills() {
	return (
		<PageLayout>
			<Title className="text-orange-300">Skills</Title>
			<div className="w-80 mt-1.5 mb-3">
				<p>제가 보유한 스킬입니다.</p>
				<ul className="mx-2">
					{
						skillDescriptions.map((description) => <SkillDescription key={description.description} {...description} />)
					}
				</ul>
			</div>
			<ul className="grid grid-cols-4 gap-2 p-2 md:grid-cols-5 lg:grid-cols-6">
			{
				Object.values(skills).flat().sort((a, b) => b.level - a.level).map((skill: SkillType) => <Skill key={skill.name} {...skill} />)
			}
			</ul>
		</PageLayout>
	);
}