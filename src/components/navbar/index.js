import React, { Component } from "react";
import { toTitleCase } from "../functions";

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

export function navItem(id, iconName, Link, name = toTitleCase(id), path = "/" + id) {
	return (
		<div className="navItem" id={id}>
			<li>
				<Link to={path}>
					<i className={"bx bx-" + iconName}></i>
					<span>{name}</span>
				</Link>
			</li>
		</div>
	);
}
