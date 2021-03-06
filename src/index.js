// import React from 'react';
// import ReactDOM from 'react-dom';
// import AudioPlayer from './AudioPlayer';


// ReactDOM.render(
//   <React.StrictMode>
//     <AudioPlayer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import PlayerState from './context/PlayerState';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PlayerState>
        <App />
      </PlayerState>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
