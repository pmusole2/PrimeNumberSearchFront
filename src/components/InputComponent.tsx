import React from 'react'
import { useDispatch } from 'react-redux'
import { searchForPrime } from '../store/actions/primeActions'
import '../styles/inputComponentStyles.scss'
import makeToast from '../utils/Toaster'

const numberRegex = /^[0-9\b]+$/

const InputComponent = () => {
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const onChangehandler: (e: any) => void = e => {
    let numbers = e.target.value
    if (numbers === '' || numberRegex.test(numbers)) {
      setInput(numbers)
    }
  }
  return (
    <form className='main-form'>
      <div className='input-container'>
        <input
          type='text'
          name='number'
          value={input}
          id='number'
          placeholder='Enter any three numbers'
          pattern='[0-9]{3}'
          onChange={onChangehandler}
          maxLength={3}
          minLength={3}
        />
        <button
          type='submit'
          onClick={e => {
            e.preventDefault()
            if (input.length < 3) {
              makeToast('warning', 'Please Enter Three (3) Numbers')
              setInput('')
              return
            }
            e.preventDefault()
            dispatch(searchForPrime(input))
            setInput('')
          }}
          className='submit'
        >
          SEARCH
        </button>
      </div>
    </form>
  )
}

export default InputComponent
