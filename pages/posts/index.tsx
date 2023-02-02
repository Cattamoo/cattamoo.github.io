import React from 'react';
import PageLayout from "../../components/layout/PageLayout";
import PostItem from "../../components/PostItem";
import {allPosts, Post} from "contentlayer/generated";

type Props = {
	posts: Post[];
}

export default function Posts({ posts }: Props) {
	return (
		<PageLayout title="Posts" hideTitle={false}>
			<div className="flex flex-col gap-2 p-2">
				{
					posts.map((post) => <PostItem key={post._id} title={post.title} description={post.description} createdAt={post.createdAt} pathname={post._raw.flattenedPath} />)
				}
			</div>
		</PageLayout>
	);
}

export const getStaticProps = async () => {
	const posts: Post[] = allPosts.sort(
		(a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
	);
	return {
		props: { posts }
	};
}