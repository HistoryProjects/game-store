import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'; 
import { store, persistor } from './store/config';
import { PersistGate } from 'redux-persist/integration/react';
import app from './firebase'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}> 
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
              <App />
            </PersistGate>
        </Provider>
     </BrowserRouter>
  </React.StrictMode>
);


