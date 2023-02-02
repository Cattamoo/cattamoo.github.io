import React from 'react';
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	createdAt: string;
	pathname: string;
}

export default function PostItem({ title, description, createdAt, pathname }: Props) {
	return (
		<Link className="flex justify-between" href={`/posts/${pathname}`}>
			<div>
				<div className="text-xl">{title}</div>
				<div className="text-zinc-500">{description}</div>
			</div>
			<div>{createdAt}</div>
		</Link>
	);
}