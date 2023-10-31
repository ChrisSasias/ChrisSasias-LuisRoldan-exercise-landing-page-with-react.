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
				<div className="cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
