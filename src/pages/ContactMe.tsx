import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import {BsGithub} from "react-icons/bs";
import {MdMail} from "react-icons/md";

export default function ContactMe() {
	return (
		<PageLayout>
			<Title className="text-black">ContactMe</Title>
			<div className="grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1 mt-5">
				<MdMail className="text-lg" /> 	<p>ouob77@kakao.com</p>
				<BsGithub className="text-lg" /> <p>https://github.com/cattamoo</p>
			</div>
		</PageLayout>
	);
}