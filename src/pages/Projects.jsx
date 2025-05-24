import { useEffect, useState } from "react";
import ProjectsGrid from "../components/portal/ProjectGrid";
import Footer from "../components/portal/Footer";

function Projects() {
	const [fairytales, setFairytales] = useState([]);

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
			.then((res) => res.json())
			.then((data) => setFairytales(data))
			.catch((err) => console.error("Failed to load fairytales", err));
	}, []);

	return (
		<main>
			<h1 className="bungee-regular">All Projects</h1>
			<ProjectsGrid projects={fairytales} />
			<Footer />
		</main>
	);
}

export default Projects;
