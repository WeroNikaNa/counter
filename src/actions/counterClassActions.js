
export const increment = () => {
    return {
        type: "INCREMENT2"
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT2"
    };
};

export const reset = () => {
    return {
        type: "RESET2"
    };
};

export default {
    increment,
    decrement,
    reset
};