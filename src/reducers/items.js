import * as types from '../constants/ActionTypes';

const initialState = {
    data:[],
    loading: true
};

const items = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_FETCH_SUCCEEDED:
            return {...state, data: action.list.sort((a, b) => b.price < a.price), loading:false};
        default:
            return state
    }
}

export default items