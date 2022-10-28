import React from "react";
import ReactDOM from "react-dom";

function Footer() {
	return (
		<div className="Footer">
			<div className="icon-container">
				<a
					href="https://twitter.com/Andynwood79"
					className="btn twitter"
					target="_blank"
				>
					<img
						src="/assets/twitter.png"
						alt="twitter"
						className="footer-icon"
					/>
				</a>

				<a
					href="https://blog.andynwood.com/"
					className="btn hashnode"
					target="_blank"
				>
					<img
						src="/assets/hashnode.png"
						alt="hashnode"
						className="footer-icon"
					/>
				</a>

				<a
					href="https://github.com/TheWoodenMan"
					className="btn github"
					target="_blank"
				>
					<img
						src="/assets/github512x512.png"
						alt="github"
						className="footer-icon"
					/>
				</a>

				<a
					href="https://discord.com/users/255864987438809088"
					className="btn discord"
					target="_blank"
				>
					<img
						src="/assets/discord.png"
						alt="discord"
						className="footer-icon"
					/>
				</a>
			</div>
		</div>
	);
}

export default Footer;
