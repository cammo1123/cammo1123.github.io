import "./style.scss";
import React, { Component } from "react";

export class GitHubSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getUserRepo(username) {
		return fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => response.json())
			.then((response) => {
				return response;
			});
	}

	async componentDidMount() {
		let repos = await this.getUserRepo("cammo1123");
		this.setState({ repos: repos });
	}

	async handleSubmit(e) {
		e.preventDefault();
		let repos = await this.getUserRepo(e.target[0].value);
		this.setState({ repos: repos });
	}

	render() {
		let repos = [];

		if (this.state.repos) {
			for (let i = 0; i < this.state.repos.length; i++) {
				let repo = this.state.repos[i];
				if (repo.private) break;
				repos.push(
					<GithubCard name={repo.full_name} url={repo.html_url} forks={repo.forks_count} stars={repo.stargazers_count}>
						{repo.description}
					</GithubCard>
				);
			}
		}

		return (
			<div className="githubSearch">
				<header>
					<h1>Repositories for</h1>
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<input type="text" placeholder="username" defaultValue="cammo1123" />
					</form>
				</header>
				<div className="githubGrid">{repos}</div>
			</div>
		);
	}
}

export function GithubCard(props) {
	return (
		<a key={props.name} alt={props.name} href={props.url} target="_blank" rel="noreferrer" className="githubCard">
			<h1>{props.name}</h1>
			<p>{props.children}</p>
			<span>
				<i className="bx bx-git-repo-forked"></i>
				{props.forks}
				<i className="bx bx-star"></i>
				{props.stars}
			</span>
		</a>
	);
}
