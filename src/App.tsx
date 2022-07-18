import React from "react";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Outlet,
	useParams,
} from "react-router-dom";

//import
import {Home, Villas, Services} from "src/components/pages";
import {NavBar} from "src/components/UI/molecules";

const Casa = () => {
	const {tipo} = useParams();
	return (
		<div>
			<h1>Casa </h1>
			<Link to="cuarto">
				<h5>{tipo}</h5>
			</Link>
			<Outlet />
		</div>
	);
};

const Cuarto = () => {
	const {tipo} = useParams();
	return (
		<div>
			<h1>Detalles de Cuarto </h1>
			<h5>{tipo}</h5>
		</div>
	);
};

const NotFound = () => {
	return (
		<div>
			<h1>Not Found </h1>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/villas" element={<Villas />} />
				<Route path="/services" element={<Services />} />
				<Route path="/casa/:tipo" element={<Casa />}>
					<Route path="cuarto" element={<Cuarto />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
