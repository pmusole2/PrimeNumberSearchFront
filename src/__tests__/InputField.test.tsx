import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import InputComponent, { Props } from '../components/InputComponent'

const middlewares = [thunk]

function renderInputComponent(props: Partial<Props> = {}) {
  const initialState = {}
  const mockStore = configureStore(middlewares)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let store, wrapper
  store = mockStore(initialState)
  const defaultProps: Props = {
    onChangeInput() {
      return
    },
    onSubmit() {
      return
    },
  }
  return render(
    <Provider store={store}>
      <InputComponent {...defaultProps} {...props} />
    </Provider>
  )
}

describe('<InputComponent />', () => {
  test('Should display an input field that allows not less and not more than three numbers only', async () => {
    const { findByTestId } = renderInputComponent()
    const searchForm = await findByTestId('search-form')
    expect(searchForm).toHaveFormValues({
      input: '',
    })
  })
  test('Show allow entering only 3 numbers', async () => {
    const onChangeInput = jest.fn()
    const { findByTestId } = renderInputComponent({ onChangeInput })

    const numberInput = await findByTestId('number-input')
    fireEvent.change(numberInput, { target: { value: '302' } })
    expect(onChangeInput).toBeCalledWith('302')
  })

  test('should submit the form with user entered numbers', async () => {
    const onSubmit = jest.fn()
    const { findByTestId } = renderInputComponent({ onSubmit })
    const numberInput = await findByTestId('number-input')
    const submit = await findByTestId('submit')

    fireEvent.change(numberInput, { target: { value: '105' } })
    fireEvent.click(submit)

    expect(onSubmit).toHaveBeenCalledWith('105')
  })
})
