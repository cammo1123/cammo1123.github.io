import "./style.scss";
import { Component } from "react";

interface Repo {
	full_name: string;
	html_url: string;
	description: string;
	forks_count: number;
	stargazers_count: number;
	private: boolean;
}

interface Props {
}

interface State {
	repos: Repo[];
}
  

export class GitHubSearch extends Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state =  {
			repos: []
		};
	}

	getUserRepo(username: string) {
		return fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => response.json())
			.then((response) => {
				return response;
			});
	}

	override async componentDidMount() {
		let repos: Repo[] = await this.getUserRepo("cammo1123");
		this.setState({ repos: repos });
	}

	async handleSubmit(e: any) {
		e.preventDefault();
		let repos: Repo[] = await this.getUserRepo(e.target[0].value);
		this.setState({ repos: repos });
	}

	override render() {
		let repos: JSX.Element[] = [];

		this.state.repos.forEach(repo => {
			if (repo.private) return
			repos.push(
				<GithubCard name={repo.full_name} url={repo.html_url} forks={repo.forks_count} stars={repo.stargazers_count}>
					{repo.description}
				</GithubCard>
			);
		});

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

export function GithubCard(props: { name: string; url: string; children: any | undefined, forks: number, stars: number }) {
	return (
		<a key={props.name} href={props.url} target="_blank" rel="noreferrer" className="githubCard">
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
