import './App.css';
import CounterRedux from "./components/CounterRedux";
import CounterState from "./components/CounterState";
import CounterReduxClass from "./components/CounterReduxClass";
import CounterStateClass from "./components/CounterStateClass";

function App() {
  return (
    <div className="App">
      <CounterRedux/>
      <CounterState/>
      <CounterReduxClass/>
      <CounterStateClass/>
    </div>
  );
}

export default App;
