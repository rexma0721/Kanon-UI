import React, { useState, useEffect, useContext } from 'react';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@material-ui/core';
import styles from './style.module.scss';
import DarkBg from '../../../assets/Landing/bg2.png';
import LightBg from '../../../assets/Landing/bg2.png';
import { ThemeContext } from '../../../utils/store';

const propTypes = {};

const MintSection = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);
	const captions = ["DAY", "HRS", "MIN", "SEC"];
	const cardTexts = ["09", "11", "03", "48"];

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);

	const DayContent = () => {
		return (
			<div className={styles.contentDay}>
				<div className={styles.countdownText}>Countdown to mint:</div>
				<div className={styles.cardList}>
					{captions.map((item, i) =>
						<div className={styles.card} key={i}>
							<div className={styles.cardText1}>{cardTexts[i]}</div>
							<div className={styles.cardText2}>{item}</div>
						</div>
					)}
				</div>
				<div className={styles.buttonGroup}>
					<WalletModalButton className={styles.connectButton}>
						Connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5337 14.5713C10.8149 14.5713 11.0874 14.457 11.3247 14.2197L17.0903 8.47168C17.3101 8.25195 17.4419 7.94434 17.4419 7.63672C17.4419 7.3291 17.3101 7.0127 17.0903 6.80176L11.3423 1.05371C11.0962 0.807617 10.8149 0.693359 10.5337 0.693359C9.8833 0.693359 9.42627 1.15918 9.42627 1.76562C9.42627 2.09961 9.56689 2.36328 9.76904 2.57422L11.7642 4.57812L13.9878 6.61719L12.0103 6.51172H1.71826C1.02393 6.51172 0.558105 6.96875 0.558105 7.63672C0.558105 8.30469 1.02393 8.76172 1.71826 8.76172H12.0103L13.9878 8.64746L11.7642 10.6953L9.76904 12.6904C9.56689 12.9014 9.42627 13.165 9.42627 13.499C9.42627 14.1143 9.8833 14.5713 10.5337 14.5713Z" fill="white" />
						</svg>
					</WalletModalButton>
					<Button className={styles.mintButton}>
						Mint event
					</Button>
				</div>
			</div>
		);
	}

	const NightContent = () => {
		return (
			<div className={styles.contentNight}>
				<div className={styles.countdownText}>Countdown to mint:</div>
				<div className={styles.cardList}>
					{captions.map((item, i) =>
						<div className={styles.card} key={i}>
							<div className={styles.cardText1}>{cardTexts[i]}</div>
							<div className={styles.cardText2}>{item}</div>
						</div>
					)}
				</div>
				<div className={styles.buttonGroup}>
					<WalletModalButton className={styles.connectButton}>
						Connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5337 14.5713C10.8149 14.5713 11.0874 14.457 11.3247 14.2197L17.0903 8.47168C17.3101 8.25195 17.4419 7.94434 17.4419 7.63672C17.4419 7.3291 17.3101 7.0127 17.0903 6.80176L11.3423 1.05371C11.0962 0.807617 10.8149 0.693359 10.5337 0.693359C9.8833 0.693359 9.42627 1.15918 9.42627 1.76562C9.42627 2.09961 9.56689 2.36328 9.76904 2.57422L11.7642 4.57812L13.9878 6.61719L12.0103 6.51172H1.71826C1.02393 6.51172 0.558105 6.96875 0.558105 7.63672C0.558105 8.30469 1.02393 8.76172 1.71826 8.76172H12.0103L13.9878 8.64746L11.7642 10.6953L9.76904 12.6904C9.56689 12.9014 9.42627 13.165 9.42627 13.499C9.42627 14.1143 9.8833 14.5713 10.5337 14.5713Z" fill="white" />
						</svg>
					</WalletModalButton>
					<Button className={styles.mintButton}>
						Mint event
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<a id="home" href="#" />
			<div className={styles.mintSection} style={lightMode ? { backgroundImage: `url(${LightBg})` } : { backgroundImage: `url(${DarkBg})` }}>
				{lightMode ? <DayContent /> : <NightContent />}
			</div>
		</div>
	)
}

MintSection.propTypes = propTypes;

export default MintSection;
