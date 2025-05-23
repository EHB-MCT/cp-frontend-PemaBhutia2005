import endScene from "../../assets/end.png";

export default function Scene7() {
	return (
		<div className="scene-container">
			<p className="scene-text scene7-text">
				Coraline heeft haar ouders bevrijd en de Andere Moeder verslagen. <br />
				Ze leert dat haar echte wereld, met al haar gebreken, de enige plek is waar ze echt thuis hoort.
			</p>

			<img src={endScene} alt="End Scene" className="end-scene" />
		</div>
	);
}
