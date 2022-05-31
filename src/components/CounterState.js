import classes from './Counter.module.css';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

function CounterState() {
    const [counter, setCounter] = useState(0)


    const incrementHandler = () => {
        setCounter(counter+1);
    };
    const decrementHandler = () => {
        setCounter(counter-1);
    };
  const resetCounterHandler = () => {
      setCounter(0);
  };

  return (
    <main className={classes.counter}>
      <h1>State Counter (functional component)</h1>
      <div className={classes.value}>{counter}</div>
        <button onClick={incrementHandler}><span><FontAwesomeIcon icon={faPlus} color="white"/></span>Increment</button>
        <button onClick={decrementHandler}><span><FontAwesomeIcon icon={faMinus} color="white"/></span>Decrement</button>
      <button onClick={resetCounterHandler}><span><FontAwesomeIcon icon={faXmark} color="white"/></span>Reset</button>
    </main>
  );
};


export default CounterState;
