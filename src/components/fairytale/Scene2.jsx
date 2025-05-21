import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import car from "../../assets/car.png";
import coralineArriving from "../../assets/coraline-arriving.png";
import father from "../../assets/father.png";
import houseArriving from "../../assets/beige.png";

export default function Scene2() {
	return (
		<div className="scene-container">
			<motion.img src={houseArriving} alt="House" className="scene2-house" />

			<motion.img src={coralineArriving} alt="Coraline" className="scene2-coraline" initial={{ x: 0 }} animate={{ x: 50 }} transition={{ duration: 0.5, ease: "easeOut" }} />

			<motion.img src={father} alt="Father" className="scene2-father" initial={{ y: 0 }} animate={{ y: 30 }} transition={{ duration: 0.5, ease: "easeOut" }} />

			<motion.img src={car} alt="Car" className="scene2-car" initial={{ x: 0, y: 0 }} animate={{ x: -60, y: -20 }} transition={{ duration: 0.5, ease: "easeOut" }} />
		</div>
	);
}
