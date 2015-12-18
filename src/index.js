import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './containers/App';
import TopPage from './containers/TopPage'
import Home from './containers/Home'
import UserOnly from './containers/UserOnly'
import UserExpecting from './containers/UserExpecting'
import QuestionsPage from './containers/QuestionsPage'
import RecommendationPage from './containers/RecommendationPage'
import AuthenticationPage from './containers/AuthenticationPage'
import rootReducer from './reducers';
import { Router, Route, RouteHandler, IndexRoute } from 'react-router';
import auth from './auth'

const store = configureStore()
const history = createBrowserHistory();

const routes = (
  <Route component={ App }>
    <Route component={UserOnly} >
      <Route path="/" component={Home} />
      <Route path="/plans" component={QuestionsPage} />
      <Route path="/recommendations" component={RecommendationPage} />
    </Route>
    <Route component={UserExpecting}>
      <Route path="/top" component={TopPage} />
      <Route path="/sign_in" component={ AuthenticationPage } />
      <Route path="/sign_up" component={ AuthenticationPage } />
    </Route>
  </Route>
);

React.render(
  <Provider store={store}>
  {() =>
     <Router history={ history }>{ routes }</Router>
  }
  </Provider>,
  document.getElementById('root')
);

