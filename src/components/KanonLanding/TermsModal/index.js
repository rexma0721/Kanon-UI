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

const propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

const TermsModal = ({ open, onClose }) => {
	return (
		<Dialog
			className={styles.termsModal}
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth={'lg'}
		>
			<DialogTitle className={styles.termsModalHeader}>
				Terms of Service
				<IconButton onClick={onClose} aria-label="close" className={styles.closeButton}>
					<CloseIcon />
				</IconButton></DialogTitle>
			<DialogContent className={styles.termsModalContent}>
				Introduction
				These terms of use (“Terms”) govern the use of the (insert) (the “Platform”) as well as
				the use of non-fungible tokens that reference digital artworks and digital trading cards
				(“NFTs”) on the Platform. The Platform is operated by or on behalf of (insert) (“we,”
				“us,” and “our”). We are a limited company, registered in (insert).
				By using the Platform, you agree to be bound by these Terms. They form a legally
				binding contract between us and you. If you do not agree to these Terms, you must not
				access or use the Platform.
				These Terms do not apply to the creation of NFTs by Creators (defined below), which
				are subject to a separate written agreement between Creators and us.
				We reserve the right to change these Terms from time to time by updating the Terms
				on our website located at https://ethernity.tokensuite.io/terms-of-use.
				<h4>1. The Platform</h4>
				1.1 The Platform is built on top of the (insert) network and enables users to own, buy
				and sell collectible NFTs created by individuals or companies (“Collectibles”). Owners
				of a Collectible will not own any intellectual property (“IP”) or other rights to any
				underlying digital artwork referenced by the NFT.<br />
				1.2 Much like when a painter sells a physical work of art such as a painting, the creator
				of a Collectible (“Creators”), or the artist that worked with the Creator (“Artist”),
				typically retain a range of IP and other rights associated with the underlying digital
				artwork. The Creator or the Artist may have the ability to enforce their IP rights againstusers who infringe on those rights. Creators often grant us the necessary licenses to
				promote their Collectibles for sale and to allow secondary trading of each Collectible.<br />
				1.3 When you buy a Collectible, you will retain the ability to transfer the Collectible to
				other parties.
				<h4>2. Digital wallets and currency</h4>
				2.1 Users of the Platform must connect a compatible digital wallet (e.g., Torus or
				MetaMask) to our website in order to own, buy, or sell a Collectible. We may update
				the range of compatible wallets from time to time at our sole discretion.<br />
				2.2 Users can only buy and sell Collectibles using the cryptocurrency Ether (“ETH”).
				We may update the cryptocurrency you can use to buy or sell collectibles from time to
				time at our sole discretion.
				<h4>3. Access to the Platform</h4>
				By using the Platform, you acknowledge and confirm that:<br />
				• You are at least 18 years old or of legal age to enter into contractual relations with
				(insert) (whichever is later).<br />
				• You are the exclusive beneficiary and/or legal owner of any cryptocurrency used or to
				be used for the purchase of any digital asset on the Platform.<br />
				• You have not been identified as a Specially Designated National or placed on any
				sanctions list by the U.S. Treasury Department’s Office of Foreign Assets Control, the
				U.S. Commerce Department, or the U.S. Department of State; and you will not use our
				Website to conduct any illegal or illicit activity.• You have not been placed on any of the following lists: European External Action
				Service Consolidated Financial Sanctions List; EU Terrorist List; FATF Non-Cooperative
				Countries and Territories; Federal Bureau of Investigation Most Wanted Terrorists &
				Seeking Information; Bank of England Sanctions List; HM Treasury Sanctions List;
				Politically Exposed People List; World Bank Ineligible Firms; Department of Foreign
				Affairs and Trade Consolidated List.<br />
				• It is your responsibility to ensure your equipment (computer, laptop, tablet or another
				mobile device) meets all the necessary technical specifications to enable you to access
				and use the Platform.<br />
				• We may, from time to time, restrict access to certain features, parts, or content of the
				Platform, or the entire Platform, to users who have registered with us. You must ensure
				that any registration details you provide to us are accurate. If you choose, or you are
				provided with, a log-on ID (such as a username and password or, another identifier) as
				part of our security procedures, you must treat such information as confidential and
				must not reveal it to anyone else. You are responsible for all activities that occur under
				your log-on ID and must notify us immediately of any unauthorized use or another
				security breach of which you become aware. We reserve the right to disable any log-on
				ID, at any time, if in our opinion you have failed to comply with any of the provisions of
				these Terms or if any details you provide for the purposes of registering as a user prove
				to be false.<br />
				• You may customize your username. We reserve the right to change your username,
				for example, if it includes offensive language.
				<h4>4. Initial ownership of tokens</h4>
				4.1 For every Collectible, (insert) is the initial owner. (Insert) may promote and offer
				any Collectible for sale via the Platform. The Creator of each Collectible may grant its
				owner a range of rights, set forth in the "Rights Attached and Permitted Purposes"
				document for the Collectible on the Platform.
				<h4>5. Limited rights of Collectible owners</h4>
				5.1 As an owner of a Collectible, you may not: copy, modify, edit or reverse engineer
				any part of the Collectible including the imagery, colors, design, look and feel, format
				or other features or attributes, use the Collectible as part of another work including any
				film, image, audio work or other form of media, subject the Collectible to derogatory
				treatment, use the Collectible for any commercial purpose including for advertising or
				promoting any business, products or services, create any commercial products such as
				merchandise which feature, refer to or otherwise liken themselves to the Collectible,
				use the Collectible (or the Platform) for any purposes connected with hatred, racism,
				violence, gambling, slavery, intolerance, cruelty, unsolicited promotions or harassment,
				sales, spam, or for any purpose that infringes the rights of others or which is unlawful in
				any way, protect (or claim to protect) the Collectible with any additional intellectual
				property rights such as trademarks, patents or registered designs, or use the
				Collectible in any way not part of the Collectible’s “Rights Attached and Permitted
				Purposes” document.<br />
				5.2 You must not remove or obscure any signature of the Creator or other information
				as to the attribution of a creation, or take any steps that may have the effect of
				misleading others as to the identity of the Creator. You may use the Platform for noncommercial purposes only. We are not liable for any business losses.5.3 Any economic benefit that may be derived from appreciation in the value of the
				Collectible/NFT is incidental to obtaining it for its collectible purpose.
				<h4>6. Underlying Protocol</h4>
				6.1 You acknowledge and understand that your (insert) public address will be made
				publicly visible whenever you engage in a transaction on the Platform. The Platform
				may use other decentralized blockchain-based protocols instead of or as well as
				(insert), or forks of (insert) or other such protocols. References in these Terms to (insert)
				should be deemed to also refer to any other protocol we use.
				<h4>7. Buying and selling collectibles</h4>
				7.1 Collectibles may be offered for sale, bought, and sold on the Platform through our
				proprietary auction process. See details on the Platform for trading outside of the
				Platform and related fees.
				<h4>8. Fees and Creator's charitable contributions</h4>
				8.1 We may earn fees from each sale of Collectibles. A table of fees can be found on
				this page. Under our sustainable philanthropy business model, the Creator of each
				collectible may select a charitable cause to receive a share of all revenues generated by
				sales of their Collectibles.
				<h4>9. Funds Flow</h4>
				9.1 The Platform provides users with a convenient interface that allows users to
				interact directly with an underlying blockchain. No fiat money is stored or handled by
				the Platform or (insert) at any point. Offers and transactions to buy and sell Collectiblestake place directly between the buyer and the seller in each case, except where
				Ethernity is the initial owner of the Collectible.<br />
				9.2 You acknowledge and understand that the smart contracts do not give Ethernity
				custody, possession, or control of any Collectible or cryptocurrency at any time for the
				purpose of facilitating transactions. You affirm that you are aware and acknowledge
				that the Platform is non-custodial in nature and that the Platform has been designed to
				be directly accessible by the Creators, buyers and sellers without any involvement or
				actions taken by Ethernity. We never take custody of any user’s money, cryptocurrency
				or NFT, and we are not a payment service provider.
				<h4>10. Taxes</h4>
				10.1 You are responsible for accounting for and paying any and all taxes applicable to
				your use of the Platform and the buying and selling of Collectibles.
				<h4>11. Assumption of Risk</h4>
				You accept and acknowledge:<br />
				• We cannot guarantee the continuous, uninterrupted, or error-free operability of the
				Platform. There may be times when certain features, parts or content of the Platform, or
				the entire Platform, become unavailable (whether on a scheduled or unscheduled
				basis) or are modified, suspended or withdrawn by us, in our sole discretion, without
				notice to you. You agree that we will not be liable to you or any third party for any
				unavailability, modification, suspension or withdrawal of the Platform, or any features,
				parts or content of the Platform.• Cryptocurrencies are not backed by any government, central bank, physical value, or
				another guarantee. Their values and liquidity can materially fluctuate up and down due
				to market activity and sentiment, public and regulator sentiment, legislation, regulatory
				and governmental steps taken in relation to crypto-assets generally, or specifically, and
				other factors outside of the control of users.<br />
				• Technological difficulties experienced by the Platform may affect your access to your
				NFTs and thus your Collectibles.<br />
				• You understand fully and can afford to take the risks of purchasing and trading in
				Collectibles, you are solely responsible for determining the level of risk involved, and
				all use of the Platform is at your own risk. We are not responsible for any losses you
				may suffer as a result of any drop in value or other aspects of the sale or purchase of
				any Collectible.<br />
				• Blockchain technologies and NFTs are subject to many legal and regulatory
				uncertainties, and the Platform, NFTs, Collectibles could be adversely impacted by one
				or more regulatory, or legal inquiries, actions, suits, investigations, claims, fines or
				judgments, which could impede or limit your ability to continue the use and enjoyment
				of such assets and technologies.<br />
				• We do not own or control the (insert) network (or any other applicable network
				supported by the Platform), any digital wallet provider, or any other third-party
				infrastructure provider used in relation to the Platform, and we are not liable for any
				defects in, unavailability of, or acts or omissions of such third-party infrastructure.<br />
				• The (insert) network may be subject to sudden changes in operating rules, and third
				parties may, from time to time, fork the (insert) blockchain and implement changes in
				the operating rules or other features that might result in multiple versions of (insert)
				and, possibly, more than one version of the NFT. This may affect the value and the
				function of the initial NFT and we can temporarily suspend our services while we
				determine, at our sole and absolute discretion, which network to support. Such
				networks and forks are outside of our control and we can decide, at our sole and
				absolute discretion, to abandon or otherwise not support the initial or the copy of the
				NFT. We may, at our sole and absolute discretion, obtain and retain the unsupported
				NFTs.<br />
				• There are risks associated with accepting cryptocurrencies as payment and
				purchasing blockchain-based NFTs, including but not limited to, the risk of losing
				private keys, theft of cryptocurrency, or NFTs due to hackers finding out your private
				key. You are solely responsible for the safekeeping of the private key associated with
				the blockchain address used to buy or sell Collectibles. You accept that (insert) will not
				be able to restore or issue any refund in respect of any Collectibles due to lost or
				stolen private keys. If you are not able to spend or use a Collectible due to loss or theft
				of the corresponding private key or otherwise, you will be unable to exercise your
				rights with respect to such Collectible. See details on the Platform as to any processes
				in place to assist you (which are at our discretion).<br />
				• The Platform does not store, send, or receive NFTs. The NFTs are minted and
				transferred on the smart contract maintained by Ethernity. Any transfers of Tokens
				occur via the smart contract located on the (insert) blockchain and not on the Platform.• (Insert) has no responsibility for the Collectibles created or traded on the Platform.
				Ethernity does not investigate and cannot guarantee or warrant the authenticity,
				originality, uniqueness, marketability, legality, or value of any Collectible created or
				traded on the Platform or the underlying artwork.<br />
				• (Insert) shall not be liable for any errors, misrepresentations, or omissions in, of, and
				about, the underlying digital artwork, nor for the availability of the underlying artwork.
				(Insert) shall not be liable for any losses, injuries, or damages from the purchase,
				inability to purchase, display, or use of the underlying artwork.<br />
				• There is a risk that (insert) may be obligated to take down listings from the Platform if
				it has received a Digital Millennium Copyright Notice (“DMCA Notice”). (Insert) may
				also be obligated to serve a DMCA Notice to its IPFS service provider. If this occurs,
				the NFT representing the Collectible may no longer reference the artwork. Collectibles
				linked to images subject to a DMCA Notice may subsequently reference an invalid file
				location or a file that no longer exists.
				<h4>12. DMCA Notices</h4>
				12.1 (Insert) respects the IP of others and asks that users of our Platform do the same.
				If you believe that one of our Creators, through the use of our Platform, is unlawfully
				infringing the copyright(s) in a work, and wish to have the allegedly infringing material
				removed, the following information in the form of a written notification (pursuant to 17
				U.S.C. § 512(c)) must be provided to our designated copyright agent:<br />
				• your physical or electronic signature;<br />
				• identification of the copyrighted work(s) that you claim to have been infringed;• identification of the material on our services that you claim is infringing and that you
				request us to remove;<br />
				• sufficient information to permit us to locate such material;<br />
				• your address, telephone number, and e-mail address;<br />
				• a statement that you have a good faith belief that use of the objectionable material
				is not authorized by the copyright owner, its agent, or under the law; and<br />
				• a statement that the information in the notification is accurate, and under penalty of
				perjury, that you are either the owner of the copyright that has allegedly been infringed
				or that you are authorized to act on behalf of the copyright owner.
				Our designated copyright agent contact is: (Insert)
				Allegations that another intellectual property right is being infringed should be sent to
				(insert). (Insert) may, in its sole discretion, delete the delist the Collectible of those who
				are accused of copyright infringement or other IP rights.
				<h4>13. Company’s Role</h4>
				13.1 Our role is limited to providing a platform to allow users to offer for sale, and to
				buy and sell Collectibles directly with each other. With the exception of the initial sale
				of each Collectible, we are not a party to any secondary sale or purchase. We do not
				take payment on behalf of other parties and we are not a payment service provider.<br />
				13.2 We do our best to make sure all Collectibles are original works and do not
				infringe any third-party rights. There can be no guarantee or assurance of theuniqueness, originality or quality of any Collectible. You have no recourse or rights
				against us in relation to the existence of similar or identical works, or in relation to the
				infringement of any third-party rights.<br />
				13.3 You agree to indemnify us and our affiliates and our and their directors and
				officers in full against all losses incurred in relation to any claims, liability, loss or
				damage arising out of (or alleged in relation to) any use by you of the Platform, trading
				by you in Collectibles, or any breach of these Terms by you.
				<h4>14. Prohibited Use</h4>
				14.1 Except to the extent expressly set out in these Terms, you are not allowed to:
				'scrape' content or store content of the Platform on a server or other storage device
				connected to a network or create an electronic database by systematically
				downloading and storing all of the content of the Platform, remove or change any
				content of the Platform or attempt to circumvent security or interfere with the proper
				working of the Platform or the servers on which it is hosted, or create links to the
				Platform from any other website, without our prior written consent. You may however
				link from a website that is operated by you, provided the link is not misleading or
				deceptive and fairly indicates its destination, you do not imply that we endorse you,
				your website, or any products or services you offer, you link to (and do not frame or
				replicate) the home page of the Platform, and the linked website does not contain any
				content that is unlawful, threatening, abusive, defamatory, pornographic, obscene,
				vulgar, indecent, offensive or which infringes on the intellectual property rights or other
				rights of any third party.<br />
				14.2 You may only use the Platform for lawful purposes, in a responsible manner, and
				in a way that does not damage our name or reputation or that of any of our affiliates,
				directors or officers, or any of the Creators. The sale of stolen Collectibles, Collectibles
				taken without authorization, and otherwise illegally obtained Collectibles on Ethernityis prohibited. (Insert) reserves the right to terminate, suspend or restrict your access to
				the Platform if there is reasonable suspicion by us that that the Collectible has been or
				will be used for any illegal, fraudulent, or unauthorized purposes. If you have reason to
				believe that a Collectible listed on (insert) was illegally obtained, please contact us
				immediately. Listing illegally obtained assets may result in your listings being canceled,
				or your Collectibles being hidden.<br />
				14.3 All rights granted to you under these Terms will terminate immediately in the
				event that you are in breach of any of them, and you may not subsequently use the
				Platform.
				<h4>15. Intellectual property rights</h4>
				15.1 All IP rights in any content of the Platform (including text, graphics, software,
				photographs and other images, videos, sound, trademarks, and logos) are owned by us
				or our licensors. Except as expressly set out here, nothing in these Terms gives you any
				rights in respect of any IP owned by us or our licensors and you acknowledge that you
				do not acquire any ownership rights by downloading content from the Platform. In the
				event you print off, copy, or store pages from the Platform (only as permitted by these
				terms and conditions), you must ensure that any copyright, trademark, or other IP right
				notices contained in the original content are reproduced.
				<h4>16. Liability</h4>
				16.1 We may change the format and content of the Platform from time to time. You
				agree that your use of the Platform is on an "as is" and "as available" basis and at your
				sole risk. Whilst we try to make sure that all information contained on the Platform is
				correct, it is not intended to amount to authority or advice on which reliance should be
				placed. You should check with us or the relevant information source before acting onany such information. We make or give no representation or warranty as to the
				accuracy, completeness, currency, correctness, reliability, integrity, quality, availability,
				fitness for purpose or originality of any content of the Platform and, to the fullest extent
				permitted by law, all implied warranties, conditions or other implied terms of any kind
				are hereby excluded and we accept no liability for any loss or damage of any kind
				incurred as a result of you or anyone else using the Platform or relying on any of its
				content.<br />
				16.2 We cannot and do not guarantee that any content of the Platform will be free
				from viruses and/or other code that may have contaminating or destructive elements. It
				is your responsibility to implement appropriate IT security safeguards (including antivirus and other security checks) to satisfy your particular requirements as to the safety
				and reliability of the content.<br />
				16.3 In no event shall we be liable to you for any losses, whether indirect or
				consequential, or for any loss of profit, revenue, contracts, data, goodwill, or other
				similar losses, and any liability we do have for losses you suffer is strictly limited to
				losses that were reasonably foreseeable.<br />
				16.4 We are not liable for any user error, incorrect data, or loss of NFTs, or other
				information. Collectibles are intangible assets represented by the corresponding NFT
				on the (insert) network. We are not responsible for this network, for recording, or
				verifying ownership or value of any Collectible.<br />
				16.5 Notwithstanding the above, in the event we are liable to you for any claim arising
				out of these Terms or in relation to the Platform, our liability will be limited to £1,000.
				Where (insert) is the seller by virtue of being an initial owner of the NFT, our liability
				shall be limited to the sale price paid for that initial sale.
				<h4>17. Your Personal Information</h4>
				17.1 You consent to us accessing, processing, and retaining any personal information
				you provide to us for the purpose of us operating the Platform. This consent is not
				related to and does not affect, any rights or obligations we or you have in accordance
				with data protection laws, privacy laws, and regulations. Please see our Privacy Policy
				available at (insert) for further information about how we process your personal
				information and the rights you have in respect of this.
				<h4>18. External links</h4>
				18.1 The Platform may, from time to time, include links to external sites, third-party
				offers, and promotions. We include these to provide you with access to information,
				products or services that you may find useful or interesting. We are not responsible for
				the content of these sites or for anything provided by them and do not guarantee that
				they will be continuously available. The fact that we include links to such external sites
				does not imply any endorsement of, or association with, their operators or promoters.
				<h4>19. Governing Law and Jurisdiction</h4>
				19.1 These Terms are governed by English law, except that there may be certain
				mandatory applicable laws of your country or region that apply for your benefit and
				protection in addition to or instead of certain provisions of English law.<br />
				19.2 You agree that any dispute between you and us regarding these Terms or the
				Platform will only be dealt with by the English courts, except that if you live in a country
				of the European Union other than England, you can choose to bring legal proceedings
				either in your country or in England, but if we bring legal proceedings, we may choose
				to do so in your country.
				20. Contacting Us20.1 Please submit any questions you have about these Terms or any problems
				concerning the Platform by email to (insert).
			</DialogContent>
		</Dialog>
	);
}

TermsModal.propTypes = propTypes;

export default TermsModal;