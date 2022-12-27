// Hello 함수 (컴포넌트) => JSX 태그 함수 안에 함수를 넣는 방식이다. (APP 함수 안에 Hello 함수가 들어가서 index.html에 함께 쓰이고 있음을 볼 수 있다.) 지금은 다른 문서에서 export 되어 App.js 에게 전달되어 함수 안으로 들어가고 있다.
function Hello() {
  return <h1>Hello</h1>;
}

export default Hello;
