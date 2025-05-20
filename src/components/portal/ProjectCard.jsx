export default function ProjectCard({ title, author, imgSrc }) {
	return (
		<div className="project-card">
			<img src={imgSrc} alt={title} className="project-image" />
			<div className="project-title">{title}</div>
			<div className="project-author">{author}</div>
		</div>
	);
}
