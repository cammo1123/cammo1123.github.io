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

	const mouseMove = (e: MouseEvent) => {
		let cover = document.getElementById("active_cover");
		if (!cover) return;

		let rect = cover.getBoundingClientRect();
		if (rect.top < e.clientY && e.clientY < rect.bottom && rect.left < e.clientX && e.clientX < rect.right) {
			cover.classList.add("hovering");
		} else {
			cover.classList.remove("hovering");
		}
	};

	document.addEventListener("mousemove", mouseMove);
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
			<ul>
				<NavItem class="hidden" id="null" iconName="bx-message" />
			</ul>
		</div>
	);
};

const NavItem = (props: { path?: string; name?: string; id: string; iconName: string; class?: string }) => {
	const itemName = props.name || toTitleCase(props.id);
	const itemClass = props.class || "";

	return (
		<li class={`navItem ${itemClass}`} id={props.id}>
			<div class="item_content">
				<Link aria-label={itemName} href={props.path ?? "/" + props.id}>
					<i class={"bx " + props.iconName}></i>
					<span>{itemName}</span>
				</Link>
			</div>
			<div class="onHover">{itemName}</div>
		</li>
	);
};

export { NavBar, NavItem };
