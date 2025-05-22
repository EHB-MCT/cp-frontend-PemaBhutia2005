import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";

import portal from "../../assets/portal.png";
import doorPortal from "../../assets/door-portal.png";

export default function Scene3() {
	const [hasHovered, setHasHovered] = useState(false);

	const handleHover = () => {
		if (!hasHovered) {
			setHasHovered(true);
		}
	};

	return (
		<div className="scene-container">
			<p className="scene-text scene3-text">In haar nieuwe huis ontdekt ze een mysterieuze deur.</p>

			<img src={doorPortal} className="scene2-house door-portal" alt="Door portal" />
			<img src={portal} className="portal" alt="Glowing portal" onMouseEnter={handleHover} />

			{hasHovered && <p className="scene-text scene3-text2 portal-hover-text">Het is een portaal naar een andere wereld!</p>}
		</div>
	);
}
