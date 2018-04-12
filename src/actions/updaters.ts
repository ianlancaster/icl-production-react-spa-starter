import { createUpdater } from 'services/redux-action-context'

export const AUGMENT_ROUTER_STATE = 'AUGMENT_ROUTER_STATE'
export const augmentRouterState = createUpdater(AUGMENT_ROUTER_STATE)

export const SET_COUNTER = 'SET_COUNTER'
export const setCounter = createUpdater(SET_COUNTER)

export const SET_ZEN = 'SET_ZEN'
export const setZen = createUpdater(SET_ZEN)

export const SET_FETCHING = 'SET_FETCHING'
export const setFetching = createUpdater(SET_FETCHING)
