import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../utils/store';
import CollectionItem1 from '../../assets/Landing/Collections/synesis_test01b.jpg';
import CollectionItem2 from '../../assets/Landing/Collections/synesis_test01c.jpg';
import CollectionItem3 from '../../assets/Landing/Collections/synesis_test01d.jpg';
import CollectionItem4 from '../../assets/Landing/Collections/synesis_test02b.jpg';
import CollectionItem5 from '../../assets/Landing/Collections/synesis_test02c.jpg';
import CollectionItem6 from '../../assets/Landing/Collections/synesis_test02d.jpg';

import styles from './style.module.scss';
import { useHistory } from 'react-router-dom';

const propTypes = {};

const MyWalletPage = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);

	const collectionImages = [CollectionItem1, CollectionItem2, CollectionItem3, CollectionItem4, CollectionItem5, CollectionItem6];
	const typeList = [1, 3, 4, 2, 4, 2];

	const history = useHistory();

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);

	const Tag = ({ type }) => {
		if (type === 1) {
			return (<div className={styles.tag} style={{ backgroundColor: '#00BBFF' }}>harmony</div>);
		}
		else if (type === 2) {
			return (<div className={styles.tag} style={{ backgroundColor: '#E3477E' }}>harmony</div>);
		}
		else if (type === 3) {
			return (<div className={styles.tag} style={{ backgroundColor: '#2D61E5' }}>pandora</div>);
		}
		return (<div className={styles.tag} style={{ backgroundColor: '#8A62F6' }}>nature</div>);
	}


	return (
		<div className={styles.myWalletPage}>
			<div className={styles.titleSection}>
				<div className={styles.title}>My Wallet</div>
			</div>
			<div className={styles.centerDiv}>
				<div className={styles.cardList}>
					{collectionImages.map((item, index) =>
						<div className={styles.card} key={index} onClick={() => history.push('/item')}>
							<Tag type={typeList[index]} />
							<img src={item} alt="collection" className={styles.cardImage} />
							<div className={styles.cardTitle}>Synesis Metaverse collection</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

MyWalletPage.propTypes = propTypes;

export default MyWalletPage;
