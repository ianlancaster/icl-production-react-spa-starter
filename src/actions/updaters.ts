import { createUpdater } from 'services/redux-action-context'

export const UPDATE_COUNTER = 'UPDATE_COUNTER'
export const updateCounter = createUpdater(UPDATE_COUNTER)