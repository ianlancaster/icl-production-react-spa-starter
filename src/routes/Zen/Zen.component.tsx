import * as React from 'react'
import { Button } from 'material-ui'

class Zen extends React.Component<any, object> {
  render() {
    const { zen, clickButton } = this.props
    return (
      <div>
        <Button
          variant='raised'
          color='primary'
          onClick={() => clickButton()}
          style={{ margin: 20 }}
        >
          Fetch Zen
        </Button>
        <p>{zen}</p>
      </div>
    )
  }
}

export default Zen
