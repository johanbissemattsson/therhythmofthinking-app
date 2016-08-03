import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Article from './containers/Article';
import Overlay from './containers/Overlay';


export default (
  <Route path="/" component={App}>
    <IndexRoute />

    <Route path=":slug" component={Article} />
  </Route>
);

/*
    <Route path="abstract" components={{overlay: Overlay}} />
    <Route path="colophon" components={{overlay: Overlay}} />
    <Route path="summary" components={{overlay: Overlay}} />
    <Route path="references" components={{overlay: Overlay}} />
    <Route path="acknowledgements" components={{overlay: Overlay}} />
    <Route path="performances/john-and-the-mushrooms/performance-37" components={{overlay: Overlay}} />
    <Route path="performances/john-and-the-mushrooms/performance-50" components={{overlay: Overlay}} />
    <Route path="performances/john-and-the-mushrooms/performance-51" components={{overlay: Overlay}} />
    <Route path="performances/john-and-the-mushrooms/performance-59" components={{overlay: Overlay}} />
    <Route path="performances/vorschlage/cicadas" components={{overlay: Overlay}} />
    <Route path="performances/vorschlage/birds" components={{overlay: Overlay}} />
    <Route path="performances/vorschlage/independent-variables" components={{overlay: Overlay}} />
    <Route path="performances/vorschlage/empathy" components={{overlay: Overlay}} />
    <Route path="performances/ryoanji-a-meeting/performance-3" components={{overlay: Overlay}} />
    <Route path="performances/ryoanji-a-meeting/performance-5" components={{overlay: Overlay}} />
    <Route path="performances/ryoanji-a-meeting/performance-6" components={{overlay: Overlay}} />
    <Route path="performances/ryoanji-a-meeting/performance-7" components={{overlay: Overlay}} />
    */