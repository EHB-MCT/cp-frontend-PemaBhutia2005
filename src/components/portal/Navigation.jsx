import sprookjeLogo from "../../assets/logo.png";
import "../../index.css";

export const Navigation = () => {
	return (
		<>
			<nav className="flex">
				<div>
					<a href="#" target="_blank">
						<img src={sprookjeLogo} className="logo" alt="Vite logo" />
					</a>
				</div>
				<div className="width-100">
					<ul className="bungee-regular list-style-none flex space-between">
						<li className="inline-block">
							<a className="active" href="">
								Home
							</a>
						</li>
						<li className="inline-block">
							{" "}
							<a className="link-no-styling" href="">
								Projects
							</a>
						</li>
						<li className="inline-block">
							<a className="link-no-styling" href="">
								Making-of
							</a>
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
