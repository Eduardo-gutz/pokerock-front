import { useCallback, useEffect, useState } from "react";
import { Months, WeekDays } from "./enums/useDate.enum";

export interface UseDateOptions {
  typeMonth: 'short' | 'long'
  typeWeekDay: 'short' | 'long'
  typeHour: 12 | 24
}

export interface ObjectDate {
  date: number
  month: string
  weekDay: string
  year: number
  hour: string
  hourFormat: string
  minutes: string
  seconds: string
  milliSec: number
}

const defaultOptions: UseDateOptions = {
  typeMonth: 'long',
  typeWeekDay: 'long',
  typeHour: 24
}

const useDate = (date: Date | number | string, options = defaultOptions) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [objectDate, setObjectDate] = useState<ObjectDate>({
    date: 0,
    month: '',
    weekDay: '',
    year: 0,
    hour: '',
    hourFormat: '',
    minutes: '',
    seconds: '',
    milliSec: 0
  });

  const getHour = useCallback((hour: number): { hour: number, format: string } => {
    return options.typeHour === 12 ?
      hour > 12 ?
        { hour: hour - 12, format: 'pm' } :
        { hour, format: 'am' } :
      { hour, format: 'hrs' }
  }, [options.typeHour])

  const parseDate = useCallback(() => {
    const date = currentDate.getDate()
    const monthDate = currentDate.getMonth()
    const weekDayDate = currentDate.getDay()
    const year = currentDate.getFullYear()
    const hourDate = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const milliSec = currentDate.getMilliseconds()

    const month = options.typeMonth === 'long' ? Object.keys(Months)[monthDate] : Object.values(Months)[monthDate]
    const weekDay = options.typeWeekDay === 'long' ? Object.keys(WeekDays)[weekDayDate] : Object.values(WeekDays)[weekDayDate]

    const hourWitheFormat = getHour(hourDate)

    setObjectDate({
      date,
      month,
      weekDay,
      year,
      hour: hourWitheFormat.hour < 10 ? `0${hourWitheFormat.hour}` : `${hourWitheFormat.hour}`,
      hourFormat: hourWitheFormat.format,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      milliSec
    })

  }, [currentDate, getHour, options.typeMonth, options.typeWeekDay])

  /**
   * Funcion para validar si una fecha tipo string o number es valida o no
   * @param {string | number} date Fecha en formato ISO o epoch
   * @returns {Date | null} Si la fecha es valida ya sea en formato ISO o epoch devuelve un Date de lo contrario devuelve un null
   */
  const validateDate = useCallback((date: string | number): Date | null => {
    const regex = /^(\d{4})(-(\d{2}))(-(\d{2}))??(T(\d{2}):(\d{2})(:(\d{2}))??(\.(\d+))??(([+-]{1}\d{2}:\d{2})|Z)??)$/ // Expresion regular para fecha el formato ISO (YYYY-MM-DDTHH:SS:MM)
    const regexEpoch = /^\d{13}$/ // Expresion regular para verificar una fecha en formato epoch

    let validate: Date = new Date(date);

    if (typeof date === 'string') {
      if (!date.match(regex)) {
        validate = new Date(`${date.split('T')[0]}T00:00:00`)
      }
    } else if (typeof date === 'number') {
      if (!date.toString().match(regexEpoch)) {
        validate = new Date(date * 1000)
      }
    }

    return !isNaN(validate.getTime()) ? validate : null
  }, [])

  /**
   * Fucnion para setear una fecha al hook se valida si la fecha que se envia es valida en el caso contrario se setea la fecha actual
   * @param {Date | strign | number} date recive una fecha de tipo string en formato ISO, o tipo number en formato Epoch o un objeto Date
   */
  const setDate = useCallback((date: Date | string | number) => {
    if (typeof date === 'object') {
      setCurrentDate(new Date(date))
      return
    }

    const validDate = validateDate(date)
    if (validDate) {
      setCurrentDate(validDate)
      return
    }
  }, [validateDate]);

  useEffect(() => {
    setDate(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDate])

  useEffect(() => {
    parseDate()
  }, [parseDate])

  return { objectDate, setDate }
}

export default useDate;