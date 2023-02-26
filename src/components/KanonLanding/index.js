import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import ArcProgress from 'react-arc-progress';
import moment from 'moment';
import "moment-timezone";
import LandingVideo from '../../assets/Landing2/KanonLanding.mp4';
import Logo from '../../assets/logo.png';
import useIsMobile from '../../utils/hooks/isMobile';
import styles from './style.module.scss';
import TermsModal from './TermsModal';

const propTypes = {};

const KanonLandingPage = () => {
  const captions = ["DAYS", "HRS", "MINS", "SECS"];
  const fullNumber = [31, 24, 60, 60];

  const mintDate = moment.tz('2022-01-28 09:00:00', 'YYYY-MM-DD HH:mm:ss', 'America/New_York');

  const [remainDays, setRemainDays] = useState(0);
  const [remainHours, setRemainHours] = useState(0);
  const [remainMins, setRemainMins] = useState(0);
  const [remainSecs, setRemainSecs] = useState(0);

  const [cardTexts, setCardTexts] = useState([]);

  const [openTerms, setOpenTerms] = useState(false);

  const { isMobile } = useIsMobile();

  useEffect(() => {
    let myInterval = setInterval(() => {
      let now = moment().tz("America/New_York");
      let remainDate = moment.duration(moment(mintDate, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss")));
      setRemainDays(remainDate.days());
      setRemainHours(remainDate.hours());
      setRemainMins(remainDate.minutes());
      setRemainSecs(remainDate.seconds());
      setCardTexts([remainDays, remainHours, remainMins, remainSecs]);
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {isMobile ?
        <div className={styles.mobileBackground} />
        :
        <video
          autoPlay
          loop
          muted
          className={styles.landingVideo}
        >
          <source
            type="video/mp4"
            src={LandingVideo}
          />
        </video>
      }
      <div className={styles.landingPage}>
        <div className={styles.content}>
          <div className={styles.text1}>Kanon Exchange</div>
          <div className={styles.text2}>Aquarius collection coming soon!</div>
          <div className={styles.text3}>Join our whitelist to get access to our unique Kanon NFTs which will grant you exclusive membership to the Synesis One ecosystem where you can collect, play games, and earn.</div>
          <div className={styles.buttonGroup}>
            <a href="https://forms.pabbly.com/form/share/g0ks-476489" rel="noreferrer" target="_blank" className={styles.buttonLink}>
              <Button className={styles.button}>
                Join whitelist
              </Button>
            </a>
            <a href="https://youtu.be/82QgHhQlBDg" target="_blank" rel="noreferrer" className={styles.buttonLink}>
              <Button className={styles.button}>
                Watch now
              </Button>
            </a>
          </div>
          <div className={styles.countdownText}>Countdown to mint:</div>
          <div className={styles.cardList}>
            {captions.map((item, i) =>
              <div className={styles.card} key={i}>
                <ArcProgress
                  progress={(1 - parseInt(cardTexts[i]) / fullNumber[i]) || 0.5}
                  thickness={3}
                  size={isMobile ? 70 : 120}
                  arcStart={270}
                  arcEnd={-90}
                  emptyColor={"rgba(255, 255, 255, 0.1)"}
                  fillColor={"white"}
                  style={{ position: 'absolute' }}
                >
                  <div className={styles.cardText1}>{cardTexts[i]}</div>
                  <div className={styles.cardText2}>{item}</div>
                </ArcProgress>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <img src={Logo} alt="Logo" className={styles.footerLogo} />
        <div className={styles.footerText2} onClick={() => setOpenTerms(true)}>Terms</div>
      </div>
      {/* <TermsModal open={openTerms} onClose={() => setOpenTerms(false)} /> */}
    </>
  );
}

KanonLandingPage.propTypes = propTypes;

export default KanonLandingPage;
