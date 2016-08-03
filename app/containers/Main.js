import React from 'react';
import { Link } from 'react-router';
import styles from '../stylesheets/containers/main.css';

export default class Main extends React.Component {
  render() {
    return (
      <main className={styles.container}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}>
              <Link to="/its-all-in-the-passing" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>It's all in the passing</h2>
                <p className={styles.subtitle}>Introducing the discursive setting</p>
              </Link>
                {this.props.currentSlug == "its-all-in-the-passing" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="/interview-20" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 20</h2>
                <p className={styles.subtitle}>Rational reasoning and multiple focuses. In dialogue with Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-20" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="cage-interpreted-and-performed" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Cage Interpreted and Performed</h2>
                <p className={styles.subtitle}>Description of the performance <em>John and the Mushrooms</em></p>
              </Link>
              {this.props.currentSlug == "cage-interpreted-and-performed" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="interview-3" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 3</h2>
                <p className={styles.subtitle}>The function of reflection. In dialogue with Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-3" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="hierarchy-in-creation" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Hierarchy in Creation</h2>
                <p className={styles.subtitle}>Description of the performance <em>vorschläge</em></p>
              </Link>
              {this.props.currentSlug == "hierarchy-in-creation" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="interview-7" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 7</h2>
                <p className={styles.subtitle}>Vulnerability and Immanent creation. In dialogue with Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-7" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="differentiated-presence" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Differentiated Presence</h2>
                <p className={styles.subtitle}>Description of the performance <em>Ryanji - A Meeting</em></p>
              </Link>
              {this.props.currentSlug == "differentiated-presence" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="who-is-the-creator" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Who is the creator?</h2>
                <p className={styles.subtitle}>On the dynamics of collective creation</p>
              </Link>
              {this.props.currentSlug == "who-is-the-creator" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="interview-5" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 5</h2>
                <p className={styles.subtitle}>On critical appropiations. In dialogue Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-5" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="meeting-meaning" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Meeting - Meaning</h2>
                <p className={styles.subtitle}>On the production of meaning in theater performance</p>
              </Link>
              {this.props.currentSlug == "meeting-meaning" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="interview-14" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 14</h2>
                <p className={styles.subtitle}>What the performance does to it's audience. In dialogue Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-14" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="the-rhythm-of-thinking" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>The Rhythm of Thinking</h2>
                <p className={styles.subtitle}>On esthetics, thinking and ethics</p>
              </Link>
              {this.props.currentSlug == "the-rhythm-of-thinking" && this.props.currentArticle}
            </li>
            <li className={styles.navItem}>
              <Link to="interview-19" className={styles.link} activeClassName={styles.active}>
                <h2 className={styles.title}>Interview 19</h2>
                <p className={styles.subtitle}>Tracing a politico-ethical-esthetics, and other topics. In dialogue with Institute for Unpredictable Processes</p>
              </Link>
              {this.props.currentSlug == "interview-19" && this.props.currentArticle}
            </li>
          </ul>
        </nav>
        {this.props.currentSlug == "abstract" && this.props.currentArticle}
        {this.props.currentSlug == "colophon" && this.props.currentArticle}
        {this.props.currentSlug == "summary" && this.props.currentArticle}
        {this.props.currentSlug == "references" && this.props.currentArticle}
        {this.props.currentSlug == "acknowledgements" && this.props.currentArticle}
      </main>
    )
  }
}