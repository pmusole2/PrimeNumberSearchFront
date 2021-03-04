import React from 'react'
import Moment from 'react-moment'
import { IResult } from '../store/types/stateInterface'
import '../styles/cardStyles.scss'

const CustomCard = ({
  result,
  input,
  message,
  date,
}: {
  result: IResult | null
  input: string
  message: string | null
  date: any
}) => {
  return (
    <div className='courses-container'>
      <div className='course'>
        <div className='course-preview'>
          <h6>Entered Number</h6>
          <h6>{input}</h6>
          {result && result.selected && (
            <>
              <hr />
              <h6>Matched Number</h6>
              <h6>{result.selected}</h6>
            </>
          )}
        </div>
        <div className='course-info'>
          <h6>
            <Moment className='details' format='LLLL'>
              {date}
            </Moment>
          </h6>
          <hr />
          {result && result.selected && (
            <>
              <h6 className='details'>Line Matched: {result.key} </h6>
              {/* <h6 className='details'>Number Matched: {result.selected}</h6> */}
              <h6 className='details'>Full Line: {result.fullLine} </h6>
            </>
          )}
          {!result && message && <h6 className='details'>{message}</h6>}
        </div>
      </div>
    </div>
  )
}

export default CustomCard
