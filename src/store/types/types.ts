export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const GET_PREVIOUS_SEARCHES = 'GET_PREVIOUS_SEARCHES'
export const SET_PRIMES_LOADING = 'SET_PRIMES_LOADING'

export interface IPatern {
  input: string
  result: {
    key: string
    value: string
    selected: string
    fullLine: string
  } | null
  message: string | null
}

interface GetPreviousSearches {
  type: typeof GET_PREVIOUS_SEARCHES
  payload: IPatern[]
}

interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS
  payload: IPatern
}

interface SetPrimesLoading {
  type: typeof SET_PRIMES_LOADING
}

export type AppActions =
  | SearchSuccessAction
  | GetPreviousSearches
  | SetPrimesLoading
