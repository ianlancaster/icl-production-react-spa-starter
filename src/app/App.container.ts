import { connect } from 'react-redux'
import App from './App.component'
import { CLICK_INCREMENT_BUTTON } from 'actions/triggers'

const mapStateToProps = (state: any, ownProps: any) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  CLICK_INCREMENT_BUTTON
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
