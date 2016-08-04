import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Article from './containers/Article';
import Media from './containers/Media';

export default (
  <Route path="/" component={App}>
    <IndexRoute />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path="/performances/:performance/:slug" component={Media} />
    <Route path=":slug" component={Article} />
  </Route>
);