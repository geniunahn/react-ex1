import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// App 함수가 다른 함수들을 마치 자식 함수로 모아서 export 되어 index.js 파일에 import 되고 있다.
import App from "./App";

// root라는 id를 사용한 요소에게 App 함수가 render 되어 제공된다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
