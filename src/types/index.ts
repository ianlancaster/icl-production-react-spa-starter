import {
  Action as ReduxAction,
  ActionCreator as ReduxActionCreator
} from 'redux'

declare global {
  interface Window {
    devToolsExtension: Function
  }

  interface OpenObject {
    [x: string]: any
  }

  interface StoreState extends OpenObject {
    app?: OpenObject, // apllication scoped state
    router?: OpenObject, // current routing information
    route: OpenObject // route scoped state
  }  

  interface ActionDetails {
    payload?: any
    context?: OpenObject
  }
  
  interface Action extends ReduxAction, ActionDetails {
    trigger?: Action
  }

  interface ActionCreator extends ReduxActionCreator<Action> {}
}
