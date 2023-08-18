import PageLayout from "../components/layouts/PageLayout";
import Title from "../components/commons/Title";
import {contacts} from "../data/contact";

export default function ContactMe() {
	return (
		<PageLayout>
			<Title className="text-brandDark">ContactMe</Title>
			<ul className="w-80 mt-5">
				{
					contacts.map(({ Icon, type, content, isLink }) => (
						<li key={type} className="flex gap-2 items-center">
							<Icon className="text-lg" />
							{
								isLink
									? <a href={content} target="_blank" rel="noreferrer">{ content }</a>
									: <p>{ content }</p>
							}
						</li>
					))
				}
			</ul>
		</PageLayout>
	);
}