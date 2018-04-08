export interface StoreState {
  counter: number
}

declare global {
  interface Window {
    devToolsExtension: Function
  }
}
