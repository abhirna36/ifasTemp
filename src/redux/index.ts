import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'
//insert another reducers here to be combined

const reducers = combineReducers({
    dummyReducer
})

export default reducers