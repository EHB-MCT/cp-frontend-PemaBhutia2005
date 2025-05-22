import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Scene1 from "../components/fairytale/Scene1";
import Scene2 from "../components/fairytale/Scene2";
import Scene3 from "../components/fairytale/Scene3";

import "../parallax.css";
import "../App.css";

function Parallax() {
	useEffect(() => {
		document.body.classList.add("parallax-body");

		return () => {
			document.body.classList.remove("parallax-body");
		};
	}, []);

	return (
		<div>
			<Scene1 />
			<Scene2 />
			<Scene3 />
		</div>
	);
}

export default Parallax;
