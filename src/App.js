import "./App.css";
// Hello 라는 이름으로 export 되는 데이터를 받아서 사용하고 있다.
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <Visual />
      <h1>리액트 APP</h1>
      <p>리액트 처음 시작합니다</p>
      <Hello />
    </div>
  );
}

// 동일한 문서 안에서 App 함수 안에 Visual 함수를 넣는 방법이다.
function Visual() {
  return (
    <div>
      <img src="http://placeimg.com/800/400/nature" />
    </div>
  );
}

// 이 문서의 함수들이 App 이라는 이름으로 export 된다. 그것은 index.js 가 import 로 받아서 root 라는 id를 사용하는 요소에게 제공한다.
export default App;
