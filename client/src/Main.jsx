import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { Background } from "./Theme/Index"
import { ThemeProvider } from './Contexts/ThemeContext'
import App from './App.jsx'
import Store from './Redux/Store';
import "./Styles/Index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Background>
        <ThemeProvider>
          <Provider store={Store}>
            <App />
          </Provider>
        </ThemeProvider>
      </Background>
    </BrowserRouter>
  </React.StrictMode>,
)
