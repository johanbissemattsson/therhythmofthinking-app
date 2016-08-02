import React from 'react';
import { Link } from 'react-router';
import styles from '../stylesheets/components/articleNav.css';


export default class ArticleNav extends React.Component {
  render() {
    const slug = this.props.slug;
    if (slug == 'its-all-in-the-passing') {
      return (
      <nav className={styles.articleNav}>
        <Link to="/"><h1 className={styles.titleLink}>It's all in the passing</h1></Link>
          <ul>
            <li><Link to="its-all-in-the-passing#hej">Nav 1</Link></li>
            <li><Link to="/#">Nav 2</Link></li>
            <li><Link to="#">Nav 3</Link></li>
          </ul>
        </nav>
        );
    } else if (slug == 'interview-20') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 20</h1></Link>
        </nav>
      );
    } else if (slug == 'cage-interpreted-and-performed') {
      return (
      <nav className={styles.articleNav}>
        <Link to="/"><h1 className={styles.titleLink}>Cage Interpreted and Performed</h1></Link>
          <ul>
            <li><a href="/#">Nav 1</a></li>
            <li><Link to="/#">Nav 2</Link></li>
            <li><Link to="#">Nav 3</Link></li>
          </ul>
      </nav>
      );
    } else if (slug == 'interview-3') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 3</h1></Link>
        </nav>
      );
    } else if (slug == 'hierarchy-in-creation') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Hierarchy in Creation</h1></Link>
        </nav>
      );
    } else if (slug == 'interview-7') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 7</h1></Link>
        </nav>
      );
    } else if (slug == 'differentiated-presence') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Differentiated Presence</h1></Link>
        </nav>
      );
    } else if (slug == 'who-is-the-creator') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Who is the creator?</h1></Link>
        </nav>
      );
    } else if (slug == 'interview-5') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 5</h1></Link>
        </nav>
      );
    } else if (slug == 'meeting-meaning') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Meeting - Meaning</h1></Link>
        </nav>
      );
    } else if (slug == 'interview-14') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 14</h1></Link>
        </nav>
      );
    } else if (slug == 'the-rhythm-of-thinking') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>The Rhythm of Thinking</h1></Link>
        </nav>
      );
    } else if (slug == 'interview-19') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 19</h1></Link>
        </nav>
      );
    }

    return false;
  }
}
