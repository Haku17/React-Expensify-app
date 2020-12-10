import moment from 'moment'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('Should generate sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('Should generate sort by date action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('Should set text filter action object', () => {
  const action = setTextFilter('test')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: 'test'
  })
})

test('Should set text filter default action object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: ''
  })
})