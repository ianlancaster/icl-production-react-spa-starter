import { createUpdater } from 'services/redux-action-context'

export const AUGMENT_ROUTER_STATE = 'AUGMENT_ROUTER_STATE'
export const augmentRouterState = createUpdater(AUGMENT_ROUTER_STATE)

export const UPDATE_COUNTER = 'UPDATE_COUNTER'
export const updateCounter = createUpdater(UPDATE_COUNTER)
