import * as React from 'react'
import * as styles from './Home.styles.scss'
import { Button } from 'material-ui'

export interface Props {
  clickIncrementButton: (details: ActionDetails) => Action,
  counter: number
}

const Home = ({ clickIncrementButton, counter }: Props) => (
  <div>
    <Button
      variant='raised'
      color='primary'
      onClick={() => clickIncrementButton({ payload: counter + 1 })}
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

export default Home
