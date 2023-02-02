import Head from "next/head";
import metadata from "../../data/metadata";

type Props = {
	title: string;
}

export default function Seo({ title }: Props) {
	return (
		<Head>
			<title>{ `${metadata.title} - ${title}` }</title>
		</Head>
	);
}