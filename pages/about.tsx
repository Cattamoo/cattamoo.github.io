import {useEffect, useState} from "react";
import PageLayout from "../components/layout/PageLayout";
import Markdown from "../components/common/Markdown";

export default function About() {
	const [ about, setAbout ] = useState('');
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/Cattamoo/Cattamoo/main/README.md')
			.then(res => res.text())
			.then(setAbout)
		;
	}, []);
	return (
		<PageLayout>
			<Markdown text={about} />
		</PageLayout>
	);
}