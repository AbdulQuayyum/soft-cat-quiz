import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { Background } from "./Theme/Index"
import { ThemeProvider } from './Contexts/ThemeContext'
import App from './App.jsx'
import Store from './Redux/Store';
import "./Styles/Index.css"
import "./Styles/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Background>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Background>
    </Provider>
  </React.StrictMode>,
)
