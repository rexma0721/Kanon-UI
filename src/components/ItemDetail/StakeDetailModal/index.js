import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import KanonColorButton from '../../../utils/KanonColorButton';
import KanonDefaultButton from '../../../utils/KanonDefaultButton';

const propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

const DetailModal = ({ open, onClose }) => {
	return (
		<Dialog
			className={styles.modal}
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth={'sm'}
		>
			<DialogTitle className={styles.modalHeader}>
				Stake details
				<IconButton onClick={onClose} aria-label="close" className={styles.closeButton}>
					<CloseIcon />
				</IconButton></DialogTitle>
			<DialogContent className={styles.modalContent}>
				<div className={styles.card}>
					<div className={styles.cardTitle}>Staked from</div>
					<div className={styles.cardText}>Data Yield Farming</div>
				</div>
				<div className={styles.dFlex}>
					<div className={styles.card1}>
						<div className={styles.cardTitle}>Staked on</div>
						<div className={styles.cardText}>Dec 25th, 2021</div>
					</div>
					<div className={styles.card1}>
						<div className={styles.cardTitle}>Accumulated rewards</div>
						<div className={styles.cardText}>0 SNS</div>
					</div>
				</div>
				<div className={styles.dFlex}>
					<KanonColorButton className={styles.unstakeButton}>Unstake</KanonColorButton>
					<KanonDefaultButton className={styles.unstakeButton}>Redeem rewards</KanonDefaultButton>
				</div>
			</DialogContent>
		</Dialog>
	);
}

DetailModal.propTypes = propTypes;

export default DetailModal;