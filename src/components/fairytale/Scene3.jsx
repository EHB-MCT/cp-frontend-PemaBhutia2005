import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import portal from "../../assets/portal.png";
import doorPortal from "../../assets/door-portal.png";

export default function Scene3() {
	return (
		<div className="scene-container">
			<p className="scene-text scene3-text">In haar nieuwe huis ontdekt ze een mysterieuze deur.</p>

			<img src={doorPortal} className="scene2-house door-portal" alt="Door portal" />
			<img src={portal} className="portal"></img>
		</div>
	);
}
