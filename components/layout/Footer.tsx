import React from 'react';

export default function Footer() {
	return (
		<footer className="footer">
			ⓒ { new Date().getFullYear() } <a className="font-semibold hover:text-brand" href="https://github.com/cattamoo">Cattamoo</a>.
		</footer>
	);
}