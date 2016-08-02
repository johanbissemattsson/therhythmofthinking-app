import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {
  render() {
    if (this.props.overlay) {
      return (
        <div>
          <Header />
          <Main />
          {this.props.overlay}
          <Footer />
        </div>
      )
    }

    return (
      <div>
      <Header />
      <Main currentSlug={this.props.params.slug} currentArticle={this.props.children}/>
      <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};