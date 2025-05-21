import { useState } from "react";
import "../App.css";
import ProjectsGrid from "../components/portal/ProjectGrid";
import Footer from "../components/portal/Footer";

function Home() {
	const [count, setCount] = useState(0);

	return (
		<>
			<main>
				<h1 className="bungee-regular">In the spotlight</h1>
				<ProjectsGrid />
				<Footer />
			</main>
		</>
	);
}

export default Home;
