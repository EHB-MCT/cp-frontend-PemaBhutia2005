import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [], limit }) {
	const displayedProjects = limit ? projects.slice(0, limit) : projects;

	return (
		<div className="projects-wrapper">
			<div className="projects-grid">
				{displayedProjects.map((project, index) => (
					<ProjectCard key={index} title={project.fairytale} author={project.nameStudent} imgSrc={project.imgThumbnail || "fallback.jpg"} />
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
