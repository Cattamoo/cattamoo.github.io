import React from 'react';
import Title from "./commons/Title";
import SubTitle from "./commons/SubTitle";

export default function Resume() {
	const headerStyle = 'w-full text-center bg-red-50 text-black';
	const bodyStyle = 'w-full bg-white/50 text-sm px-0.5 break-all';
	return (
		<div className="flex flex-col gap-4 sm:gap-10 py-10 pb-20 px-2">
			<Title className="text-center text-black">이력서</Title>
			<div>
				<SubTitle className="text-black">인적사항</SubTitle>
				<div className="grid grid-cols-[100px_1fr] sm:grid-cols-[100px_1fr_100px_1fr] gap-0.5 mt-2">
					<div className={headerStyle}>이름</div>		<div className={bodyStyle}>이예진(LEE YEJIN)</div>
					<div className={headerStyle}>생년월일</div>	<div className={bodyStyle}>1998.04.19.</div>
					<div className={headerStyle}>거주지</div>	<div className={bodyStyle}>서울 관악구 신사로</div>
					<div className={headerStyle}>이메일주소</div>	<div className={bodyStyle}>ouob77@kakao.com</div>
				</div>
			</div>
			<div>
				<SubTitle className="text-black">학력</SubTitle>
				<div className="grid grid-cols-[68px_1fr_100px_60px] sm:grid-cols-[125px_1fr_120px_100px] gap-0.5 mt-2">
					<div className={headerStyle}>재학기간</div><div className={headerStyle}>학교명</div><div className={headerStyle}>학과</div><div className={headerStyle}>학점</div>
					<div className={bodyStyle}>2017.03~2021.08</div>	<div className={bodyStyle}>명지전문대학</div>			<div className={bodyStyle}>컴퓨터공학</div>	<div className={bodyStyle}>3.45 /4.5</div>
					<div className={bodyStyle}>2014.03~2017.02</div>	<div className={bodyStyle}>안산디자인문화고등학교</div>	<div className={bodyStyle}>미디어콘텐츠</div>	<div className={bodyStyle}>-</div>
				</div>
			</div>
			<div>
				<SubTitle className="text-black">경력</SubTitle>
				<div className="grid grid-cols-[68px_70px_120px_1fr] sm:grid-cols-[125px_120px_120px_1fr] gap-0.5 mt-2">
					<div className={headerStyle}>근무기간</div><div className={headerStyle}>회사명</div><div className={headerStyle}>부서/직급</div><div className={headerStyle}>담당업무</div>
					<div className={bodyStyle}>2021.07~2022.08</div>	<div className={bodyStyle}>솔루비스</div>	<div className={bodyStyle}>CTI사업1팀/주임</div>	<div className={bodyStyle}>콜센터 통계 솔루션 개발</div>
				</div>
			</div>
			<div>
				<SubTitle className="text-black">자격증</SubTitle>
				<div className="grid grid-cols-[80px_1fr_150px] sm:grid-cols-[100px_1fr_150px] gap-0.5 mt-2">
					<div className={headerStyle}>취득일</div>	<div className={headerStyle}>자격명</div>		<div className={headerStyle}>발행처</div>
					<div className={bodyStyle}>2021.11</div>	<div className={bodyStyle}>정보처리산업기사</div>	<div className={bodyStyle}>한국산업인력공단</div>
				</div>
			</div>
		</div>
	);
}