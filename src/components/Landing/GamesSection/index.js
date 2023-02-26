import React, { useState, useEffect, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';
import { ThemeContext } from '../../../utils/store';
import GameItem1 from '../../../assets/Landing/game1.png';
import GameItem2 from '../../../assets/Landing/game2.png';
import GameItem3 from '../../../assets/Landing/game3.png';
import GameItem4 from '../../../assets/Landing/game4.png';
import GameItem5 from '../../../assets/Landing/game5.png';
import GameItem6 from '../../../assets/Landing/game6.png';
import GameItem7 from '../../../assets/Landing/game7.png';
import GameItem8 from '../../../assets/Landing/game8.png';

import styles from './style.module.scss';

const propTypes = {};

const GamesSection = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);

	const gameImages = [GameItem1, GameItem2, GameItem3, GameItem4, GameItem5, GameItem6, GameItem7, GameItem8];
	const gameTitles = ['Powerball', 'Tile manipulation', 'Powerball', 'Tile manipulation', 'Powerball', 'Tile manipulation', 'Powerball', 'Tile manipulation'];

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);
	
	return (
		<div>
			<a id="games" href="#" />
			<div className={styles.gamesSection}>
				<div className={styles.mask}>
					<CircularProgress size={120} thickness={2} />
					<div className={styles.maskText1}>Games</div>
					<div className={styles.maskText2}>Coming soon</div>
				</div>
				<div className={styles.cardList}>
					{gameImages.map((item, index) =>
						<div className={styles.card} key={index}>
							<img src={item} alt="collection" className={styles.cardImage} />
							<div className={styles.cardTitle}>{gameTitles[index]}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

GamesSection.propTypes = propTypes;

export default GamesSection;
