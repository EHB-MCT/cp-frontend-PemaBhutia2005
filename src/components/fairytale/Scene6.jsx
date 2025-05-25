import { useState, useEffect, useRef } from "react";
import doors from "../../assets/doors.png";
import parents from "../../assets/parents.png";
import beldamShadow from "../../assets/beldam-shadow.png";

export default function Scene6() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [beldamVisible, setBeldamVisible] = useState(false);
	const containerRef = useRef(null);

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		const moveX = ((clientX - centerX) / centerX) * 20;
		const moveY = ((clientY - centerY) / centerY) * 20;

		setPosition({ x: moveX, y: moveY });
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setBeldamVisible(true);
					observer.disconnect(); // triggert maar 1 keer
				}
			},
			{ threshold: 0.5 } // start wnr 50% vd scene visible is
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className="scene-container" onMouseMove={handleMouseMove} ref={containerRef}>
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

			<img src={parents} alt="Parents" className="parents" />

			<img
				src={beldamShadow}
				alt="Shadow of the Beldam"
				className="beldam-shadow"
				style={{
					transform: `translate(${position.x}px, ${position.y}px)`,
					opacity: beldamVisible ? "90%" : "5%",
					transition: "opacity 7s ease-in-out, transform 0.1s ease-out",
				}}
			/>
		</div>
	);
}
