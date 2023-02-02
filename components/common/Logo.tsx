import React from 'react';
import Link from "next/link";

export default function Logo() {
	return (
		<Link className="text-lg font-bold bg-white py-1 px-2 group" href="/">
			<span className="text-red-300 duration-200 group-hover:text-zinc-300">C</span>
			<span className="text-orange-300 duration-200 group-hover:text-zinc-300">A</span>
			<span className="text-yellow-300 duration-200 group-hover:text-zinc-300">T</span>
			<span className="text-green-300 duration-200 group-hover:text-zinc-300">T</span>
			<span className="text-blue-300 duration-200 group-hover:text-zinc-300">A</span>
			<span className="text-indigo-300 duration-200 group-hover:text-zinc-300">M</span>
			<span className="text-violet-300 duration-200 group-hover:text-zinc-300">OO</span>
		</Link>
	);
}