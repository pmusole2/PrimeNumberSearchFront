import { Dispatch } from 'redux'
import { api } from '../../utils/api'
import makeToast from '../../utils/Toaster'
import {
  AppActions,
  GET_PREVIOUS_SEARCHES,
  SEARCH_SUCCESS,
  SET_PRIMES_LOADING,
} from '../types/types'

// SET PRIMES LOADING
// const setPrimesLoading:() => void = () => (dispatch:Dispatch<AppActions>) => {
//   dispatch
// }

// SEARCH FOR PRIME NUMBER
export const searchForPrime: (input: string) => void = input => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({
    type: SET_PRIMES_LOADING,
  })
  const body = JSON.stringify({ input })
  try {
    const res = await api.post('/api/search/patern', body)
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data,
    })
    makeToast(
      'success',
      res.data.result.selected ? res.data.result.selected : res.data.message
    )
  } catch (err) {
    if (err.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data.message
      console.log(error)
      makeToast('warning', error)
    } else if (err.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log(err.request)
      makeToast('warning', err.request)
    } else {
      // Some other errors
      console.log('Error', err.message)
      makeToast('warning', err.message)
    }
  }
}

// GET RECENT SEARCHES
export const getSearches: () => void = () => async (
  dispatch: Dispatch<AppActions>
) => {
  try {
    const res = await api.get('/api/search/paterns')
    dispatch({
      type: GET_PREVIOUS_SEARCHES,
      payload: res.data,
    })
  } catch (err) {
    if (err.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data.message
      console.log(error)
      makeToast('warning', error)
    } else if (err.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log(err.request)
      makeToast('warning', err.request)
    } else {
      // Some other errors
      console.log('Error', err.message)
      makeToast('warning', err.message)
    }
  }
}
