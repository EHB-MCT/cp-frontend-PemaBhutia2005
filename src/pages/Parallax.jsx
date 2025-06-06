import Scene1 from "../components/fairytale/Scene1";
import Scene2 from "../components/fairytale/Scene2";
import Scene3 from "../components/fairytale/Scene3";
import Scene4 from "../components/fairytale/Scene4";
import Scene5 from "../components/fairytale/Scene5";
import Scene6 from "../components/fairytale/Scene6";
import Scene7 from "../components/fairytale/Scene7";

import "../parallax.css";
import "../App.css";
import { useEffect, useRef, useState } from "react";

function Parallax() {
	const audioRef = useRef(null);
	const [muted, setMuted] = useState(true);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		//als de component is gemount, voeg class toe aan de body
		document.body.classList.add("parallax-body");

		return () => {
			//als de component wordt verwijderd, verwijder class van de body
			document.body.classList.remove("parallax-body");
			const audio = audioRef.current;
			if (audio) audio.pause();
		};
	}, []);

	const handleToggle = () => {
		const audio = audioRef.current;
		if (!started) {
			//eerste keer dat de muziek wordt afgespeeld
			audio.muted = false;
			audio.play().catch((e) => console.warn("Autoplay blocked:", e));
			setStarted(true);
			setMuted(false);
		} else {
			//muziek wordt aangezet of uitgezet
			audio.muted = !audio.muted;
			setMuted(audio.muted);
		}
	};

	return (
		<div>
			<audio id="parallax-audio" ref={audioRef} loop muted>
				<source src="Exploration.mp3" type="audio/mpeg" />
			</audio>

			<button
				onClick={handleToggle}
				style={{
					position: "fixed",
					top: "20px",
					right: "20px",
					zIndex: 9999,
					background: "#e7e2c7",
					color: "#000",
					border: "2px solid #000",
					borderRadius: "12px",
					padding: "10px 15px",
					cursor: "pointer",
					fontFamily: "Annie Use Your Telescope, sans-serif",
					fontSize: "24px",
				}}
			>
				{!started || muted ? "Muziek" : "Mute"}
			</button>

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
