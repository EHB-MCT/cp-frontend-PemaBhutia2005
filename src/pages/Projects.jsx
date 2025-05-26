import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectsGrid from "../components/portal/ProjectGrid";
import Footer from "../components/portal/Footer";

function Projects() {
	const [fairytales, setFairytales] = useState([]);
	const location = useLocation();

	// get search value van URL
	const queryParams = new URLSearchParams(location.search);
	const searchQuery = queryParams.get("search")?.toLowerCase() || "";

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
			.then((res) => res.json())
			.then((data) => setFairytales(data))
			.catch((err) => console.error("Failed to load fairytales", err));
	}, []);

	const filteredFairytales = fairytales.filter((f) => f.fairytale.toLowerCase().includes(searchQuery));

	return (
		<main>
			<h1 className="bungee-regular">All Projects</h1>
			<ProjectsGrid projects={filteredFairytales} />
			<Footer />
		</main>
	);
}

export default Projects;
