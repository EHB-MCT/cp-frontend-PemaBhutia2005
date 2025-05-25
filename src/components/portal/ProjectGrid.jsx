import ProjectCard from "./ProjectCard";
import { Link } from "react-router";

export default function ProjectsGrid({ projects = [], limit }) {
	const displayedProjects = limit ? projects.slice(0, limit) : projects;

	return (
		<div className="projects-wrapper">
			<div className="projects-grid">
				{displayedProjects.map((project) => (
					<Link key={project.fairytale} to={`/projects/${project.fairytale.toLowerCase().replace(/\s+/g, "-")}`} className="link-no-styling">
						<ProjectCard title={project.fairytale} author={project.nameStudent} imgSrc={project.imgThumbnail || "fallback.jpg"} />
					</Link>
				))}
			</div>
			<div className="center">
				<a href="/cp-frontend-PemaBhutia2005/projects">
					<button className="all-projects-button">All projects</button>
				</a>
			</div>
		</div>
	);
}
