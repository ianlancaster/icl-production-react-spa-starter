import _applyRouteContext from './applyRouteContext'
export const applyRouteContext = _applyRouteContext

import _createTrigger from './createTrigger'
export const createTrigger = _createTrigger

import _createUpdater from './createUpdater'
export const createUpdater = _createUpdater

export interface RouterAdditions {
  routeName: string,
  route: string,
  param?: string
}

import _genRouterAdditions from './genRouterAdditions'
export const genRouterAdditions = _genRouterAdditions

import _checkContext from './checkContext'
export const checkContext = _checkContext

import _createContext from './createContext'
export const createContext = _createContext
