import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Scene1 from "../components/fairytale/Scene1";
import Scene2 from "../components/fairytale/Scene2";
import Scene3 from "../components/fairytale/Scene3";
import Scene4 from "../components/fairytale/Scene4";
import Scene5 from "../components/fairytale/Scene5";
import Scene6 from "../components/fairytale/Scene6";
import Scene7 from "../components/fairytale/Scene7";

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
			<Scene4 />
			<Scene5 />
			<Scene6 />
			<Scene7 />
		</div>
	);
}

export default Parallax;
