import coraline from "../../assets/coraline.png";
import coralineCreepy from "../../assets/coraline-creepy.png";

export default function Scene5() {
	return (
		<div className="scene-container">
			<p className="scene-text scene5-text">Ze moet haar ogen laten vervangen door knopen.</p>

			<img src={coraline} alt="Coraline" className="scene5-coraline" />
			<img src={coralineCreepy} alt="Coraline creepy" className="scene5-coraline creepy" />
		</div>
	);
}
