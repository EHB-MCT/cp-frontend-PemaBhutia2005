import { useEffect, useState } from "react";
import "../App.css";
import ProjectsGrid from "../components/portal/ProjectGrid";
import Footer from "../components/portal/Footer";

function Home() {
	const [fairytales, setFairytales] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
			.then((res) => res.json())
			.then((data) => setFairytales(data))
			.catch((err) => {
				console.error("Failed to load fairytales", err);
				setError(err.message);
			});
	}, []);

	if (error) return <p>Error loading data: {error}</p>;
	if (!fairytales) return <p>Loading...</p>;

	return (
		<main>
			<h1 className="bungee-regular">In the spotlight</h1>
			<ProjectsGrid projects={fairytales} />
			<Footer />
		</main>
	);
}

export default Home;
