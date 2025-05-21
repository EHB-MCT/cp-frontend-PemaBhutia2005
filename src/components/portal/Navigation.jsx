import sprookjeLogo from "../../assets/logo.png";
import "../../index.css";

import { Link } from "react-router";

export const Navigation = () => {
	return (
		<>
			<nav className="flex">
				<div>
					<a href="#" target="_blank">
						<img src={sprookjeLogo} className="logo" alt="Er was eens logo" />
					</a>
				</div>
				<div className="width-100">
					<ul className="bungee-regular list-style-none flex space-between">
						<li className="inline-block">
							<Link className="active" to="/">
								Home
							</Link>
						</li>
						<li className="inline-block">
							<Link className="link-no-styling" to="/projects">
								Projects
							</Link>
						</li>
						<li className="inline-block">
							<Link className="link-no-styling" to="/making-of">
								Making of
							</Link>
						</li>
						<li className="inline-block">
							<Link className="link-no-styling" to="/parallax">
								My fairytale
							</Link>
						</li>
					</ul>

					<div className="input-wrapper">
						<input type="text" placeholder="Search for a topic" className="search-bar" />
						<button className="search-button">Search</button>
					</div>
				</div>
			</nav>
			<hr className="width-100" />
		</>
	);
};
