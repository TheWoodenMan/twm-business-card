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
			<img src="src/assets/AWPortraitSquare480pdeepblue-jpg.jpg" />
			<h1>Andy Wood</h1>;<h3>Full Stack Developer</h3>;
			<span>www.andynwood.com</span>
			<div>
				<a href="mailto:andynwood@gmail.com?subject=Re: Business Card Contact">
					Email
					{/*<FontAwesomeIcon icon={faEnvelope} />*/}
				</a>
				<a href="https://www.linkedin.com/in/andynwood/">
					Linkedin
					{/*<FontAwesomeIcon icon={faLinkedin} /> */}
				</a>
			</div>
		</div>
	);
};

export default Info;
