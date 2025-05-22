import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import car from "../../assets/car.png";
import coralineArriving from "../../assets/coraline-arriving.png";
import father from "../../assets/father.png";
import houseArriving from "../../assets/beige.png";

export default function Scene2() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		mass: 1,
	});

	const coralineX = useTransform(smoothScroll, [0, 1], ["-10%", "20%"]);

	const fatherY = useTransform(smoothScroll, [0, 1], ["0%", "50%"]);
	const fatherScale = useTransform(smoothScroll, [0, 1], [1, 1.5]);

	const carX = useTransform(smoothScroll, [0, 1], ["20%", "-10%"]);
	const carY = useTransform(smoothScroll, [0, 1], ["0%", "-10%"]);

	return (
		<div className="scene-container" ref={ref}>
			<p className="scene-text scene2-text">
				Coraline verhuist naar een nieuw dorp, <br></br>maar voelt zich zo eenzaam en verwaarloosd.
			</p>
			<img src={houseArriving} alt="House" className="scene2-house" />

			<motion.img src={coralineArriving} alt="Coraline" className="scene2-coraline" style={{ x: coralineX }} />

			<motion.img src={father} alt="Father" className="scene2-father" style={{ y: fatherY, scale: fatherScale }} />

			<motion.img src={car} alt="Car" className="scene2-car" style={{ x: carX, y: carY }} />
		</div>
	);
}
