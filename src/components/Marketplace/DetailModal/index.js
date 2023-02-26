import React from 'react';
import {
	Dialog,
	DialogContent,
	IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import KanonColorButton from '../../../utils/KanonColorButton';
import styles from './style.module.scss';

const propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	item: PropTypes.object,
};

const DetailModal = ({ open, onClose, item }) => {
	return (
		<Dialog
			className={styles.detailModal}
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth={'md'}
		>
			<DialogContent className={styles.detailModalContent}>
				<IconButton onClick={onClose} aria-label="close" className={styles.closeButton}>
					<CloseIcon color={'white'} />
				</IconButton>
				<img src={item.image} alt="collection" className={styles.image} />
				<div className={styles.content}>
					<div className={styles.tag}>Aquarius</div>
					<div className={styles.title}>Kanon #8830</div>
					<div className={styles.creatorTitle}>Creator</div>
					<div className={styles.creatorText}>@custom_person</div>
					<div className={styles.buyDiv}>
						<div className={styles.priceDiv}>
							<div className={styles.priceTitle}>Price</div>
							<div className={styles.priceText}>10.1301 SOL</div>
						</div>
						<KanonColorButton className={styles.buyButton}>Buy NFT</KanonColorButton>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

DetailModal.propTypes = propTypes;

export default DetailModal;
