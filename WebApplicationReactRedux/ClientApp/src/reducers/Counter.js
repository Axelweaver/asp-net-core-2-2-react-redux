import actionTypes from '../actions/actionTypes';

const initialState = { count: 0 };

export const actionCreators = {
    increment: () => ({ type: actionTypes.INCREMENT_COUNT }),
    decrement: () => ({ type: actionTypes.DECREMENT_COUNT })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === actionTypes.INCREMENT_COUNT) {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === actionTypes.DECREMENT_COUNT) {
        return { ...state, count: state.count - 1 };
    }

    return state;
};
