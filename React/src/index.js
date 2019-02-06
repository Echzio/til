import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './components/App';
import './scss/style.scss';

const AppWithHot = hot(module)(App);


render(<AppWithHot />, document.getElementById('app'));