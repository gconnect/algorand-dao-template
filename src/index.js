import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import GlobalStyle from './assets/css/globalStyle'
import reportWebVitals from './reportWebVitals'


ReactDOM.render(

  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

