import sprookjeLogo from "../../assets/logo.png";

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
				<ul className="list-style-none">
					<li>
						<a className="link-no-styling" href="#">
							HOME
						</a>
					</li>
					<li>
						<a className="link-no-styling" href="#">
							PROJECTS
						</a>
					</li>
					<li>
						<a className="link-no-styling" href="#">
							MAKING-OF
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
