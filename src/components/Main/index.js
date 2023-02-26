import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import KanonLandingPage from "../KanonLanding";
import MarketplacePage from "../Marketplace";
import MyWalletPage from "../MyWallet";
import ItemDetailPage from "../ItemDetail";
import FAQPage from "../FAQ";
import Footer from '../../utils/Footer';
import { ThemeContextProvider } from "../../utils/store";

import * as ROUTES from "../../constants/routes"

const Main = () => {
	return (
		<ThemeContextProvider>
			<Navigation />
			<Switch>
				<Route path={ROUTES.LANDING} component={LandingPage} exact />
				<Route path={ROUTES.LANDING2} component={KanonLandingPage} exact />
				<Route path={ROUTES.MARKETPLACE} component={MarketplacePage} exact />
				<Route path={ROUTES.MYWALLET} component={MyWalletPage} exact />
				<Route path={ROUTES.DETAIL} component={ItemDetailPage} exact />
				<Route path={ROUTES.FAQ} component={FAQPage} exact />
				<Route component={LandingPage} />
			</Switch>
			<Footer />
		</ThemeContextProvider>
	);
}


export default Main;
