// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>리액트 APP</h1>
      <p>리액트 처음 시작합니다</p>
      <Hello></Hello>
    </div>
  );
}

// Hello 함수 (컴포넌트) => JSX 태그 함수 안에 함수를 넣는 방식이다. (APP 함수 안에 Hello 함수가 들어가서 index.html에 함께 쓰이고 있음을 볼 수 있다.)
function Hello() {
  return <h1>Hello</h1>;
}

export default App;
