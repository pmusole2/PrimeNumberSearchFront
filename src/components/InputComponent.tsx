import React from 'react'
import { useDispatch } from 'react-redux'
import { searchForPrime } from '../store/actions/primeActions'
import '../styles/inputComponentStyles.scss' //Commented out of previous commit because of errors when running unit tests
import makeToast from '../utils/Toaster'

const numberRegex = /^[0-9\b]+$/

export interface Props {
  onChangeInput: (input: string) => void
  onSubmit: (input: string) => void
}

const InputComponent = (props: Props) => {
  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const onChangehandler: (e: any) => void = e => {
    let numbers = e.target.value
    if (numbers === '' || numberRegex.test(numbers)) {
      setInput(numbers)
      props.onChangeInput(numbers)
    }
  }
  return (
    <form className='main-form' data-testid='search-form'>
      <div className='input-container'>
        <input
          type='text'
          name='input'
          value={input}
          data-testid='number-input'
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
            props.onSubmit(input)
            setInput('')
          }}
          className='submit'
          data-testid='submit'
        >
          SEARCH
        </button>
      </div>
    </form>
  )
}

export default InputComponent
