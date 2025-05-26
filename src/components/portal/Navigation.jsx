import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sprookjeLogo from "../../assets/logo.png";
import "../../index.css";

import { Link } from "react-router";

export const Navigation = () => {
	const isParallax = window.location.pathname === "/parallax";
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		// redirect naar /projects with query param
		navigate(`/projects?search=${searchTerm.trim()}`);
	};

	return (
		<>
			<div className={`nav-wrapper ${isParallax ? "nav-extra-margin" : ""}`}>
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
								<Link className="link-no-styling" to="/projects/coraline">
									Making of
								</Link>
							</li>
						</ul>

						<div className="input-wrapper">
							<input type="text" placeholder="Search for a topic" className="search-bar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
							<button className="search-button" onClick={handleSearch}>
								Search
							</button>
						</div>
					</div>
				</nav>
			</div>
			<hr className="width-100" />
		</>
	);
};
