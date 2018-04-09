import { createMuiTheme } from 'material-ui/styles'
import colors from './colors'

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary }
  },
  typography: {
    fontFamily: 'Futura Bold,Roboto,Helvetica Neue,Arial,sans-serif'
  }
})

export default theme
