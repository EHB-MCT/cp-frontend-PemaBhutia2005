import sprookjeLogo from "../../assets/logo.png";
import "../../index.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer-section">
			<a href="#" target="_blank">
				<img src={sprookjeLogo} className="logo" alt="Er was eens logo" />
			</a>

			<div className="footer-left">
				<h4 className="footer-title">About us</h4>
				<p className="footer-description">Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life – one layer at a time. ✨</p>
			</div>
			<div className="footer-links">
				<h4 className="footer-title">LINKS</h4>
				<ul className="list-style-none footer-links">
					<li className="footer-links">
						<Link className="link-no-styling footer-links" to="/">
							Home
						</Link>
					</li>
					<li className="footer-links">
						<Link className="link-no-styling footer-links" to="/projects">
							Projects
						</Link>
					</li>
					<li className="footer-links">
						<Link className="link-no-styling footer-links" to="/projects/coraline">
							Making of
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
