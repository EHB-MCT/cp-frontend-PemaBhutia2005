import { useState } from "react";
import doors from "../../assets/doors.png";

export default function Scene6() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		const moveX = ((clientX - centerX) / centerX) * 20; // max 10px left/right
		const moveY = ((clientY - centerY) / centerY) * 20; // max 10px up/down

		setPosition({ x: moveX, y: moveY });
	};

	return (
		<div className="scene-container" onMouseMove={handleMouseMove}>
			<p className="scene-text scene6-text">
				Coraline probeert te ontsnappen maar de Andere Moeder heeft haar ouders gevangen. <br />
				Waar zijn ze?
			</p>

			<img
				src={doors}
				alt="Doors"
				className="scene6-doors"
				style={{
					transform: `translate(${position.x}px, ${position.y}px)`,
					transition: "transform 0.1s ease-out",
				}}
			/>
		</div>
	);
}
