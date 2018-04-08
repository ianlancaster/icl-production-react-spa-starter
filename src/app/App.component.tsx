import * as React from 'react'
import * as styles from './App.styles.scss'
import { logoSpin } from './App.animations'

const logo = require('assets/images/logo.svg')

export interface Props {
  CLICK_INCREMENT_BUTTON: any,
  counter: number
}

class App extends React.Component<Props, object> {
  render() {
    const { CLICK_INCREMENT_BUTTON, counter } = this.props

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img
            src={logo}
            className={styles.logo}
            style={{ ...logoSpin }}
            onClick={() => CLICK_INCREMENT_BUTTON(counter + 1)}
            alt="logo"
          />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.<br />
          You have clicked the react logo {counter} times.
        </p>
      </div>
    )
  }
}

export default App
