import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import HomeContainer from './containers/home_container';
import AboutContainer from './containers/about_container';
import InfoContainer from './containers/info_container';
import MainMenu from './containers/main_components/main_menu';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <MainMenu />
          <Switch>
            <Route path='/home' component={ HomeContainer } />
            <Route path='/info' component={ InfoContainer } />
            <Route path='/about' component={ AboutContainer } />
            <Route path='/' component= { HomeContainer } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
