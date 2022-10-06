import React from "react";
import {
	IconCleaning,
	IconFlight,
	IconPool,
	IconSecurity,
	IconTree,
	IconWifi,
} from "src/components/UI/atoms/icons";

import "./Home.css";

export const Home = () => {
	return (
		<div className="container-fluid">
			{/*
			 * Titulo
			 */}
			<div className="row center-xs">
				<div className="col-xs-12 col-md-6 ">
					<h1 className="">¡Welcome!</h1>
				</div>
			</div>
			{/*
			 * texto bienvenida
			 */}
			<div className="row center-xs">
				<div className="col-xs-12 col-md-9 ">
					<h3 className="center">
						ViveGuadalajara offers safe accomodation nearby TEC de Monterrey
						with Warm Rent.
					</h3>
				</div>
			</div>

			{/*
			 * Imagen principal
			 */}

			<div className="row center-xs">
				<div className="col-xs-12 col-md-9 ">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/viveguadalajara-mx.appspot.com/o/portareal.png?alt=media&token=faa842bb-d8ed-41dd-abd4-9929ec708314"
						alt="Imagen Principal"
						className="home-cover"
					/>
				</div>
			</div>

			{/*
			 * texto intro
			 */}
			<div className="row center-xs">
				<div className="col-xs-12 col-md-9 ">
					<h5 className="text-justify">
						VIVE GUADALAJARA is an organization with the purpose easing your
						transition and satisfying your accommodation and leisure needs. We
						offer continuous assistance before, during and after your
						international stay. All this with the sole purpose of giving you a
						unique and unforgettable experience. You are not alone in this new
						experience; VIVE GUADALAJARA will accompany you to undertake one of
						the most exciting stages of your life.
					</h5>
				</div>
			</div>

			{/*
			 * texto our services
			 */}
			<div className="row center-xs">
				<div className="col-xs-12 col-md-9 ">
					<h2 className="center">Our Services</h2>
					<IconFlight color="#000" heiht="90" width="90" />
					<IconTree color="#000" heiht="90" width="90" />
					<IconPool color="#000" heiht="90" width="90" />
					<IconWifi color="#000" heiht="90" width="90" />
					<IconCleaning color="#000" heiht="90" width="90" />
					<IconSecurity color="#000" heiht="90" width="90" />
				</div>
			</div>

			{/*
			 * Cierrra Container
			 */}
		</div>
	);
};
