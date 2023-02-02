import {allPosts, Post as PostType} from "contentlayer/generated";
import PageLayout from "../../components/layout/PageLayout";
import Markdown from "../../components/common/Markdown";
import {GetStaticPaths} from "next";

type Props = {
	post: PostType;
}

export default function Post({ post }: Props) {
	return (
		<PageLayout title={ post.title }>
			<div className="self-center flex flex-col w-full max-w-[30rem] text-center p-3 mb-2 border-b-2">
				<h2 className="text-3xl font-bold">{ post.title }</h2>
				<p>{ post.createdAt }</p>
			</div>
			<Markdown text={post ? post.body.html : ''} />
		</PageLayout>
	);
}

export const getStaticPaths = async () => {
	const paths = allPosts.map((post) => ({ params: { pathname: post._raw.flattenedPath } }));
	return {
		paths,
		fallback: 'blocking' //indicates the type of fallback
	}
}

export const getStaticProps = async ({ params }: { params: { pathname: string } }) => {
	const post = allPosts.find((p) => p._raw.flattenedPath === params.pathname);
	return {
		props: {
			post,
		},
	};
};