import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import CustomCard from './CustomCard'
import { Loader } from './Loader'

const RecentSearches = () => {
  const { primeLoading, primes } = useSelector(
    (state: AppState) => state.primes
  )
  return (
    <div className='container'>
      <div className='box-styles '>
        <h5>RECENT SEARCHES</h5>
        {primeLoading === true && (
          <div className='center-all'>
            <Loader />
          </div>
        )}
        {primeLoading === false &&
          primes &&
          primes.length > 0 &&
          primes.map((item: any) => (
            <CustomCard
              key={item._id}
              result={item.result}
              input={item.input}
              message={item.message}
              date={item.date}
            />
          ))}
      </div>
    </div>
  )
}

export default RecentSearches
