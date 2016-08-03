import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/overlay.css';
import abstract from '../media/abstract.md';
import summary from '../media/summary.md';

class Overlay extends React.Component {
  componentDidMount() {
    const location = this.props.location.pathname.toString().replace(/^,/, '');
    console.log(location);
  }

  componentDidUpdate() {
    const location = this.props.location.pathname.toString().replace(/^,/, '');
    console.log(location);
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  rawMarkup(location){
    switch (location) {  
      case 'abstract': return{ __html: abstract};
      default: return{ __html: summary};
    }
  }
  
  render() {
    const location = this.props.location.pathname.toString().replace(/^,/, '');
    document.body.style.overflowY = 'hidden';
    return (
        <div className={styles.container}>
          <Link className={styles.close} to="/" />
          <article className={styles.article}>
            <div className={styles.content} dangerouslySetInnerHTML={this.rawMarkup(location)} />
          </article>
        </div>
      );
  }
}

Overlay.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  page: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    page: state.pages
  };
};

export default connect(mapStateToProps)(Overlay);