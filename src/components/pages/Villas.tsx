import React from "react";
import {Link} from "react-router-dom";

export const Villas = () => {
	return (
		<div>
			Villas
			<ul>
				<li>
					<Link to="/casa/tipo1"> tipo 1</Link>
				</li>
				<li>
					<Link to="/casa/tipo2"> tipo 2</Link>
				</li>
			</ul>
		</div>
	);
};
