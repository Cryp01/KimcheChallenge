import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='flex w-screen justify-center'>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
