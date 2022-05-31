import classes from './Counter.module.css';
import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
class CounterStateClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
        this.resetCounterHandler = this.resetCounterHandler.bind(this);
    }
    incrementHandler(){
        this.setState({counter: this.state.counter+1})
    };
    decrementHandler(){
        this.setState({counter: this.state.counter-1})
    };
    resetCounterHandler(){
        this.setState({counter: 0})
    };
    render() {
        return   <main className={classes.counter}>
            <h1>State Counter (class component)</h1>
            <div className={classes.value}>{this.state.counter}</div>
            <button onClick={this.incrementHandler}><span><FontAwesomeIcon icon={faPlus} color="white"/></span>Increment</button>
            <button onClick={this.decrementHandler}><span><FontAwesomeIcon icon={faMinus} color="white"/></span>Decrement</button>
            <button onClick={this.resetCounterHandler}><span><FontAwesomeIcon icon={faXmark} color="white"/></span>Reset</button>
        </main>;
    }
}



export default CounterStateClass;
