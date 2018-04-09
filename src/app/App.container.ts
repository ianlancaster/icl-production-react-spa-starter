import App from './App.component'
import { Action } from 'redux'
import { StoreState } from 'types'
import { connect, Dispatch } from 'react-redux'
import { clickIncrementButton } from 'actions/triggers'

const mapStateToProps = (state: StoreState) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  clickIncrementButton: (payload: number) => dispatch(clickIncrementButton(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
