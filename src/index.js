import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Phonebook } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>
);
