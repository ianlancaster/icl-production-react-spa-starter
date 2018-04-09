import {
  Action as ReduxAction,
  ActionCreator as ReduxActionCreator
} from 'redux'

export interface StoreState {
  counter: number
}

declare global {
  interface Window {
    devToolsExtension: Function
  }

  interface Action extends ReduxAction {
    payload?: any
    context?: object
  }

  interface ActionCreator extends ReduxActionCreator<Action> {}
}
