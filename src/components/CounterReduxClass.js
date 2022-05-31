import classes from './Counter.module.css';
import * as React from "react";
import {connect} from "react-redux";
import allActions from "../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

class CounterStateClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let counter = this.props.counterClass;
        return (
            <main className={classes.counter}>
            <h1>Redux Counter (class component)</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={this.props.increment}><span><FontAwesomeIcon icon={faPlus} color="white"/></span>Increment</button>
            <button onClick={this.props.decrement}><span><FontAwesomeIcon icon={faMinus} color="white"/></span>Decrement</button>
            <button onClick={this.props.reset}><span><FontAwesomeIcon icon={faXmark} color="white"/></span>Reset</button>
        </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterClass: state.counterClass
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        increment: () => dispatch(allActions.counterClassActions.increment()),
        decrement: () => dispatch(allActions.counterClassActions.decrement()),
        reset: () => dispatch(allActions.counterClassActions.reset()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterStateClass);