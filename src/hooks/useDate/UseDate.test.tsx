import { act, renderHook } from "@testing-library/react"
import useDate, { UseDateOptions } from "./UseDate"

describe('use Date', () => {
  const date = new Date('2022-11-19T13:00:00')
  const dateObject = {
    date: 19,
    month: "November",
    weekDay: "Saturday",
    year: 2022,
    hour: '13',
    hourFormat: "hrs",
    minutes: '00',
    seconds: '00',
    milliSec: 0
  }

  const options: UseDateOptions = {
    typeMonth: 'short',
    typeWeekDay: 'long',
    typeHour: 12
  }
  
  test('should correctly display the object with the default options', () => {
    const { result } = renderHook(() => useDate(date))

    expect(result.current.objectDate).toEqual(dateObject)
  })
  
  test('should correctly display the object with abbrebiate month & 12-hours format', () => {
    const { result } = renderHook(() => useDate(date, options))

    const dateObjectInner = {
      ...dateObject,
      month: "Nov",
      hour: '01',
      hourFormat: "pm"
    }

    expect(result.current.objectDate).toEqual(dateObjectInner)
  })

  test('should correctly display the object with string date format YYYY-MM-DDTHH:SS', () => {
    const date = '2022-11-19T13:00:00'
    const { result } = renderHook(() => useDate(date))

    expect(result.current.objectDate).toEqual(dateObject)
    
  })
  
  test('should correctly display the object with string date format YYYY-MM-DD', () => {
    const date = '2022-11-19'
    const { result } = renderHook(() => useDate(date))

    const dateObjectInner = {
      ...dateObject,
      hour: '00',
    }

    expect(result.current.objectDate).toEqual(dateObjectInner)
  })
  
  test('should correctly display the object with epoch date', () => {
    const date = 1668837600
    const { result } = renderHook(() => useDate(date))

    const dateObjectInner = {
      ...dateObject,
      hour: '00',
    }

    expect(result.current.objectDate).toEqual(dateObjectInner)
  })
  
  test('should correctly display the object with epoch date full', () => {
    const date = 1668837600000
    const { result } = renderHook(() => useDate(date))

    const dateObjectInner = {
      ...dateObject,
      hour: '00',
    }
    
    expect(result.current.objectDate).toEqual(dateObjectInner)
  })
  
  test('debe mostrar correectamente la fecha al setear una fecha el proceso de ejecucion', () => {
    const { result } = renderHook(() => useDate(date))

    expect(result.current.objectDate).toEqual(dateObject)
    
    const dateToSet = '2023-01-12T14:09:00'
    const newDateObject = {
      date: 12,
      month: "January",
      weekDay: "Thursday",
      year: 2023,
      hour: '14',
      hourFormat: "hrs",
      minutes: '09',
      seconds: '00',
      milliSec: 0
    }
    
    act(() => {
      result.current.setDate(dateToSet)
    })
    
    expect(result.current.objectDate).toEqual(newDateObject)
  })
  
  test('invalid Date', () => {
    const date = 'wpoieruwoti'
    const { result } = renderHook(() => useDate(date))

    expect(result.current.objectDate.date).toEqual(new Date().getDate())
    expect(result.current.objectDate.year).toEqual(new Date().getFullYear())
  })
})