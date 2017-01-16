import './index.css';
import store from './createStore'
import { addOne, addNumber, setName } from './actionCreators'

const render = state => {
  let stateJson = JSON.stringify(state, null, 2);
  document.body.innerHTML = `<code><pre>${stateJson}</pre></code>`;
}

store.subscribe(() => {
  render(store.getState())
})

let action = addOne()
store.dispatch(action)

action = addNumber(10)
store.dispatch(action)

action = setName('Rachel')
store.dispatch(action)
