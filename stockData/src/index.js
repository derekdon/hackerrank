import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App title={'Stock Data'} />, document.getElementById('root'));
registerServiceWorker();
