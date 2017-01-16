import count from './count'
import name from './name'
import { combineReducers } from 'redux'

// let root = (state={}, action) => {
  // return {
    // count: count(state.count, action),
    // name: name(state.name, action)
  // }
// }

let root = combineReducers({
  count,
  name
})

export default root
