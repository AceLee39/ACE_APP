import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './routes/home';
import Article from './routes/article';
import Message from './routes/message';

let routes = <Route path="/" component={App}>
			<IndexRoute component={Home} />
 			<Route path="/article" component={Article}/>
 			<Route path="/message" component={Message}/>
		</Route>;

ReactDOM.render(
	<Router routes={routes} history={browserHistory}/>
	,
  document.getElementById('root')
);
