import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
      <Header />
      <Main currentSlug={this.props.params.slug} currentArticle={this.props.children}/>
      <Footer />
      </div>
    );
  }
}
