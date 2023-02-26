import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CollectionItem1 from '../../assets/Landing/Collections/synesis_test01d.jpg';
import KanonInput from '../../utils/KanonInput';
import styles from './style.module.scss';
import KanonColorButton from '../../utils/KanonColorButton';
import KanonDefaultButton from '../../utils/KanonDefaultButton';
import DetailModal from './StakeDetailModal';

const propTypes = {
};

const ItemDetailPage = () => {
	const propertyTitles = ["Clan", "Class", "Companion", "Item", "Companion", "Item", "Clan"];
	const propertyTexts = ["Vortex Society", "Phantom", "Parrot Parrot", "Atlas Star", "Parrot Parrot", "Atlas Star", "Vortex Society"];

	const detailTitles = ["Mint address", "Token address", "Owner", "Artist Royalties", "Transaction Fee", "Listing/Biding/Cancel"];
	const detailTexts = ["4Hjdl748lhwh83kujaw3kyhB383hdl3i40jjHK83p0274hs83", "83ojjkih639JJkdn3kujaw3kyhB383hdl38734niye64nbisu7", "4Hjdl748lhwh83kujaw3kyhB383hdl3i40jjHK83p0274hs83", "7.5%", "2%", "Free"];

	const [showDetailModal, setShowDetailModal] = useState(false);

	const history = useHistory();

	const LeftArrow = () => (
		<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.84937 10.9285C5.63843 10.9285 5.43408 10.8428 5.2561 10.6648L0.931885 6.35376C0.76709 6.18896 0.668213 5.95825 0.668213 5.72754C0.668213 5.49683 0.76709 5.25952 0.931885 5.10132L5.24292 0.790283C5.42749 0.605713 5.63843 0.52002 5.84937 0.52002C6.33716 0.52002 6.67993 0.869385 6.67993 1.32422C6.67993 1.57471 6.57446 1.77246 6.42285 1.93066L4.92651 3.43359L3.25879 4.96289L4.74194 4.88379H12.4609C12.9817 4.88379 13.3311 5.22656 13.3311 5.72754C13.3311 6.22852 12.9817 6.57129 12.4609 6.57129H4.74194L3.25879 6.4856L4.92651 8.02148L6.42285 9.51782C6.57446 9.67603 6.67993 9.87378 6.67993 10.1243C6.67993 10.5857 6.33716 10.9285 5.84937 10.9285Z" fill="white" />
		</svg>
	);

	return (
		<div className={styles.itemDetailPage}>
			<div className={styles.backButton} onClick={() => history.goBack()}><LeftArrow />&nbsp;&nbsp;&nbsp;Get back</div>
			<div className={styles.imageDiv}>
				<img src={CollectionItem1} alt="collection" className={styles.image} />
			</div>
			<div className={styles.content}>
				<div className={styles.tag}>Aquarius</div>
				<div className={styles.title}>Kanon #8830</div>
				<div className={styles.creatorTitle}>Creator</div>
				<div className={styles.creatorText}>@custom_person</div>
				<div className={styles.dFlex}>
					<div className={styles.listDiv}>
						<div className={styles.listDivTitle}>Not Listed</div>
						<div className={styles.listDivInputGroup}>
							<KanonInput placeholder='List Price (SOL)' className={styles.listDivInput} />
							<KanonColorButton className={styles.listNowButton}>List Now</KanonColorButton>
						</div>
						<div className={styles.listDivDescription}>By clicking «List Now» you agree to <p>Terms of Service</p></div>
					</div>
					<div className={styles.stakeDiv}>
						<div className={styles.listDivTitle}>Not Staked</div>
						<div className={styles.listDivInputGroup}>
							<KanonDefaultButton onClick={() => setShowDetailModal(true)}>Stake</KanonDefaultButton>
						</div>
						<div className={styles.listDivDescription}>Read more about <p>Staking</p></div>
					</div>
				</div>
				<Accordion className={styles.propertyDiv}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>Properties</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
						{propertyTitles.map((item, index) =>
							<div className={styles.propertyCard} key={index}>
								<div className={styles.propertyCardTitle}>{item}</div>
								<div className={styles.propertyCardText}>{propertyTexts[index]}</div>
							</div>
						)}
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.detailDiv}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<div className={styles.detailDivTitle}>Details</div>
					</AccordionSummary>
					<AccordionDetails className={styles.detailDivDetail}>
						{detailTitles.map((item, index) =>
							<div className={styles.detailCard} key={index}>
								<div className={styles.detailCardTitle}>{item}</div>
								<div className={styles.detailCardText}>{detailTexts[index]}</div>
							</div>
						)}
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.detailDiv}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
					>
						<div className={styles.detailDivTitle}>Sales history</div>
					</AccordionSummary>
					<AccordionDetails className={styles.detailDivDetail}>
					</AccordionDetails>
				</Accordion>
			</div>
			<DetailModal open={showDetailModal} onClose={() => setShowDetailModal(false)} />
		</div>
	);
}

ItemDetailPage.propTypes = propTypes;

export default ItemDetailPage;
