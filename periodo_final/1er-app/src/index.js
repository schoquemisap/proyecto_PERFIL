import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componentes/App';
import Principal from './componentes/Principal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Principal/>
  </React.StrictMode>
);
