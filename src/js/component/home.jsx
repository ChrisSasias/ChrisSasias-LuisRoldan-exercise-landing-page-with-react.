import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
