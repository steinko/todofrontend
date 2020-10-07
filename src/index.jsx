import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import apm from 'elastic-apm-node/start'
import { init as initApm } from '@elastic/apm-rum'

apm.start()

ReactDOM.render(<App />, document.getElementById('root'))

