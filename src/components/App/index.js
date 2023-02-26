import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getPhantomWallet, getSolletExtensionWallet } from '@solana/wallet-adapter-wallets';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
	clusterApiUrl
} from '@solana/web3.js';
import Main from '../Main';
import './style.css';

const wallets = [
	/* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
	getPhantomWallet(),
	getSolletExtensionWallet()
]

const network = clusterApiUrl('devnet');

function App() {
	return (
		<Router>
			<Suspense fallback={<Fragment />}>
				<ConnectionProvider endpoint={network}>
					<WalletProvider wallets={wallets} autoConnect>
						<WalletModalProvider>
							<Main />
						</WalletModalProvider>
					</WalletProvider>
				</ConnectionProvider>
			</Suspense>
		</Router >
	);
}

export default App;
