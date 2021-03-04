import { IPatern } from './types'

export interface IState {
  primes: IPatern[] | any[]
  primeLoading: boolean
}

export interface IResult {
  key: string | null
  value: string | null
  selected: string | null
  fullLine: string | null
}
