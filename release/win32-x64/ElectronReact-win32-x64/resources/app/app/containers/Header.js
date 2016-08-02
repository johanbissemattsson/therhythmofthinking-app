import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from '../stylesheets/containers/header.css';
import Slider from 'react-slick';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

export default class Header extends React.Component {
  render() {
    const settings = {
      className: 'slideshow',
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      fade: true,
      draggable: false
    };
    return (
      <header className={styles.container}>
        <span className={styles.author}>Johan Petri</span>
        <IndexLink to="/" className={styles.title} activeClassName="active">
          <h1>The Rhythm of Thinking</h1>
        </IndexLink>
        <span className={styles.subtitle}>Immanence and Ethics in Theater Performance</span>
        <footer className={styles.footer}>
          <span className={styles.description}>An Artistic Research Exploration of Dramaturgical and Compositional questions through the making of Theater</span>
          <nav className={styles.nav}>
            <a href="#performances">The Performances</a>
            <Link to="abstract">Abstract</Link>
            <Link to="colophon">Colophon</Link>
            <Link to="summary">Summary</Link>
            <Link to="references">References</Link>
            <Link to="acknowledgements">Acknowledgements</Link>
          </nav>
        </footer>
        <Slider {...settings}>
          <div><div className={styles.background} style={backgroundImage01}/></div>
          <div><div className={styles.background} style={backgroundVorschlage01}/></div>
          <div><div className={styles.background} style={backgroundVorschlage02}/></div>
          <div><div className={styles.background} style={backgroundReferens02}/></div>
          <div><div className={styles.background} style={backgroundImageRyoanjiSolo}/></div>

          <div><div className={styles.background} style={backgroundVorschlage}/></div>
          <div><div className={styles.background} style={backgroundImage02}/></div>
          <div><div className={styles.background} style={backgroundImage03}/></div>
          <div><div className={styles.background} style={backgroundImage05}/></div>
          <div><div className={styles.background} style={backgroundImageRyoanjiSolo2}/></div>

          <div><div className={styles.background} style={backgroundRyoanji01}/></div>
          <div><div className={styles.background} style={backgroundRyoanji02}/></div>
        </Slider>
      </header>
    );
  }
}

const backgroundImage01 = {backgroundImage: 'url(./media/start/bgStart01.jpg'};
const backgroundVorschlage01 = {backgroundImage: 'url(./media/start/bgStartVorschlage01.jpg'};
const backgroundVorschlage02 = {backgroundImage: 'url(./media/start/bgStartVorschlage02.jpg'};
const backgroundReferens02 = {backgroundImage: 'url(./media/start/bgStartReferens02.jpg'};
const backgroundImageRyoanjiSolo = {backgroundImage: 'url(./media/start/bgStartRyoanjiSolo.jpg'};
const backgroundVorschlage = {backgroundImage: 'url(./media/start/bgStartVorschlage.jpg'};
const backgroundImage02 = {backgroundImage: 'url(./media/start/bgStart02.jpg'};
const backgroundImage03 = {backgroundImage: 'url(./media/start/bgStart03.jpg'};
const backgroundImage05 = {backgroundImage: 'url(./media/start/bgStart05.jpg'};
const backgroundImageRyoanjiSolo2 = {backgroundImage: 'url(./media/start/bgStartRyoanjiSolo2.jpg'};
const backgroundRyoanji01 = {backgroundImage: 'url(./media/start/bgStartRyoanji01.jpg'};
const backgroundRyoanji02 = {backgroundImage: 'url(./media/start/bgStartRyoanji02.jpg'};
