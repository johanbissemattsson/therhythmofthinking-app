import React from 'react';
import styles from '../stylesheets/containers/article.css';
import { StickyContainer, Sticky } from 'react-sticky';
import smoothScroll from 'smoothscroll';
import ArticleNav from '../components/ArticleNav';

export default class Article extends React.Component {
  render() {
    return (
      <ArticleNav />
    );
  }
}