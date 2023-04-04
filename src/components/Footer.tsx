import twitterIcon from "../assets/twitter.png";
import hashIcon from "../assets/hashnode.png";
import gitIcon from "../assets/github512x512.png";
import discordIcon from "../assets/discord.png";

function Footer() {
	return (
		<div className="Footer">
			<div className="icon-container">
				<a
					href="https://twitter.com/Andynwood79"
					className="btn twitter"
					target="_blank"
				>
					<img src={twitterIcon} alt="twitter" className="footer-icon" />
				</a>

				<a
					href="https://blog.andynwood.com/"
					className="btn hashnode"
					target="_blank"
				>
					<img src={hashIcon} alt="hashnode" className="footer-icon" />
				</a>

				<a
					href="https://github.com/TheWoodenMan"
					className="btn github"
					target="_blank"
				>
					<img src={gitIcon} alt="github" className="footer-icon" />
				</a>

				<a
					href="https://discord.com/users/255864987438809088"
					className="btn discord"
					target="_blank"
				>
					<img src={discordIcon} alt="discord" className="footer-icon" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
