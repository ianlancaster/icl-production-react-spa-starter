import * as React from 'react'
import * as styles from './App.styles.scss'
import { logoSpin } from './App.animations'
import { Button } from 'material-ui'

const logo = require('assets/images/logo.svg')

export interface Props {
  clickIncrementButton: (payload: number) => Action,
  counter: number
}

class App extends React.Component<Props, object> {
  render() {
    const { clickIncrementButton, counter } = this.props

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img
            src={logo}
            className={styles.logo}
            style={{ ...logoSpin }}
            alt='logo'
          />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <Button
          variant='raised'
          color='primary'
          onClick={() => clickIncrementButton(counter + 1)}
          style={{ margin: 20 }}
        >
          helllloooo
        </Button>
        <p className={styles.intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br />
          You have clicked the button {counter} times.
        </p>
      </div>
    )
  }
}

export default App
