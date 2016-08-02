import React from 'react';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/article.css';
import ArticleNav from '../components/ArticleNav';
import { StickyContainer, Sticky } from 'react-sticky';
import itsAllInThePassing from '../media/its-all-in-the-passing.md';
import interview20 from '../media/interview-20.md';
import cageInterpretedAndPerformed from '../media/cage-interpreted-and-performed.md';
import interview3 from '../media/interview-3.md';
import hierarchyInCreation from '../media/hierarchy-in-creation.md';
import interview7 from '../media/interview-7.md';
import differentiatedPresence from '../media/differentiated-presence.md';
import whoIsTheCreator from '../media/who-is-the-creator.md';
import interview5 from '../media/interview-5.md';
import meetingMeaning from '../media/meeting-meaning.md';
import interview14 from '../media/interview-14.md';
import theRhythmOfThinking from '../media/the-rhythm-of-thinking.md';
import interview19 from '../media/interview-19.md';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

class Article extends React.Component {
  componentWillMount () {

  }

  componentDidMount () {
    if (this.refs.activeArticle) {
      scroll.scrollTo(this.refs.activeArticle.offsetTop, {
          duration: 700,
          delay: 100,
          smooth: true
      });
    }
  }

  componentWillUnmount () {

  }

  componentDidUpdate () {
    if (this.refs.activeArticle) {
      scroll.scrollTo(this.refs.activeArticle.offsetTop, {
          duration: 700,
          delay: 100,
          smooth: true
      });
    }
  }  

  rawMarkup(){
    switch (this.props.params.slug) {  
      case 'interview-20': return{ __html: interview20};
      case 'cage-interpreted-and-performed': return{ __html: cageInterpretedAndPerformed};
      case 'interview-3': return{ __html: interview3};
      case 'hierarchy-in-creation': return{ __html: hierarchyInCreation};
      case 'interview-7': return{ __html: interview7};
      case 'differentiated-presence': return{ __html: differentiatedPresence};
      case 'who-is-the-creator': return{ __html: whoIsTheCreator};
      case 'interview-5': return{ __html: interview5};      
      case 'meeting-meaning': return{ __html: meetingMeaning};
      case 'interview-14': return{ __html: interview14};
      case 'the-rhythm-of-thinking': return{ __html: theRhythmOfThinking};
      case 'interview-19': return{ __html: interview19};
      default: return{ __html: itsAllInThePassing};
    }
  }
  render() {
    return (
      <article className={styles.article} ref="activeArticle">
        <StickyContainer>
          <Sticky topOffset={-32} bottomOffset={256}>
            <ArticleNav slug={this.props.params.slug} />
          </Sticky>
          <div className={styles.content} dangerouslySetInnerHTML={this.rawMarkup()} />
        </StickyContainer>
      </article>
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