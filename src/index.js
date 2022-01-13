import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//add 0113
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
//개발자도구
import {composeWithDevTools} from 'redux-devtools-extension'
// 리듀서 파일 불러오기
import rootReducer from './store'


//스토어 생성
const store = createStore(rootReducer, composeWithDevTools()); 

​
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      {/* 최상위에서 공급해주면 자식 자손들한테 다 공급..해준다... */}
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
