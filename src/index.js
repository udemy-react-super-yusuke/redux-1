import React from "react";
import { render } from "react-dom";

// redux から　createStore を読み込む
import { createStore } from "redux";

// react と redux を結びつけるために react-redux を用いる
import { Provider } from "react-redux";

// reducer は 別ファイルに切り分ける
import reducer from "./reducer";

// App コンポーネントも別ファイルに
import App from "./Component";

// これを使って store を作る
// その際に reducer が必要
const store = createStore(reducer);

// action の dispatch

// action にtype は必須だが、
// さらに他に任意のプロパティ(ここでは payload)を追加してもよい
store.dispatch({
  type: "DO_SOMETHING",
  payload: "something"
});

render(
  // 階層的に一番上のコンポーネントを Provider でラッピングし
  // store を渡すことで、それより下位層で store を使用できるように準備する
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
