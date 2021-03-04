import React from 'react'
import { useDispatch } from 'react-redux'
import { getSearches } from '../store/actions/primeActions'
import InputComponent from './InputComponent'
import RecentSearches from './RecentSearches'

const MainPage = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getSearches())
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <div className='header'>
        <h3>PRIME NUMBER SEARCH</h3>
      </div>
      <InputComponent />
      <RecentSearches />
    </div>
  )
}

export default MainPage
