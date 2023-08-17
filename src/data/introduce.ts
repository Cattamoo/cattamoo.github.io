type Introduce = {
	birthdate: string;
	location: string[];
	education: EducationType[];
	keywords: KeywordsType;
}

type EducationType = {
	date: { start: string, end: string };
	name: string;
	major: string;
};

type KeywordsType = {
	[key: string]: string;
}

export const myInformation: Introduce = {
	birthdate: '1998.04.19',
	location: [ '서울 관악구' ],
	education: [
		{ date: { start: '2017.03', end: '2021.08' }, name: '명지전문대학', major: '컴퓨터공학과' },
		{ date: { start: '2014.03', end: '2017.02' }, name: '안산디자인문화고등학교', major: '미디어콘텐츠과' }
	],
	keywords: {
		'INFP': ``,
		'집순이': '',
		'게임좋아함': '',
		'서포터': '',
		'얼죽아': '',
		'욕심쟁이': '',
		'고집쟁이': '',
		'이해빠름': '',
		'눈치빠름': '',
		'빵순이': '',
	}
};