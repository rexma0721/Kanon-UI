import React from 'react';
import KanonDefaultButton from '../../../utils/KanonDefaultButton';
import styles from './style.module.scss';

const propTypes = {};

const RoadmapSection = () => {

	const roadmapList = [
		{ date: "01.1", title: "NFT collection collection", text: "Creating a collection in unique styles and unique categories" },
		{ date: "2.23", title: "Second unique part release", text: "Release of prepared collections" },
		{ date: "4.16", title: "New NFT platform", text: "Release of a new platform for a new collection" },
	]
	const LeftArrow = () => {
		return (
			<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.63672 12.5078C7.21484 12.5078 7.62109 12.1016 7.62109 11.5547C7.62109 11.2578 7.49609 11.0234 7.31641 10.8359L5.55078 9.0625L3.56641 7.24219L5.32422 7.34375H14.4805C15.0898 7.34375 15.5039 6.9375 15.5039 6.34375C15.5039 5.75 15.0898 5.34375 14.4805 5.34375H5.32422L3.56641 5.4375L5.55078 3.625L7.31641 1.84375C7.50391 1.65625 7.62109 1.42188 7.62109 1.125C7.62109 0.585938 7.21484 0.171875 6.63672 0.171875C6.38672 0.171875 6.14453 0.273438 5.91797 0.492188L0.808594 5.60156C0.613281 5.78906 0.496094 6.07031 0.496094 6.34375C0.496094 6.61719 0.613281 6.89062 0.808594 7.08594L5.93359 12.1953C6.14453 12.4062 6.38672 12.5078 6.63672 12.5078Z" fill="#E0E0FF" />
			</svg>
		);
	}

	const RightArrow = () => {
		return (
			<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.36328 12.5078C9.61328 12.5078 9.85547 12.4062 10.0664 12.1953L15.1914 7.08594C15.3867 6.89062 15.5039 6.61719 15.5039 6.34375C15.5039 6.07031 15.3867 5.78906 15.1914 5.60156L10.082 0.492188C9.86328 0.273438 9.61328 0.171875 9.36328 0.171875C8.78516 0.171875 8.37891 0.585938 8.37891 1.125C8.37891 1.42188 8.50391 1.65625 8.68359 1.84375L10.457 3.625L12.4336 5.4375L10.6758 5.34375H1.52734C0.910156 5.34375 0.496094 5.75 0.496094 6.34375C0.496094 6.9375 0.910156 7.34375 1.52734 7.34375H10.6758L12.4336 7.24219L10.457 9.0625L8.68359 10.8359C8.50391 11.0234 8.37891 11.2578 8.37891 11.5547C8.37891 12.1016 8.78516 12.5078 9.36328 12.5078Z" fill="#E0E0FF" />
			</svg>
		);
	}

	return (
		<div>
			<a id="roadmap" href="#" />
			<div className={styles.roadmapSection}>
				<div className={styles.titleSection}>
					<KanonDefaultButton className={styles.backButton}>
						<LeftArrow />
					</KanonDefaultButton>
					<KanonDefaultButton className={styles.nextButton}>
						Next&nbsp;&nbsp;<RightArrow />
					</KanonDefaultButton>
					<div className={styles.title}>Roadmap</div>
				</div>
				<div className={styles.cardList}>
					{roadmapList.map((item, index) =>
						<div className={styles.card} key={index}>
							<div className={styles.cardDate}>
								<div className={styles.cardDateText1}>{item.date}</div>
								<div className={styles.cardDateText2}>2021</div>
							</div>
							<div className={styles.cardTitle}>
								{item.title}
							</div>
							<div className={styles.cardText}>
								{item.text}
							</div>
						</div>
					)}
					<div className={styles.bar} />
				</div>
				<div className={styles.roadmapImage2} />
			</div>
		</div>
	);
}

RoadmapSection.propTypes = propTypes;

export default RoadmapSection;
