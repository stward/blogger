import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import ViewContainer from './ViewContainer';
import PostContainer from './PostContainer';
import Search from './Search';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/view' component={ViewContainer} />
      <Route path='/post' component={PostContainer} />
      <Route path='/edit' component={PostContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
