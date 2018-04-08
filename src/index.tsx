import * as React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'

import 'styles/index.scss'
import App from 'app/App.component'
import theme from 'styles/materialTheme'
import registerServiceWorker from 'services/cache/registerServiceWorker'
import store from 'app/store'

const entryPoint = document.querySelector('#root')

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>,
  entryPoint
)

registerServiceWorker()
