import React from 'react';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import CollectionsSection from './CollectionsSection';
import GamesSection from './GamesSection';
import RoadmapSection from './RoadmapSection';
import MarketplaceSection from './MarketplaceSection';
import styles from './style.module.scss';

const propTypes = {};

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <HomeSection />
      <AboutSection />
      <CollectionsSection />
      <GamesSection />
      <RoadmapSection />
      <MarketplaceSection />
    </div>
  )
}

LandingPage.propTypes = propTypes;

export default LandingPage;
