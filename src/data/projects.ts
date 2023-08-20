export type ProjectType = {
	logo?: string;
	img?: string;
	title: string;
	date: { start: string; end?: string; };
	content?: string;
	tags?: string[];
	link?: { github?: string, page?: string, gist?: string };
	description?: {
		personnel: string;
		description: string;
		feature: {
			[key: string]: string;
		};
		skills: {
			frontend: string[];
			backend: string[];
			deployment: string[];
		};
	}
}
export const projects: ProjectType[] = [
	{
		title: 'ANYTHING',
		date: { start: '2023-05-24', end: '2023-05-26'},
		img: 'https://github.com/Cattamoo/anything/assets/87294942/01b417fd-5271-4c0d-9249-e9e0a49068b9',
		tags: ['React', 'Typescript', 'TailwindCSS', 'Redux', 'firebase'],
		content: '구글 로그인을 연동하여 다른 사용자들과 소통할 수 있는 웹 어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/anything', page: 'https://anything-cattamoo.vercel.app' },
		description: {
			personnel: '1인 프로젝트',
			description: '앞에서 MEMO 프로젝트를 진행 후 \'지인을 초대하여 글을 공유할 수 있는 프라이빗한 소통 공간을 만든다면 어떨까?\' 라는 생각으로 진행하게 된 프로젝트입니다.',
			feature: {
				'회원가입': '구글 로그인',
				'게시판': 'Public / Private 게시판 생성 가능 (이후 게시판 클릭 - [초대] 버튼을 통해 사용자 초대 가능)',
				'게시글': '게시판에 해당하는 게시글을 작성 가능',
				'댓글': '게시글에 댓글 작성 가능'
			},
			skills: {
				frontend: ['React', 'Typescript', 'TailwindCSS', 'Redux'],
				backend: ['firebase'],
				deployment: ['vercel']
			},
		}
	},
	{
		title: 'MEMO',
		date: { start: '2023-04-20', end: '2023-05-23'},
		img: 'https://github.com/Cattamoo/memo/assets/87294942/ca2db2ba-ff3d-4cff-ba52-d6e666c323e4',
		tags: ['React', 'Typescript', 'TailwindCSS', 'Redux'],
		content: '개인 메모 웹 어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/memo', page: 'https://memo-cattamoo.vercel.app' },
		description: {
			personnel: '1인 프로젝트',
			description: '\'개인 메모 어플리케이션을 게시판에 글을 쓰는 것처럼 한다면 어떨까?\' 라는 생각으로 진행하게 된 프로젝트입니다.',
			feature: {
				'메모': '메모 추가/수정/삭제'
			},
			skills: {
				frontend: ['React', 'Typescript', 'TailwindCSS', 'Redux'],
				backend: [''],
				deployment: ['vercel']
			},
		}
	},
	{
		title: 'Weather',
		date: { start: '2023-05-18', end: '2023-05-21'},
		img: 'https://github.com/Cattamoo/weather/assets/87294942/3e55cd5f-a7e0-45cf-b119-1c1cf1a212c3',
		tags: ['Vue', 'Typescript', 'TailwindCSS'],
		content: '날씨 API를 사용한 날씨정보 웹 어플리케이션 입니다.',
		link: { github: 'https://github.com/Cattamoo/weather', page: 'https://weather-cattamoo.vercel.app' },
		description: {
			personnel: '1인 프로젝트',
			description: '날씨 API를 사용해보고싶었고, API가 어떻게 동작하는지 알아보기 위해 진행하게 된 프로젝트입니다.',
			feature: {
				'현재날씨': '현재 내가 있는 지역의 날씨(기온, 날씨) 확인',
				'오늘날씨': '현재 내가 있는 지역의 시간 별 날씨 확인'
			},
			skills: {
				frontend: ['Vue', 'Typescript', 'TailwindCSS'],
				backend: [''],
				deployment: ['vercel']
			},
		}
	},
	{
		title: 'Colorful Log Maker',
		date: { start: '2023-01', end: '2023-03'},
		img: 'https://user-images.githubusercontent.com/87294942/226336432-bcbb4c36-15f5-4001-a8ab-759b625380fa.png',
		tags: ['React', 'TailwindCSS', 'Typescript'],
		content: 'console.log 를 커스터마이징할 수 있는 웹어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/colorful-log-maker', page: 'https://cattamoo.github.io/colorful-log-maker', gist: 'https://gist.github.com/Cattamoo/dc60bc06d190359a8158b304869bc35b' },
		description: {
			personnel: '1인 프로젝트',
			description: '웹브라우저에서 Console을 꾸밀 수 있다는 것을 알게되었고, \'어떻게 하면 꾸며지는 모습을 보면서 꾸밀 수 있을까?\' 를 고민하며 진행하게 된 프로젝트입니다.',
			feature: {
				'꾸미기': '콘솔 꾸미기',
				'복사': '현재까지 꾸민 콘솔에 대한 코드 복사'
			},
			skills: {
				frontend: ['React', 'Typescript', 'TailwindCSS'],
				backend: [''],
				deployment: ['github pages']
			},
		}
	},
	{
		title: 'Markdown Editor',
		date: { start: '2022-11', end: '2023-01'},
		img: 'https://user-images.githubusercontent.com/87294942/226334946-b12df126-06dc-4a6b-a210-1335927c0697.png',
		tags: ['React', 'TailwindCSS'],
		content: 'Markdown 파일을 저장/수정 할 수 있는 웹어플리케이션입니다.',
		link: { github: 'https://github.com/Cattamoo/editor', page: 'https://cattamoo.github.io/editor' },
		description: {
			personnel: '1인 프로젝트',
			description: '텍스트 에디터를 웹으로 만들어보고싶었고, \'이왕 만들거 평소 관심있던 Markdown 에디터를 만들어보자!\' 라는 생각으로 진행하게 된 프로젝트입니다.',
			feature: {
				'파일수정': 'Markdown 파일을 수정',
				'가져오기': 'Markdown 파일 가져오기',
				'저장': '현재 에디터에 입력되어있는 텍스트를 마크다운 파일로 저장'
			},
			skills: {
				frontend: ['React', 'TailwindCSS'],
				backend: [''],
				deployment: ['github pages']
			},
		}
	},
]