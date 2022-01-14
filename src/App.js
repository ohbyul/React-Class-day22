import logo from './logo.svg';
import './App.css';
import Color from './components/color/Color';
import Count from './components/counter/Count';
import Counter from './components/counter/Counter';
import ChangeColor from './components/color/ChangeColor';
import Todos from './components/todos/Todos';

function App() {
  return (
    <div>
      <Color />
      <hr /> 
      <Count />
      <hr />
      <Counter />
      <hr />
      <ChangeColor /> 
      <hr />
      <Todos />
    </div>
  );
}

export default App;
