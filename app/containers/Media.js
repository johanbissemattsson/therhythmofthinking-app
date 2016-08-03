import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/media.css';
import ReactPlayer from 'react-player'

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

  render() {
    console.log(this.props.params.slug);
    document.body.style.overflowY = 'hidden';
    /*document.getElementById('header').style.setProperty("-webkit-filter", "blur(4px)");
    document.getElementById('nav').style.setProperty("-webkit-filter", "blur(4px)");
    document.getElementById('footer').style.setProperty("-webkit-filter", "blur(4px)");*/
    const title = this.props.params.slug.replace("-", " #");
    return(
      <div className={styles.overlayContainer}>
        <Link className={styles.overlayClose} to="/" />
        <article className={styles.overlayArticle}>
          <div className={styles.content}>
            <h1>{title}</h1>
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