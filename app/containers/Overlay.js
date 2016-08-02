import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from '../stylesheets/containers/overlay.css';


class Overlay extends React.Component {
  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  render() {
    document.body.style.overflowY = 'hidden';
    return (
        <div className={styles.container}>
          <Link className={styles.close} to="/" />
          <article className={styles.article}>
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