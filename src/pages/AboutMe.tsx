import React, {useState} from "react";
import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import {getAge} from "../util/date";
import {myInformation} from "../data/introduce";

export default function AboutMe() {
	const { birthdate, location, education, keywords } = myInformation;
	const [keyword, setKeyword] = useState<string | null>(null);
	const handleSetKeyword = (k: string) => setKeyword(k);
	const handleClearKeyword = () => setKeyword(null);

	return (
		<PageLayout>
			<Title className="text-brandDark">About <span className="text-brand bg-brandDark px-4 rounded-lg">이예진</span></Title>
			<ul className="w-80 text-sm mt-4 flex flex-col gap-1">
				<li className="flex">
					<span className="w-16 font-bold">생년월일</span>
					<span>{birthdate} (만 {getAge(birthdate)}세)</span>
				</li>
				<li className="flex">
					<span className="w-16 font-bold">거주지역</span>
					<span>{location.join(', ')}</span>
				</li>
				<li>
					<span className="w-16 font-bold">학력사항</span>
					<ul className="ml-1">
						{
							education.map((edu) =>
								<li className="flex items-center gap-2" key={edu.name}>
									<div className="text-xs flex flex-col items-center bg-brand rounded px-1.5 py-0.5">
										<span>{edu.date.start}</span>
										<span>{edu.date.end}</span>
									</div>
									<div className="flex flex-col">
										<span>{edu.name}</span>
										<span>{edu.major} 졸업</span>
									</div>
								</li>
							)
						}
					</ul>
				</li>
				<li>
					<span className="font-bold">저는 이런 사람입니다</span>
					<ul className="mt-0.5 flex gap-1 flex-wrap justify-center">
						{
							Object.keys(keywords).map(key =>
								<li
									key={key}
									className={`${key === keyword ? 'bg-brand text-brandDark font-bold' : 'text-brand bg-brandDark'} text-xs px-2 py-0.5 rounded-lg hover:bg-brand hover:font-bold hover:text-brandDark cursor-pointer`}
									onClick={() => key === keyword ? handleClearKeyword() : handleSetKeyword(key)}
								>
									{key}
								</li>
							)
						}
					</ul>
				</li>
			</ul>
		</PageLayout>
	);
}