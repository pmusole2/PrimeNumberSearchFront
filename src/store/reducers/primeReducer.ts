import { IState } from '../types/stateInterface'
import {
  AppActions,
  SEARCH_SUCCESS,
  GET_PREVIOUS_SEARCHES,
  SET_PRIMES_LOADING,
} from '../types/types'

const initialState: IState = {
  primes: [],
  primeLoading: true,
}

export const primeReducer = (state = initialState, action: AppActions) => {
  //@ts-ignore
  const { payload, type } = action
  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        primes: [payload, ...state.primes],
        primeLoading: false,
      }
    case GET_PREVIOUS_SEARCHES:
      return {
        ...state,
        primes: payload,
        primeLoading: false,
      }
    case SET_PRIMES_LOADING:
      return {
        ...state,
        primeLoading: true,
      }
    default:
      return state
  }
}
