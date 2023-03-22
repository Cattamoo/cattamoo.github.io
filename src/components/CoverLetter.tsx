import React from 'react';
import Title from "./commons/Title";
import SubTitle from "./commons/SubTitle";

export default function CoverLetter() {
	return (
		<div className="flex flex-col gap-10 py-10 px-2">
			<Title className="text-center text-black">자기소개</Title>
			<div>
				<SubTitle className="text-black">제목</SubTitle>
				<div className="mt-2">
					내용
				</div>
			</div>
			<div>
				<SubTitle className="text-black">제목</SubTitle>
				<div className="mt-2">
					내용
				</div>
			</div>
		</div>
	);
}