import React from "react";//reactの読み込み
import ReactDOM from "react-dom/client";
//reactDomはreactで作ったUIやコンポーネントをブラウザの画面に描画・更新するための公式パッケージ
//参考 https://qiita.com/raccoon_jp/items/4162e684cd7880bb705b
import App from "./App";//app.tsxの読み込み
import "./style.css";//css読み込み

//htmlのrootにapp.tsxを表示する
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
