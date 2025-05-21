import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/portal/Navigation";

import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router basename="/cp-frontend-PemaBhutia2005/">
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
