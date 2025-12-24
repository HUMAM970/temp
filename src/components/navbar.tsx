import { useState } from "react";
// import { cn } from "../utils";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "#" },
		{ name: "Service", href: "#" },
		{ name: "Contact", href: "#" },
	];

	let mobileMenuClasses = `
		sm:hidden absolute top-16 left-0
		w-full bg-white border-b shadow-lg
		transition-all duration-300 z-50
	`;

	mobileMenuClasses += isOpen
		? "opacity-100 visible translate-y-0"
		: "opacity-0 invisible -translate-y-4 pointer-events-none";

	return (
		<nav className="relative w-full border-b border-gray-100 bg-[#ff0]">
			<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
				<a href="/" className="text-xl font-bold text-gray-800">
					BRAND
				</a>

				{/* Desktop Menu */}
				<ul className="hidden sm:flex gap-8 [&_a:hover]:text-sky-500 [&_a:hover]:transition-colors">
					{navLinks.map((link) => (
						<li>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="sm:hidden p-2 text-gray-600 focus:outline-none"
				>
					<span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
				</button>
			</div>

			{/* Mobile Menu */}
			<div className={mobileMenuClasses}>
				<ul
					className="
					flex flex-col p-4
					[&_a]:block
					[&_a]:py-4
					[&_a]:px-4
					[&_a]:text-gray-700
					[&_a]:hover:bg-gray-50
					[&_a]:rounded-lg
					"
				>
					{navLinks.map((link) => (
						<li key={link.name}>
							<a href={link.href} onClick={() => setIsOpen(false)}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
