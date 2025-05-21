import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "../parallax.css";

function Parallax() {
	useEffect(() => {
		document.body.classList.add("parallax-body");

		return () => {
			document.body.classList.remove("parallax-body");
		};
	}, []);
}

export default Parallax;
