import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import Skill from "../components/Skill";
import SkillDescription from "../components/SkillDescription";
import {skillDescriptions, SkillDescriptionType, skills, SkillType} from "../data/skills";
import {useState} from "react";

export default function Skills() {
	const [selected, setSelected] = useState<SkillDescriptionType["scores"] | null>(null);
	const filteringSkills = (skill: SkillType) => {
		if(selected !== null) {
			if((skill.level >= (selected.min ? selected.min : 0)) && (skill.level <= (selected.max ? selected.max : 100))) {
				return true;
			}
		} else {
			return true;
		}
	}
	const handleSetFilter = (scores: SkillDescriptionType["scores"]) => {
		setSelected(scores);
	}
	const handleClearFilter = () => {
		setSelected(null);
	}
	return (
		<PageLayout>
			<Title className="text-brandDark">Skills</Title>
			<div className="w-80 mt-1.5 mb-3">
				<ul>
					{
						skillDescriptions.map((description) => <SkillDescription
							key={description.description}
							isCurrent={!!selected && selected === description.scores}
							setFilter={handleSetFilter}
							clearFilter={handleClearFilter}
							{...description}
						/>)
					}
				</ul>
			</div>
			<ul className="w-80 grid grid-cols-4 gap-2 p-2 lg:grid-cols-5">
			{
				Object.values(skills).flat().filter(filteringSkills).sort((a, b) => b.level - a.level).map((skill: SkillType) => <Skill key={skill.name} {...skill} />)
			}
			</ul>
		</PageLayout>
	);
}