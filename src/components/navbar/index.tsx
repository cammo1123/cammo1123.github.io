import { Link } from "@solidjs/router";
import { Component, createSignal, JSX } from "solid-js";
import { getCookie, setCookie, toTitleCase } from "../functions";

import "./style.scss";

const NavBar: Component<{ children: JSX.Element }> = (props) => {
	const [collapsed, setCollapsed] = createSignal(getCookie("collapsed") === "true");

	return (
		<div class={collapsed() ? "navbar collapsed" : "navbar showing"}>
			<NavCover />
			<nav>
				<ul>{props.children}</ul>
				<footer>
					<span id="copyright">
						Copyright (c) Cameron Youell - 2022
						<br />
						Made with SolidJS and Typescript
					</span>
					<button
						id="collapse"
						onClick={() => {
							const newCollapsed = !collapsed();
							setCookie("collapsed", newCollapsed.toString(), 365);
							setCollapsed(newCollapsed);
						}}>
						{collapsed() ? <i class="bx bxs-chevron-right"></i> : <i class="bx bxs-chevron-left"></i>}
					</button>
				</footer>
			</nav>
		</div>
	);
};

const NavCover = () => {
	return (
		<div class="active_cover" id="active_cover">
			<div class="child"></div>
			<NavItem class="hidden" id="null" iconName="bx-message" />
			<div class="child2"></div>
		</div>
	);
};

const NavItem = (props: { path?: string; name?: string; id: string; iconName: string; class?: string }) => {
	return (
		<div class={`navItem ${props.class ?? ""}`} id={props.id}>
			<li>
				<Link href={props.path ?? "/" + props.id}>
					<i class={"bx " + props.iconName}></i>
					<span>{props.name ?? toTitleCase(props.id)}</span>
				</Link>
			</li>
		</div>
	);
};

export { NavBar, NavItem };
