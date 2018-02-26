import { combineReducers } from 'redux'

import items from './items'
import filters from './filters'

const root = combineReducers({
    items,
    filters
})

export default root