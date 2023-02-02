import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const menu = [
	{ pathname: '/', title: 'Home' },
	{ pathname: '/about', title: 'About' }
];

export default function Navbar() {
	const pathname = usePathname() || '';
	return (
		<nav className="nav">
			{
				menu.map((item, index) => <Link key={index} className={`link ${ pathname === item.pathname ? 'active' : '' }`} href={item.pathname}>{item.title}</Link>)
			}
		</nav>
	);
}