import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Scene1 from "../components/fairytale/Scene1";

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
		</div>
	);
}

export default Parallax;
