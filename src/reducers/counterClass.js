
const counterClass = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT2":
            return state + 1;
        case "DECREMENT2":
            return state - 1;
        case "RESET2":
            return 0;
        default:
            return state;
    }
};

export default counterClass;