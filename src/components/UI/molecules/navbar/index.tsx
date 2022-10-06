import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
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
	const [menuState, setMenuState] = useState(false);
	return (
		<nav>
			<Link to="/" className="nav-item">
				<h1 className="navbar-logo">ViveGdl</h1>
			</Link>
			<div className="menu-icon" onClick={() => setMenuState(!menuState)}>
				<FontAwesomeIcon icon={menuState ? faXmark : faBars} size="6x" />
			</div>

			<ul className={menuState ? "nav-menu active" : "nav-menu"}>
				<div className="menu-icon" onClick={() => setMenuState(!menuState)}>
					<FontAwesomeIcon icon={menuState ? faXmark : faBars} size="6x" />
				</div>
				<li className="nav-item">
					<Link
						to="/About"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Rooms"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Rooms
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Villas"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Villas
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Services"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Services
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Gallery"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Gallery
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Contact"
						className="nav-item"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};
