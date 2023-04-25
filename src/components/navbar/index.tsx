import { Link } from "@solidjs/router";
import { Component, createSignal, JSX } from "solid-js";
import { getCookie, setCookie, toTitleCase } from "../functions";

import "./style.scss";
const [navShowing, setNavShowing] = createSignal(getCookie("navShowing") === "true");

const NavBar: Component<{ children: JSX.Element }> = (props) => {
	const onNavClick = () => {
		const newCollapsed = !navShowing();
		setCookie("navShowing", newCollapsed.toString(), 365);
		setNavShowing(newCollapsed);
	};

	return (
		<div class={`navbar ${navShowing() ? "showing" : "collapsed"}`}>
			<NavCover />
			<nav>
				<ul>{props.children}</ul>
				<footer>
					<span id="copyright">
						Copyright (c) Cameron Youell - 2023
						<br />
						Made with SolidJS and Typescript
					</span>
					<button aria-label="collapse" id="collapse" onClick={onNavClick}>
						<i class={`bx bxs-chevron-${navShowing() ? "left" : "right"}`}></i>
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
			<ul>
				<NavItem class="hidden" id="null" iconName="bx-message" />
			</ul>
			<div class="child2"></div>
		</div>
	);
};

const NavItem = (props: { path?: string; name?: string; id: string; iconName: string; class?: string }) => {
	const name = props.name || toTitleCase(props.id);

	return (
		<li class={`navItem ${props.class ?? ""}`} id={props.id}>
			<div class="item_content">
				<Link aria-label={name} href={props.path ?? "/" + props.id}>
					<i class={"bx " + props.iconName}></i>
					<span>{name}</span>
				</Link>
			</div>
			{() => {
				if (collapsed()) {
					return <div class="onHover">{name}</div>;
				} else {
					return <></>;
				}
			}}
		</li>
	);
};

export { NavBar, NavItem };
