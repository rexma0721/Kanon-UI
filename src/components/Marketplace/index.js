import React, { useState, useEffect, useContext } from 'react';
import { Input } from '@material-ui/core';
import { ThemeContext } from '../../utils/store';
import CollectionItem1 from '../../assets/Landing/Collections/synesis_test01b.jpg';
import CollectionItem2 from '../../assets/Landing/Collections/synesis_test01c.jpg';
import CollectionItem3 from '../../assets/Landing/Collections/synesis_test01d.jpg';
import CollectionItem4 from '../../assets/Landing/Collections/synesis_test02b.jpg';
import CollectionItem5 from '../../assets/Landing/Collections/synesis_test02c.jpg';
import CollectionItem6 from '../../assets/Landing/Collections/synesis_test02d.jpg';
import CollectionItem7 from '../../assets/Landing/Collections/synesis_test03b.jpg';
import CollectionItem8 from '../../assets/Landing/Collections/synesis_test03c.jpg';

import styles from './style.module.scss';
import DetailModal from './DetailModal';
import KanonDefaultButton from '../../utils/KanonDefaultButton';

const propTypes = {};

const MarketplacePage = () => {

	const { theme } = useContext(ThemeContext);
	const [lightMode, setLightMode] = useState(theme);

	const collectionImages = [CollectionItem1, CollectionItem2, CollectionItem3, CollectionItem4, CollectionItem5, CollectionItem6, CollectionItem7, CollectionItem8, CollectionItem1, CollectionItem2, CollectionItem3, CollectionItem4, CollectionItem5, CollectionItem6, CollectionItem7, CollectionItem8];
	const typeList = [1, 3, 4, 2, 4, 2, 3, 1, 1, 3, 4, 2, 4, 2, 3, 1];
	const itemList = collectionImages.map((item, index) => ({
		image: item,
		tag: typeList[index],
		label: `Synesis Metaverse collection${index}`
	}))

	const [showDetailModal, setShowDetailModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [showCount, setShowCount] = useState(8);
	const [searchText, setSearchText] = useState("");
	const [showList, setShowList] = useState(itemList);

	useEffect(() => {
		setLightMode(theme);
	}, [theme]);

	const Arrow = () => {
		return (
			<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.99683 7.44531C6.28027 7.44531 6.52417 7.33325 6.7417 7.11572L11.679 2.05322C11.8503 1.88184 11.9426 1.6709 11.9426 1.42041C11.9426 0.90625 11.5339 0.497559 11.0264 0.497559C10.7759 0.497559 10.5386 0.596436 10.354 0.781006L6.00342 5.26343L1.64624 0.781006C1.46167 0.603027 1.23096 0.497559 0.973877 0.497559C0.466309 0.497559 0.0576172 0.90625 0.0576172 1.42041C0.0576172 1.6709 0.149902 1.88184 0.321289 2.05981L5.25854 7.11572C5.48926 7.33984 5.71997 7.44531 5.99683 7.44531Z" fill="white" />
			</svg>
		);
	}

	const SearchIcon = () => {
		return (
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M13.3477 11.9153C13.3477 12.5481 12.8665 13.0491 12.2271 13.0491C11.9238 13.0491 11.6272 12.9436 11.4097 12.7261L8.69385 10.0103C7.88965 10.5112 6.94043 10.8013 5.93188 10.8013C3.03149 10.8013 0.651855 8.42163 0.651855 5.52124C0.651855 2.61426 3.03149 0.241211 5.93188 0.241211C8.83228 0.241211 11.2053 2.62085 11.2053 5.52124C11.2053 6.58911 10.8889 7.58447 10.3352 8.41504L13.0247 11.1111C13.2488 11.3352 13.3477 11.6187 13.3477 11.9153ZM2.25391 5.52124C2.25391 7.53833 3.90845 9.19287 5.93213 9.19287C7.94922 9.19287 9.60376 7.53833 9.60376 5.52124C9.60376 3.50415 7.94922 1.84961 5.93213 1.84961C3.90845 1.84961 2.25391 3.50415 2.25391 5.52124Z" fill="white" fillOpacity="0.4" />
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

	const onSearch = (e) => {
		const { value } = e.target;
		setSearchText(value);
		setShowList(itemList.filter(item => item.label.indexOf(value) !== -1));
	}

	return (
		<div className={styles.marketplacePage}>
			<div className={styles.titleSection}>
				<div className={styles.title}>Marketplace</div>
				<div className={styles.smallTitle}>Great option to choose unique collection</div>
				<div className={styles.search}>
					<div className={styles.searchIcon} >
						<SearchIcon />
					</div>
					<Input className={styles.searchText} value={searchText} onChange={onSearch} placeholder='Search' />
				</div>
			</div>
			<div className={styles.centerDiv}>
				<div className={styles.cardList}>
					{showList.slice(0, showCount).map((item, index) =>
						<div className={styles.card} key={index} onClick={() => { setShowDetailModal(true); setSelectedItem(item); }}>
							<Tag type={item.tag} />
							<img src={item.image} alt="collection" className={styles.cardImage} />
							<div className={styles.cardTitle}>{item.label}</div>
						</div>
					)}
				</div>
			</div>
			{(showCount + 4 <= showList.length) &&
				<KanonDefaultButton className={styles.loadMore} onClick={() => setShowCount(showCount + 4)}>
					Load more&nbsp;&nbsp;&nbsp;<Arrow />
				</KanonDefaultButton>
			}
			{selectedItem != null && <DetailModal open={showDetailModal} onClose={() => setShowDetailModal(false)} item={selectedItem} />}
		</div>
	);
}

MarketplacePage.propTypes = propTypes;

export default MarketplacePage;
