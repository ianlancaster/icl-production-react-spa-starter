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

  interface ActionDetails {
    payload?: any
    context?: object
  }
  
  interface Action extends ReduxAction, ActionDetails {
    trigger?: object
  }

  interface ActionCreator extends ReduxActionCreator<Action> {}
}
