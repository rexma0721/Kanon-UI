import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../utils/store';
import KanonColorButton from '../../../utils/KanonColorButton';
import CollectionItem1 from '../../../assets/Landing/Collections/synesis_test01b.jpg';
import CollectionItem2 from '../../../assets/Landing/Collections/synesis_test01c.jpg';
import CollectionItem3 from '../../../assets/Landing/Collections/synesis_test01d.jpg';
import CollectionItem4 from '../../../assets/Landing/Collections/synesis_test02b.jpg';
import CollectionItem5 from '../../../assets/Landing/Collections/synesis_test02c.jpg';
import CollectionItem6 from '../../../assets/Landing/Collections/synesis_test02d.jpg';
import CollectionItem7 from '../../../assets/Landing/Collections/synesis_test03b.jpg';
import CollectionItem8 from '../../../assets/Landing/Collections/synesis_test03c.jpg';

import styles from './style.module.scss';

const propTypes = {};

const MarketplaceSection = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);

	const collectionImages = [CollectionItem1, CollectionItem2, CollectionItem3, CollectionItem4, CollectionItem5, CollectionItem6, CollectionItem7, CollectionItem8];
	const typeList = [1, 3, 4, 2, 4, 2, 3, 1];

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);

	const Arrow = () => {
		return (
			<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.15027 10.9285C8.36121 10.9285 8.56555 10.8428 8.74353 10.6648L13.0677 6.35376C13.2325 6.18896 13.3314 5.95825 13.3314 5.72754C13.3314 5.49683 13.2325 5.25952 13.0677 5.10132L8.75671 0.790283C8.57214 0.605713 8.36121 0.52002 8.15027 0.52002C7.66248 0.52002 7.3197 0.869385 7.3197 1.32422C7.3197 1.57471 7.42517 1.77246 7.57678 1.93066L9.07312 3.43359L10.7408 4.96289L9.25769 4.88379H1.5387C1.01794 4.88379 0.668579 5.22656 0.668579 5.72754C0.668579 6.22852 1.01794 6.57129 1.5387 6.57129H9.25769L10.7408 6.4856L9.07312 8.02148L7.57678 9.51782C7.42517 9.67603 7.3197 9.87378 7.3197 10.1243C7.3197 10.5857 7.66248 10.9285 8.15027 10.9285Z" fill="white" />
			</svg>
		);
	}

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
		<div className={styles.marketplaceSection}>
			<div className={styles.titleSection}>
				<div className={styles.title}>Featured items</div>
				<KanonColorButton className={styles.marketplaceButton}>
					See all&nbsp;&nbsp;<Arrow />
				</KanonColorButton>
			</div>
			<div className={styles.cardList}>
				{collectionImages.map((item, index) =>
					<div className={styles.card} key={index} style={index % 2 === 1 ? { marginTop: '100px' } : {}}>
						<Tag type={typeList[index]} />
						<img src={item} alt="collection" className={styles.cardImage} />
						<div className={styles.cardTitle}>Synesis Metaverse collection</div>
					</div>
				)}
			</div>
			<div className={styles.marketplaceImage} />
		</div>
	);
}

MarketplaceSection.propTypes = propTypes;

export default MarketplaceSection;
