import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'routes/App.component'
import registerServiceWorker from 'services/cache/registerServiceWorker'
import 'styles/index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
