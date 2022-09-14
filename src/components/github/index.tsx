import { Component, createSignal, For, onMount } from "solid-js";
import "./style.scss";

const GitHubSearch: Component = () => {
	const [search, setSearch] = createSignal("cammo1123");
	const [status, setStatus] = createSignal("No results");
	const [repos, setRepos] = createSignal<
		{
			full_name: string;
			html_url: string;
			description: string;
			forks_count: number;
			stargazers_count: number;
			private: boolean;
		}[]
	>();

	const getUserRepo = async (username: string) => {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);
		const data = await response.json();
		const message: string = data.message;

		if (data.message === "Not Found") {
			setRepos([]);
			setStatus("User not found");
			return;
		} else if (message.includes("API rate limit exceeded")) {
			setRepos([]);
			setStatus("API rate limit exceeded");
			return;
		}

		setRepos(data);
	};

	onMount(async () => {
		await getUserRepo(search());
	});

	return (
		<div class="githubSearch">
			<header>
				<h1>Repositories for</h1>
				<form
					onSubmit={async (e) => {
						setStatus("Loading...");
						e.preventDefault();
						await getUserRepo(search());
					}}>
					<input
						type="text"
						placeholder="username"
						value={search()}
						onChange={(e) => setSearch(e.currentTarget.value)}
					/>
				</form>
			</header>
			<div class="githubGrid">
				<For each={repos()} fallback={<div class="loading">{status()}</div>}>
					{(repo) => (
						<GithubCard
							name={repo.full_name}
							url={repo.html_url}
							forks={repo.forks_count}
							stars={repo.stargazers_count}
							description={repo.description}
						/>
					)}
				</For>
			</div>
		</div>
	);
};

const GithubCard = (props: { name?: string; url: string; description?: string; forks?: number; stars?: number }) => {
	return (
		<a href={props.url} target="_blank" rel="noreferrer" class="githubCard">
			<h1>{props.name}</h1>
			<p>{props.description ?? ""}</p>
			<span>
				<i class="bx bx-git-repo-forked"></i>
				{props.forks ?? 0}
				<i class="bx bx-star"></i>
				{props.stars ?? 0}
			</span>
		</a>
	);
};

export { GitHubSearch, GithubCard };
