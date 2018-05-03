import React from "react";

// React Component に対して、
// store の `state` と `dispatch` を `props` として
// 渡していくために使用するメソッドです。
import { connect } from "react-redux";

// 普通のコンポーネントです
// someState(state) と doSomThins(dispatch するメソッド)
// を props として受け取っています。
// これは connect で渡されたものです
const Component = ({ someState, doSomeThing }) => {
  return <div onClick={() => doSomeThing("some")}>{someState}</div>;
};

// state のどの部分を、どういう名前で props として渡すかを定義する
const mapStateToProps = state => {
  return {
    someState: state
  };
};

// どのような dispatch を、どういう名前で props として渡すかを定義する
const mapDispatchToProps = dispatch => {
  return {
    doSomeThing: some => {
      dispatch({ type: "DO_SOMETHING", payload: some });
    }
  };
};

// コンポーネントに対して、store の state と dispatch を connect する。
export default connect(mapStateToProps, mapDispatchToProps)(Component);
