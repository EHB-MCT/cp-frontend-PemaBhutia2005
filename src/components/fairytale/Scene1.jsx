import beldam from "../../assets/coraline-beldam.png";
import house from "../../assets/coraline-house.png";
import twigs from "../../assets/bg-twigs.png";

export default function Scene1() {
	return (
		<div className="scene-container">
			<h2 className="scene-title">Coraline</h2>
			<img src={twigs} className="twigs" alt="Twigs frame" />
			<img src={beldam} className="beldam" alt="Beldam shadow" />
			<img src={house} className="house" alt="Haunted house" />
		</div>
	);
}
