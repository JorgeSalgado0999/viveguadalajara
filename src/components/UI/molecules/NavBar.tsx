import React, {useState, useEffect} from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Outlet,
	useParams,
} from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
	const [clase1, setClase1] = useState("main_list");
	const [clase2, setClase2] = useState("navTrigger");
	function nose() {
		console.log("Clicked menu");
		if (clase1 == "main_list") {
			setClase1("main_list show_list");
		} else {
			setClase1("main_list");
		}

		if (clase2 == "navTrigger") {
			setClase2("navTrigger active");
		} else {
			setClase2("navTrigger");
		}
		//$(this).toggleClass("active");
		//$("#mainListDiv").toggleClass("show_list");
		//$("#mainListDiv").fadeIn();
	}

	return (
		<div>
			<nav className="nav">
				<div className="container">
					<div className="logo">
						<a href="#">Your Logo</a>
					</div>
					<div id="mainListDiv" className={clase1}>
						<ul className="navlinks">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/Villas">Villas</Link>
							</li>
							<li>
								<Link to="/services">Services</Link>
							</li>
							<li>
								<Link to="/services">Services</Link>
							</li>
						</ul>
					</div>
					<span className={clase2} onClick={() => nose()}>
						<i></i>
						<i></i>
						<i></i>
					</span>
				</div>
			</nav>
		</div>
	);
};
