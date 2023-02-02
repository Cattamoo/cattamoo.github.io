import React from 'react';
import Logo from "../common/Logo";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="header">
			<Logo />
			<Navbar />
		</header>
	);
}