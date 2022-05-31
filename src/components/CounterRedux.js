import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import allActions from "../actions";

const CounterRedux = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter)
    const incrementHandler = () => {
        dispatch(allActions.counterActions.increment())
    };
    const decrementHandler = () => {
        dispatch(allActions.counterActions.decrement())
    };
  const resetCounterHandler = () => {
      dispatch(allActions.counterActions.reset())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter (functional component)</h1>
      <div className={classes.value}>{counter}</div>
        <button onClick={incrementHandler}><span><FontAwesomeIcon icon={faPlus} color="white"/></span>Increment</button>
        <button onClick={decrementHandler}><span><FontAwesomeIcon icon={faMinus} color="white"/></span>Decrement</button>
      <button onClick={resetCounterHandler}><span><FontAwesomeIcon icon={faXmark} color="white"/></span>Reset</button>
    </main>
  );
};

export default CounterRedux;
