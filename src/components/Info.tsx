import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, dom, IconName } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons/";
import { icon } from "@fortawesome/fontawesome";

// library.add(fas, faLinkedin, faEnvelope);

const Info = () => {
	return (
		<div className="Info">
			<img
				className="portrait"
				src="src/assets/AWPortraitSquare480pdeepblue-jpg.jpg"
			/>
			<h1>Andy Wood</h1>
			<h3>Full Stack Developer</h3>
			<span className="portfolio-link">www.andynwood.com</span>
			<div className="btn-container">
				<a
					className="btn email"
					href="mailto:andynwood@gmail.com?subject=Re: Business Card Contact"
				>
					<img
						className="btn-icon email-icon"
						src="src/assets/envelopeicon.png"
					/>
					<span>Email</span>
					{/*<FontAwesomeIcon icon={faEnvelope} />*/}
				</a>
				<a
					className="btn linkedin"
					href="https://www.linkedin.com/in/andynwood/"
					target="_blank"
				>
					<img
						className="btn-icon linkedin-icon"
						src="src/assets/inlogowhite.png"
					/>
					<span>Linkedin</span>
					{/*<FontAwesomeIcon icon={faLinkedin} /> */}
				</a>
			</div>
		</div>
	);
};

export default Info;
