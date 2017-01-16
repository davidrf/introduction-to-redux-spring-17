const testsContext = require.context('.', true, /Spec.jsx?$/)
testsContext.keys().forEach(testsContext)

console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`)
