import Zen from './Zen.component'
import * as triggers from 'actions/triggers'
import { connect, Dispatch } from 'react-redux'

const mapStateToProps = (state: StoreState) => ({
  zen: state.route.zen
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  clickButton: () => dispatch(
    triggers.clickButton({ context: { name: 'fetch zen' }})
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Zen)
