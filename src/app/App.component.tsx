import * as React from 'react'
import * as styles from './App.styles.scss'
import routes from 'routes'
import { logoSpin } from './App.animations'
import { Routes } from 'routes'
import { Link } from 'react-router-dom'

const logo = require('assets/images/logo.svg')

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} style={{ ...logoSpin }} alt='logo' />
          <h1 className={styles.title}>Welcome to React</h1>
          <nav className={styles.nav}>
            <Link style={{ padding: 10}} to={routes.home}>Home</Link>
            <Link style={{ padding: 10}} to={routes.zen('test')}>Zen</Link>
            <Link style={{ padding: 10}} to={routes.zen2('test')}>Zen2</Link>
          </nav>
        </header>
        <Routes />
      </div>
    )
  }
}

export default App
