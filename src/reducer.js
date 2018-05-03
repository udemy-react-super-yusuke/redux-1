// 一つ前の state と、受け取った action の内容を元に
// 新しい state を作って return する関数
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "DO_SOMETHING":
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
