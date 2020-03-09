import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppHooks from './App-hooks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<AppHooks/>, document.getElementById('root'));
registerServiceWorker();
