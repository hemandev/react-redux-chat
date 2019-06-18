import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app/App';
import {subscribe} from '../store';
import './index.css';

const rootElement = document.getElementById('root');
const render = () =>  {
  ReactDOM.render(<App />, rootElement);
}
render();
subscribe(render);
