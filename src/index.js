import './index.css';

const render = state => {
  let stateJson = JSON.stringify(state, null, 2);
  document.body.innerHTML = `<code><pre>${stateJson}</pre></code>`;
}

render({ hello: 'world' })
