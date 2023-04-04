import { useState } from "react";
import "./App.css";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Interests from "./components/Interests";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}

export default App;
