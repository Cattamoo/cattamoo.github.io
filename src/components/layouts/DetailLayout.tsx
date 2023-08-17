import React from 'react';

type Props = {
	onClose: () => void;
	title: React.ReactNode;
	children: React.ReactNode;
}

export default function DetailLayout({ onClose, title, children }: Props) {
	return (
		<div className="absolute z-[5000] bg-white w-full h-full sm:w-2/3 sm:h-2/3 sm:rounded-lg border-[1px] border-zinc-50">
			<header className="bg-brand p-2 flex justify-between border-b-2 border-brandDark">
				<div className="flex items-center gap-2">
					{ title }
				</div>
				<button className="bg-brandDark/75 px-2 py-0.1 rounded text-white hover:bg-brandDark" onClick={onClose}>닫기</button>
			</header>
			{ children }
		</div>
	);
}