import React, { Fragment } from 'react'
import spinner from '../assets/load.gif'

export const Loader = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '50px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  )
}
