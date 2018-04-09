import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App.container'
import {} from 'jest'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
