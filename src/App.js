import logo from './logo.svg';
import './App.css';
import Color from './components/color/Color';
import Count from './components/counter/Count';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div>
      <Color />
      <hr /> 
      <Count />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
