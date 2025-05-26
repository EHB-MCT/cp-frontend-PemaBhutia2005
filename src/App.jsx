import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/portal/Navigation";
import Home from "./pages/Home";
import Parallax from "./pages/Parallax";
import Projects from "./pages/Projects";
import Makingof from "./pages/MakingOf";

import { AnimatePresence, motion } from "framer-motion";

function NavWrapper() {
	const location = useLocation();
	const [hovered, setHovered] = useState(false);

	const isParallax = location.pathname === "/parallax";

	if (!isParallax) return <Navigation />;

	return (
		<div
			style={{
				height: hovered ? "auto" : "30px",
				zIndex: 9999,
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{hovered && <Navigation />}
		</div>
	);
}

function App() {
	return (
		<Router basename="/cp-frontend-PemaBhutia2005/">
			<NavWrapper />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/parallax" element={<Parallax />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:url" element={<Makingof />} />
			</Routes>
		</Router>
	);
}

export default App;
