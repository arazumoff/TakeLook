import * as types from "../constants/ActionTypes";

const action=(type, payload = {})=>({type, ...payload});

export const startLoadAction=()=>action(types.LIST_FETCH_REQUESTED);
export const addTagAction=(tag)=>action(types.ADD_TAGS, {tag});
export const deleteTagAction=(tag)=>action(types.DELETE_TAGS, {tag});
export const changePriceAction=(price)=>action(types.CHANGE_PRICE, {price});
