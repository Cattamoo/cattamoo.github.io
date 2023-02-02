import Head from "next/head";
import metadata from "../../data/metadata";

type Props = {
	title: string;
}

export default function Seo({ title }: Props) {
	const meta = {
		...metadata
	}
	return (
		<Head>
			<title>{ `${meta.title} - ${title}` }</title>
			<meta content={meta.description} name="description" />
			<meta content={meta.author} property="og:site_name" />
		</Head>
	);
}