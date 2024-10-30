import { render } from "solid-js/web";
import { Component, lazy, Suspense } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";
import { Meta, MetaProvider } from "@solidjs/meta";

import "./index.scss";

// Lazy load components
const Home = lazy(() => import("./pages/home"));
const ACOM1001 = lazy(() => import("./pages/acom1001"));
const NotFound = lazy(() => import("./pages/lost404"));

const App: Component = () => (
	<MetaProvider>
		{/* Global meta tags */}
		<Meta name="description" content="Cameron Youell's Personal Website" />
		<Meta property="og:title" content="Cameron Youell" />
		<Meta property="og:description" content="Cameron Youell's Personal Website" />

		{/* Route setup with Suspense for lazy-loaded components */}
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Route path="/" component={Home} />
				<Route path="/acom1001" component={ACOM1001} />
				<Route path="*" component={NotFound} />
			</Suspense>
		</Router>
	</MetaProvider>
);

render(() => <App />, document.getElementById("root") as HTMLElement);
