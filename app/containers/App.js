import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}
