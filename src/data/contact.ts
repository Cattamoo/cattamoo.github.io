import { IconType } from "react-icons";
import { MdMail } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";

type ContactType = {
	type: string;
	Icon: IconType;
	content: string;
	isLink?: boolean;
}

export const contacts: ContactType[] = [
	{ type: 'email', Icon: MdMail, content: 'ouob77@kakao.com' },
	{ type: 'github', Icon: RiGithubFill, content: 'https://github.com/cattamoo', isLink: true },
];