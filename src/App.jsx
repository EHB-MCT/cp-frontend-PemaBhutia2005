import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { Navigation } from "./components/portal/Navigation";
import Home from "./pages/Home";
import Parallax from "./pages/Parallax";

import { AnimatePresence, motion } from "framer-motion";

function NavWrapper() {
	const location = useLocation();
	const [hovered, setHovered] = useState(false);

	const isParallax = location.pathname === "/parallax";

	if (!isParallax) return <Navigation />;

	return (
		<div
			style={{
				height: hovered ? "auto" : "50px",
				zIndex: 9999,
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<AnimatePresence>
				{hovered && (
					<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
						<Navigation />
					</motion.div>
				)}
			</AnimatePresence>
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
			</Routes>
		</Router>
	);
}

export default App;
