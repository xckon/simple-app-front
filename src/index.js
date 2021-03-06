import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
// import api from './middleware/api'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
    onRedirectCallback={onRedirectCallback}
    leeway={300}
>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();