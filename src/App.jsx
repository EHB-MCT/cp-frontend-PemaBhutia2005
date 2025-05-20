import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/portal/Navigation";
import ProjectsGrid from "./components/portal/ProjectGrid";
import Footer from "./components/portal/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navigation />
			<main>
				<h1 className="bungee-regular">In the spotlight</h1>
				{/* <div>
					<img src="" alt="" className="" />
					<h2>ROODKAPJE</h2>
					<p>Fleur Van De Ville</p>
					<a href=""></a>
				</div> */}
				<ProjectsGrid />
			</main>
		</>
	);
}

export default App;
