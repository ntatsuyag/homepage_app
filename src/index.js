import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {HeaderMenu, Main, Side, Footer} from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderMenu/>
    <div className='flex flex-col-reverse sm:flex-row'>
      <div className='flex-auto ml-2 mr-2'><Main/></div>
      <div className='flex-initial bg-gray-500 text-slate-200 ml-2 mr-2 p-4 rounded-md'><Side/></div>
    </div>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
