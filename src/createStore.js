import root from './reducers/root'
import { createStore } from 'redux'

// let createStore = () => {
  // let state
  // let callbacks = []

  // let store = {
    // getState() {
      // return state
    // },

    // dispatch(action) {
      // let nextState = root(state, action)
      // state = nextState
      // callbacks.forEach(callback => callback())
    // },

    // subscribe(callback) {
      // callbacks = [...callbacks, callback]
    // }
  // }


  // let initialAction = { type: 'INIT' }
  // store.dispatch(initialAction)
  // return store
// }

export default createStore(root)
