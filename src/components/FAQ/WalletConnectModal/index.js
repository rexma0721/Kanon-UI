import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

const WalletConnectModal = ({ open, onClose }) => {
	return (
		<Dialog
			className={styles.modal}
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth={'sm'}
		>
			<DialogTitle className={styles.modalHeader}>
				<IconButton onClick={onClose} aria-label="close" className={styles.closeButton}>
					<CloseIcon />
				</IconButton></DialogTitle>
			<DialogContent className={styles.modalContent}>
				<div className={styles.text}>Connect your wallet and<br /> buy your Synesis NFT</div>
				<WalletModalButton className={styles.connectButton} onClick={onClose}>Connect wallet</WalletModalButton>
			</DialogContent>
		</Dialog>
	);
}

WalletConnectModal.propTypes = propTypes;

export default WalletConnectModal;