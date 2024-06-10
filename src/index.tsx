import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ShopContextProvider from '@context/ShopContext'
import { Provider } from 'react-redux'
import { store } from './store'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode> // turn off render 2
  <ShopContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ShopContextProvider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
