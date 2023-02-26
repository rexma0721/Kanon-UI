import React, { useState, useEffect, useContext } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useWallet } from '@solana/wallet-adapter-react';
import CollectionItem1 from '../../assets/Landing/Collections/synesis_test01b.jpg';
import CollectionItem2 from '../../assets/Landing/Collections/synesis_test01c.jpg';
import CollectionItem3 from '../../assets/Landing/Collections/synesis_test01d.jpg';
import CollectionItem4 from '../../assets/Landing/Collections/synesis_test02b.jpg';
import CollectionItem5 from '../../assets/Landing/Collections/synesis_test02c.jpg';
import CollectionItem6 from '../../assets/Landing/Collections/synesis_test02d.jpg';
import CollectionItem7 from '../../assets/Landing/Collections/synesis_test03b.jpg';
import CollectionItem8 from '../../assets/Landing/Collections/synesis_test03c.jpg';
import CollectionItem9 from '../../assets/Landing/Collections/synesis_test03d.jpg';
import CollectionItem10 from '../../assets/Landing/Collections/synesis_test04b.jpg';
import CollectionItem11 from '../../assets/Landing/Collections/synesis_test04c.jpg';
import CollectionItem12 from '../../assets/Landing/Collections/synesis_test04d.jpg';
import CollectionItem13 from '../../assets/Landing/Collections/synesis_test05b.jpg';
import CollectionItem14 from '../../assets/Landing/Collections/synesis_test05c.jpg';
import CollectionItem15 from '../../assets/Landing/Collections/synesis_test05d.jpg';

import styles from './style.module.scss';
import WalletConnectModal from './WalletConnectModal';

const propTypes = {};

const FAQPage = () => {

	const [showConnectModal, setShowConnectModal] = useState(false);

	const wallet = useWallet();

	const imageList = [CollectionItem1, CollectionItem2, CollectionItem3, CollectionItem4, CollectionItem5, CollectionItem6, CollectionItem7, CollectionItem8, CollectionItem9, CollectionItem10, CollectionItem11, CollectionItem12, CollectionItem13, CollectionItem14, CollectionItem15];
	const ImageSlide = () => (
		<div>
			{imageList.map((item, index) => <img src={item} key={index} alt="slide" className={styles.imageItem} />)}
		</div>
	);

	useEffect(() => {
		if (wallet.connected) setShowConnectModal(false);
		else setShowConnectModal(true);
	}, [])

	return (
		<div className={styles.faqPage}>
			<div className={styles.faqHeader}>
				<div className={styles.header1}><ImageSlide /></div>
				<div className={styles.header2}><ImageSlide /></div>
				<div className={styles.header1}><ImageSlide /></div>
				<div className={styles.header2}><ImageSlide /></div>
			</div>
			<div className={styles.faqContent}>
				<div className={styles.title}>FAQ</div>
				<Accordion className={styles.propertyDiv}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>How do I complete the Synesis sign up process?</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.propertyDiv} defaultExpanded={true}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>What Synesis NFT is?</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
						Unique platform and unique NFT collection! However, to conduct transactions, you need a wallet. There are many<br /> variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by<br /> injected humour, or randomised words which don't look even slightly believable
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.propertyDiv}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>What is Synesis verification?</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.propertyDiv}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>Why is my account balance not being settled?</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.propertyDiv}>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<div className={styles.propertyDivTitle}>How can I make a deposit?</div>
					</AccordionSummary>
					<AccordionDetails className={styles.propertyDivDetail}>
					</AccordionDetails>
				</Accordion>
			</div>
			<WalletConnectModal open={showConnectModal} onClose={() => setShowConnectModal(false)} />
		</div>
	)
}

FAQPage.propTypes = propTypes;

export default FAQPage;
