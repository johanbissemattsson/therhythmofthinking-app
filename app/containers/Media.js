import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/media.css';
import ReactPlayer from 'react-player';
import cicadas from '../media/cicadas.md';
import independentVariables from '../media/independent-variables.md';
import empathy from '../media/empathy.md';
import birds from '../media/birds.md';

class Media extends React.Component {
  componentWillMount () {
    document.body.style.overflowY = 'hidden';
  }

  componentDidUpdate () {
  } 

  componentWillUnmount () {
    document.body.style.overflowY = 'auto';
    /*document.getElementById('header').style.setProperty("-webkit-filter", "none");
    document.getElementById('nav').style.setProperty("-webkit-filter", "none");
    document.getElementById('footer').style.setProperty("-webkit-filter", "none");*/    
  }

  rawMarkup(){
    switch (this.props.params.slug) {
      case 'cicadas': return{ __html: cicadas};
      case 'independent-variables': return{ __html: independentVariables};
      case 'empathy': return{ __html: empathy}; 
      case 'birds': return{ __html: birds};
      default: return{ __html: birds};
    }
  }  

  render() {
    console.log(this.props.params.slug);
    document.body.style.overflowY = 'hidden';
    /*document.getElementById('header').style.setProperty("-webkit-filter", "blur(4px)");
    document.getElementById('nav').style.setProperty("-webkit-filter", "blur(4px)");
    document.getElementById('footer').style.setProperty("-webkit-filter", "blur(4px)");*/
    const title = this.props.params.slug.replace("-", " #");
    if (this.props.params.slug == 'cicadas' || this.props.params.slug == 'independent-variables' || this.props.params.slug == 'empathy' || this.props.params.slug == 'birds' ) {
      return(
        <div className={styles.overlayContainer}>
          <Link className={styles.overlayClose} to="/" />
          <article className={styles.overlayAudioArticle}>
            <div className={styles.content}>
              <div className={styles.content} dangerouslySetInnerHTML={this.rawMarkup(location)} />
            </div>
          </article>
        </div>
      )           
    }
    if (this.props.params.slug == 'performance-37') {
      return(
        <div className={styles.overlayContainer}>
          <Link className={styles.overlayClose} to="/" />
          <article className={styles.overlayArticle}>
            <div className={styles.content}>
              <h1 className={styles.overlayHeader}>{title}</h1>
              <video width="320" height="240" controls>
                <source src="../app/media/cage-interpreted-and-performed/jm51.mp4" type="video/mp4" />
              </video> 
            </div>
          </article>
        </div>
      )           
    }    
    return(
      <div className={styles.overlayContainer}>
        <Link className={styles.overlayClose} to="/" />
        <article className={styles.overlayArticle}>
          <div className={styles.content}>
            <h1 className={styles.overlayHeader}>{title}</h1>
            <ReactPlayer url='https://vimeo.com/177240898' width="100%"/>
          </div>
        </article>
      </div>
    )          
  }
}

Media.propTypes = {
  params: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Media);