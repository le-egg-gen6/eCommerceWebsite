import React from "react";

// import react-router-dom
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

//import pages
import Home from '../src/pages/Home';
import ProductDetails from '../src/pages/ProductDetails';

//import component
import SideBar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const App = () => {
	return (
		<div className="overflow-hidden">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
				<SideBar />
				<Footer />
			</Router>
		</div>
	);
};

export default App;