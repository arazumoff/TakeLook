import { createSelector } from 'reselect';

const getItems = state => state.items.data;
const getFilters = state => state.filters;

export const isLoading = state => state.items.loading;

export const getMinPrice = createSelector(
    [getItems],
    (items)=>{
        if(items.length > 0){
            return items.reduce((min, p) => p.price < min ? p.price : min, items[0].price);
        }else{
            return 0;
        }
    }
);

export const getMaxPrice = createSelector(
    [getItems],
    (items)=>{
        if(items.length > 0){
            return items.reduce((max, p) => p.price > max ? p.price : max, items[0].price);
        }else{
            return 0;
        }
    }
);

export const getFilteredItems = createSelector(
    [ getItems, getFilters ],
    (items, filters) => {
        const {start_price, stop_price, tags} = filters;
        let filtered = items;
        if(start_price !== 0 && stop_price !== 0){
            filtered = filtered.filter(item=> item.price >= start_price && item.price <= stop_price)
        }
        if(tags.length > 0){
            filtered = filtered.filter(item=> item.params.some(r=> tags.indexOf(r) >= 0))
        }
        return filtered;
    }
);