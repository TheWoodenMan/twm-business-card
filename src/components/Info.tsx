import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, dom, IconName } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons/";
import { icon } from "@fortawesome/fontawesome";
import envelopeIcon from "../assets/envelopeicon.png";
import portrait from "../assets/AWPortraitSquare480pdeepblue-jpg.jpg";
import inLogoWhite from "../assets/inlogowhite.png";

// library.add(fas, faLinkedin, faEnvelope);

const Info = () => {
	return (
		<div className="Info">
			<img className="portrait" src={portrait} />
			<h1>Andy Wood</h1>
			<h3>Senior Manager/Full Stack Engineer</h3>
			<a href="http://andynwood.com/" target="_blank">
				<span className="portfolio-link">www.andynwood.com</span>
			</a>
			<div className="btn-container">
				<a
					className="btn email"
					href="mailto:andynwood@gmail.com?subject=Re: Business Card Contact"
				>
					<img className="btn-icon email-icon" src={envelopeIcon} />
					<span>Email</span>
					{/*<FontAwesomeIcon icon={faEnvelope} />*/}
				</a>
				<a
					className="btn linkedin"
					href="https://www.linkedin.com/in/andynwood/"
					target="_blank"
				>
					<img className="btn-icon linkedin-icon" src={inLogoWhite} />
					<span>Linkedin</span>
					{/*<FontAwesomeIcon icon={faLinkedin} /> */}
				</a>
			</div>
		</div>
	);
};

export default Info;
