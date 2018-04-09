import Home from './Home.component'
import { Action } from 'redux'
import { StoreState } from 'types'
import { connect, Dispatch } from 'react-redux'
import { clickIncrementButton } from 'actions/triggers'

const mapStateToProps = (state: StoreState) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  clickIncrementButton: (details: ActionDetails) =>
    dispatch(clickIncrementButton(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)