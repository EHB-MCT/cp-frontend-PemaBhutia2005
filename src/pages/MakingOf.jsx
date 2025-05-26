import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/portal/Footer";

import "../App.css";

function Makingof() {
	const { url } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
			.then((res) => res.json())
			.then((data) => {
				const found = data.find((item) => item.fairytale.toLowerCase().replace(/\s+/g, "-") === url);
				setProject(found);
			});
	}, [url]);

	if (!project) return <p style={{ padding: "20px" }}>Loading...</p>;

	console.log("project:", project);

	return (
		<main>
			<h2 className="bungee-regular">MAKING-OF — {project.fairytale.toUpperCase()}</h2>
			<img src={project.imgBanner} alt="Banner" style={{ width: "100%", borderRadius: "12px" }} />

			<div className="flex" style={{ marginTop: "30px", gap: "20px" }}>
				<div style={{ flex: 1 }}>
					<h3 className="bungee-regular">EXPLAINER VIDEO</h3>
					<video width="100%">
						<source src={project.videoExplainer} type="video/mp4" />{" "}
					</video>
				</div>

				<div style={{ flex: 1 }}>
					<h3 className="bungee-regular">DESCRIPTION</h3>
					<p className="footer-description">{project.description}</p>
					{project.fairytaleLink && (
						<a href={project.fairytaleLink} target="_blank">
							<button className="all-projects-button" style={{ marginTop: "20px" }}>
								VISIT WEBSITE
							</button>
						</a>
					)}
				</div>
			</div>

			<Footer />
		</main>
	);
}

export default Makingof;
