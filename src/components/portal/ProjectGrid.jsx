import ProjectCard from "./ProjectCard";

import roodkapje from "../../assets/roodkapje.jpg";
import sneeuwwitje from "../../assets/sneeuwwitje.png";
import wolfGeitjes from "../../assets/wolfGeitjes.png";
import hansGrietje from "../../assets/hansGrietje.jpg";

const projects = [
	{
		title: "ROODKAPJE",
		author: "Fleur Van De Ville",
		imgSrc: roodkapje,
	},
	{
		title: "HANS EN GRIETJE",
		author: "Arno Baeck",
		imgSrc: hansGrietje,
	},
	{
		title: "DE WOLF EN DE 7 GEITJES",
		author: "Sam Hoeterickx",
		imgSrc: wolfGeitjes,
	},
	{
		title: "SNEEUWWITJE",
		author: "Matteo Giamberresi",
		imgSrc: sneeuwwitje,
	},
];

export default function ProjectsGrid() {
	return (
		<div className="projects-wrapper">
			<div className="projects-grid">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}
