import * as types from '../constants/ActionTypes';

const initialState = {
    tags:[],
    start_price: 0,
    stop_price:0
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TAGS:
            return {...state, tags: [...state.tags, action.tag]};
        case types.DELETE_TAGS:
            return {...state, tags: state.tags.filter(t => t !== action.tag)};
        case types.CHANGE_PRICE:
            return {...state, start_price: action.price[0], stop_price: action.price[1]}
        default:
            return state
    }
}

export default filters;
