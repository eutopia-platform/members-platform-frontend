import { format, parse } from 'date-fns'
import en from 'date-fns/locale/en'

export const formatDate = date =>
  format(date, 'MM/DD/YYYY', {
    locale: en,
  })

export const parseDate = str => parse(str)
