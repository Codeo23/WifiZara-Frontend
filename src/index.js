
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import {Provider} from "react-redux"
import "./Front_office/components/ChooseLangue/i18Next"
import { store } from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
