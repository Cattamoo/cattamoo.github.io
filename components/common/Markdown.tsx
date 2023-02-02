import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
	text: string;
}

export default function Markdown({ text }: Props) {
	return (
		<div className="markdown">
			<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{ text && text.replaceAll('\\n', '\n') }
			</ReactMarkdown>
		</div>
	);
}