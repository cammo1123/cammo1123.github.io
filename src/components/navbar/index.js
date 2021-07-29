import React, { Component } from "react";
import { LINK } from "../..";
import { setCollapsed, setDark, toTitleCase } from "../functions";

import "./style.css";

export class NavCover extends Component {
	render() {
		return (
			<div className="cover">
				<div id="top_fill"></div>
				<div className="active_cover" id="active_cover">
					<div className="child"></div>
					<div className="child2"></div>
				</div>
				<div id="bottom_fill"></div>
			</div>
		);
	}
}

export function NavBar(props) {
	return (
		<nav>
			<NavCover />
			<ul>{props.children}</ul>
			<button id="collapse" onClick={setCollapsed}>
				<i className={"bx bx-chevron-" + props.arrowDir}></i>
			</button>
			<span id="copyright">
				Copyright (c) Cameron Youell
				<br />
				2021, All Rights Reserved
			</span>
			<button id="adjust" onClick={setDark}>
				<i className="bx bx-adjust"></i>
			</button>
		</nav>
	);
}

export function NavItem(props) {
	let name, path;

	path = props.path === undefined ? "/" + props.id : props.path;
	name = props.name === undefined ? toTitleCase(props.id) : props.name;

	return (
		<div className="navItem" id={props.id}>
			<li>
				<LINK to={path}>
					<i className={"bx bx-" + props.iconName}></i>
					<span>{name}</span>
				</LINK>
			</li>
		</div>
	);
}
