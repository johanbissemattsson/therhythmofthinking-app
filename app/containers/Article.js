import React from 'react';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/article.css';
import { StickyContainer, Sticky } from 'react-sticky';
//import smoothScroll from 'smoothscroll';
import ArticleNav from '../components/ArticleNav';
import { clearPage, loadPage } from '../actions/page';
import abstract from '../media/abstract.md';
import summary from '../media/summary.md';
import colophon from '../media/colophon.md';
import image1 from '../media/start/bgStart01.jpg';



export default class Article extends React.Component {
  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentDidUpdate () {
  }  

  rawMarkup(){
    switch (this.props.params.slug) {
      case 'abstract': return{ __html: abstract};
      case 'summary': return{ __html: summary};
      default: return{ __html: colophon};
    }
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
}

Article.propTypes = {
  dispatch: React.PropTypes.func,
  children: React.PropTypes.element,
  params: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    page: state.pages
  };
};

export default connect(mapStateToProps)(Article);