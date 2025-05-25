import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import portrait from "../../assets/portrait1.png";
import portrait2 from "../../assets/portrait2.png";
import cake from "../../assets/cake.png";

export default function Scene4() {
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

	const portraitY = useTransform(smoothScroll, [0, 1], ["50%", "-70%"]);

	const cakeY = useTransform(smoothScroll, [0.5, 1], ["10%", "-50%"]);

	return (
		<div className="scene-container">
			<p className="scene-text scene4-text">In deze andere wereld lijkt alles perfect.</p>

			<div className="scene4-portraits">
				<motion.img src={portrait} alt="Portrait" className="scene4-portrait" style={{ y: portraitY }} />
				<motion.img src={cake} alt="Cake" className="scene4-portrait cake" style={{ y: cakeY }} />
				<motion.img src={portrait2} alt="Portrait" className="scene4-portrait" style={{ y: portraitY }} />
			</div>

			<p className="scene-text scene4-text2">
				Coraline is zo blij dat ze hier voor eeuwig wilt wonen.
				<br />
				De "Andere Moeder" gaat akkoord, op één voorwaarde...
			</p>
		</div>
	);
}
