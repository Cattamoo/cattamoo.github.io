import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import categories from "../../data/categories";

export default function Navbar() {
	const pathname = usePathname() || '';
	return (
		<nav className="nav">
			{
				categories.map((item, index) => <Link key={index} className={`link ${ pathname === item.pathname ? 'active' : '' }`} href={item.pathname}>{item.title}</Link>)
			}
		</nav>
	);
}