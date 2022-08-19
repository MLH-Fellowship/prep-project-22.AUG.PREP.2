import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Zoom} from 'react-preloaders2';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Zoom background="#05152E" color={'white'} animation="slide-down"  time={1800}/>
  </React.StrictMode>,
  document.getElementById('root')
);
