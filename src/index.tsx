import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import createBrowserHistory from 'history/createBrowserHistory'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'

import 'styles/index.scss'
import App from 'app'
import store from 'app/store'
import theme from 'styles/materialTheme'
import registerServiceWorker from 'services/cache/registerServiceWorker'

const history = createBrowserHistory()
const entryPoint = document.querySelector('#root')

render(
  <Router history={history} >
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  </Router>,
  entryPoint
)

registerServiceWorker()
