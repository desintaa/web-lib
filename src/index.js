import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './router'
import store from './store';
import {Provider} from 'react-redux'
// import {configureStore} from "@reduxjs/toolkit"
// // import Books from './data-dummy/Books';
// import {booksReducer} from './data-dummy/Books'

// const store = configureStore({
//   reducer: {
//     books: booksReducer
//   }
// })

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Provider> */}
//       <App/>
//     {/* </Provider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// )

// CODE AMAN ⇓

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
