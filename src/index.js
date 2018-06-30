import React from 'react';
import ReactDOM from 'react-dom';
import MainScreen from "./components/MainScreen";

ReactDOM.render(
  <MainScreen/>,
  document.getElementById('app')
);

module.hot.accept();
