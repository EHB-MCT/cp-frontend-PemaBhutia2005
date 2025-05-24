// ProjectsGrid.jsx
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
	return (
		<div className="projects-wrapper">
			<div className="projects-grid">
				{projects.map((project, index) => (
					<ProjectCard key={index} title={project.fairytale} author={project.nameStudent} imgSrc={project.imgThumbnail} />
				))}
			</div>
			<div className="center">
				<a href="">
					<button className="all-projects-button">All projects</button>
				</a>
			</div>
		</div>
	);
}
