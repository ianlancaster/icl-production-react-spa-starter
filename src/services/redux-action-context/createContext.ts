import checkContext from './checkContext'

const createContext = (baseContext: object) =>
  (action: Action, context?: object) =>
    checkContext(action, { ...baseContext, ...context })

export default createContext
