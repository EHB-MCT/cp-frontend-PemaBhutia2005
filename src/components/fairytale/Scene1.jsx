import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import beldam from "../../assets/coraline-beldam.png";
import house from "../../assets/coraline-house.png";
import twigs from "../../assets/bg-twigs.png";

export default function Scene1() {
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

	// Twigs
	const twigScale = useTransform(smoothScroll, [0, 1], [1, 1.7]);

	// House
	const houseY = useTransform(smoothScroll, [0, 1], ["0%", "5%"]);
	const houseScale = useTransform(smoothScroll, [0, 1], [0.8, 1.1]);

	// Beldam
	const beldamY = useTransform(smoothScroll, [0, 1], ["5%", "-10%"]);
	const beldamScale = useTransform(smoothScroll, [0, 1], [0, 1]);

	return (
		<div className="scene-container" ref={ref}>
			<h2 className="scene-title">Coraline</h2>

			<motion.img
				src={twigs}
				className="twigs"
				alt="Twigs frame"
				style={{
					scale: twigScale,
					transformOrigin: "center",
					zIndex: 3,
				}}
			/>

			<motion.img
				src={beldam}
				className="beldam"
				alt="Beldam shadow"
				style={{
					y: beldamY,
					scale: beldamScale,
					zIndex: 1,
				}}
			/>

			<motion.img
				src={house}
				className="house"
				alt="Haunted house"
				style={{
					y: houseY,
					scale: houseScale,
					zIndex: 2,
				}}
			/>
		</div>
	);
}
