import * as React from 'react'

class Zen extends React.Component<any, object> {
  renderTest = () => (<h2>test</h2>)

  render() {
    const Test = this.renderTest
    return (
      <div>
        <p>AAHHHHHHHHH</p>
        <Test />
      </div>
    )
  }
}

export default Zen
