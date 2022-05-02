import React from 'react';
import ReactDOM from 'react-dom/client';
import { getProject } from '@theatre/core';
import studio from '@theatre/studio';

studio.initialize();

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
