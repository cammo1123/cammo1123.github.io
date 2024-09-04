import { render } from "solid-js/web";
import { Component, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { Meta, MetaProvider } from "@solidjs/meta";

import "./index.scss";

const Home = lazy(() => import("./pages/home"));

const App: Component = () => (
	<>
		<MetaProvider>
			<Meta name="description" content="Cameron Youell's Personal website" />
			<Meta property="og:title" content="Cameron Youell" />
			<Meta property="og:description" content="Cameron Youell's Personal website" />
		</MetaProvider>
		<Router>
			<Route path="/" component={Home} />
		</Router>
	</>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
