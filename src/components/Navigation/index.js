import React, { useContext, useEffect, useState } from 'react';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from './style.module.scss';
import { ThemeContext } from '../../utils/store';
import DISCORD_IMAGE from '../../assets/Landing2/discord.png';
import MEDIUM_IMAGE from '../../assets/Landing2/medium.png';
import TELEGRAM_IMAGE from '../../assets/Landing2/telegram.png';
import TWITTER_IMAGE from '../../assets/Landing2/twitter.png';
import Logo from '../../utils/Logo';
import CustomMenuItem from '../../utils/MenuItem';
import { shortenAddress } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';

const propTypes = {};

const Navigation = () => {
	const homeMenuTitles = [
		{ title: "Home", link: "/#home" },
		{ title: "About", link: "/#about" },
		{ title: "Collections", link: "/#collections" },
		{ title: "Games", link: "/#games" },
		{ title: "Roadmap", link: "/#roadmap" },
		{ title: "Marketplace", link: "/marketplace" },
		{ title: "FAQ", link: "/faq" },
	];
	const menuTitles = [
		{ title: "Home", link: "/" },
		{ title: "Marketplace", link: "/marketplace" },
	];

	const menuImages = [DISCORD_IMAGE, MEDIUM_IMAGE, TELEGRAM_IMAGE, TWITTER_IMAGE];
	const menuLinks = ["https://discord.com/invite/fEut7WBnY9", "https://medium.com/@synesisone", "https://t.me/Synesis_One", "https://twitter.com/synesis_one"];

	const { theme } = useContext(ThemeContext);

	const history = useHistory();
	const pathname = history.location.pathname;

	const [anchorEl, setAnchorEl] = useState(null);
	const [isHome, setIsHome] = useState(true);

	const wallet = useWallet();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const isKanonUI = () => {
		if (pathname === "/" || pathname === "/marketplace" || pathname === "/mywallet" || pathname === "/item" || pathname === "/faq" || pathname === "/build" || pathname === "/build/")
			return true;
		return false;
	}

	history.listen((location, action) => {
		const { pathname } = location;
		if (pathname === "/marketplace" || pathname === "/mywallet" || pathname === "/item" || pathname === "/faq")
			setIsHome(false);
		else
			setIsHome(true);
	});

	useEffect(() => {
		if (pathname === "/marketplace" || pathname === "/mywallet" || pathname === "/item" || pathname === "/faq")
			setIsHome(false);
		else
			setIsHome(true);
	}, []);

	return (
		isKanonUI() ?
			<div className={styles.navigation}>
				<Logo />
				<div className={styles.menu}>
					{isHome ?
						homeMenuTitles.map((item, i) => <CustomMenuItem title={item.title} key={i} link={item.link} />) :
						menuTitles.map((item, i) => <CustomMenuItem title={item.title} key={i} link={item.link} />)
					}
				</div>
				<div className={styles.right}>
					{wallet.publicKey == null ?
						<WalletModalButton className={theme ? styles.connectDay : styles.connectNight}>Connect</WalletModalButton>
						:
						<div>
							<Button className={theme ? styles.connectDay : styles.connectNight} onClick={handleClick}>{shortenAddress(wallet.publicKey.toBase58() || "")}</Button>
							<Menu
								id="simple-menu"
								className={styles.dropdownMenu}
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem
									data-my-value={1}
									onClick={() => history.push("/mywallet")}
								>
									My Wallet
								</MenuItem>
								<MenuItem
									data-my-value={2}
									onClick={() => wallet.disconnect()}
								>
									Disconnect
								</MenuItem>
							</Menu>
						</div>
					}
				</div>
			</div>
			:
			<div className={styles.navigation2}>
				<Logo />
				<div className={styles.right}>
					{menuImages.map((item, i) =>
						<a href={menuLinks[i]} target="_blank" rel="noreferrer" key={i} className={styles.flex}>
							<img src={item} alt="menu" className={styles.menuItem} />
						</a>
					)}
				</div>
			</div>

	)
}

Navigation.propTypes = propTypes;

export default Navigation;
