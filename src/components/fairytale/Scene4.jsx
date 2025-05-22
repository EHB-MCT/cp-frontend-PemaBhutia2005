import React from "react";

import portrait from "../../assets/portrait1.png";
import portrait2 from "../../assets/portrait2.png";
import cake from "../../assets/cake.png";

export default function Scene4() {
	return (
		<div className="scene-container">
			<p className="scene-text scene4-text">In deze andere wereld lijkt alles perfect.</p>

			<div className="scene4-portraits">
				<img src={portrait} alt="Portrait" className="scene4-portrait" />
				<img src={cake} alt="Cake" className="scene4-portrait" />
				<img src={portrait2} alt="Portrait" className="scene4-portrait" />
			</div>
		</div>
	);
}
