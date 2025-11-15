"use client";

import clsx from "clsx";
import { MouseEvent, useEffect, useMemo, useState } from "react";

type SidebarLink = {
	id: string;
	label: string;
};

interface ProgramSidebarProps {
	title?: string;
	links: SidebarLink[];
}

export default function ProgramSidebar({ title = "Quick Access", links }: ProgramSidebarProps) {
	const [activeId, setActiveId] = useState<string>(links[0]?.id ?? "");

	const sectionIds = useMemo(() => links.map((link) => link.id), [links]);

	useEffect(() => {
		if (sectionIds.length === 0 || typeof window === "undefined") return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

				if (visible[0]?.target?.id) {
					setActiveId(visible[0].target.id);
				}
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
		);

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [sectionIds]);

	const handleScroll = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
		event.preventDefault();
		const target = document.getElementById(id);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth", block: "start" });
		setActiveId(id);
	};

	if (links.length === 0) return null;

	return (
		<aside className="w-full lg:w-80 flex-shrink-0">
			<div className="sticky top-24 rounded-2xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-xl">
				<h2 className="text-xl font-bold text-corporate-navy dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-3">{title}</h2>
				<nav aria-label={title}>
					<ul className="space-y-1">
						{links.map((link) => (
							<li key={link.id}>
								<a
									href={`#${link.id}`}
									onClick={(event) => handleScroll(event, link.id)}
									className={clsx(
										"flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
										"hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-5",
										activeId === link.id
											? "bg-blue-50 dark:bg-white/10 text-corporate-blue border-l-4 border-corporate-blue"
											: "text-corporate-navy/70 dark:text-white/60 border-l-4 border-transparent"
									)}
								>
									<span
										className={clsx(
											"h-2 w-2 rounded-full transition-all",
											activeId === link.id ? "bg-corporate-blue scale-125" : "bg-gray-400 dark:bg-white/30"
										)}
									/>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
}
