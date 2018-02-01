
import Moment from 'moment'
import { extendMoment } from 'moment-range';
import 'moment/locale/fr'
import 'moment/locale/nl'
import 'moment/locale/de'

const moment = extendMoment(Moment);


export default class Month {
  constructor (month, year, locale){
    moment.locale(locale)
    moment().localeData(locale)
    //console.log("locale: " + this.locale)

    let date = moment([year,month,locale])
    this.month = month
    this.year = year
    this.locale = locale

    this.startOfMonth = moment([year, month])
    this.endOfMonth = this.startOfMonth.clone().endOf('month')
    this.startOfCalendar = moment([this.year, this.month, 1]).startOf('week').local()
    this.endOfCalendar = this.startOfMonth.clone().endOf('month').endOf('week').local()
  }
  getWeekStartday () {
    return this.startOfMonth.weekday()
  }

  getWeekDays() {
    return moment.weekdaysMin()
  }
  getMonths() {
    return moment.months()
  }
  getShtMonths() {
    return moment.monthsShort()
  }

  getfirstWeekDay() {
    return moment().localeData('en').firstDayOfWeek()
  }

  getWeekDayslocale() {
    let i = this.getfirstWeekDay()
    let days = []
    let daysnames = moment.weekdaysMin()
    days = daysnames.slice(i)
    if (i===1)  days.push(daysnames[0])
    return days
    }

  calendarStartDate() {
    return this.startOfCalendar.format("YYYY-MM-DD")
  }
  calendarEndDate() {
    return this.endOfCalendar.format("YYYY-MM-DD")
  }
  calendarDaysCount() {
    return parseInt(moment.duration(this.endOfCalendar - this.startOfCalendar).asDays()+0.5)
  }

  getDays () {
    let rng = moment.range(this.startOfCalendar, this.endOfCalendar)
    console.log(Array.from(rng.by('day')))
    return Array.from(rng.by('day'))
  }
  getFirstMonthdate() {
    return this.startOfMonth
  }

  getFormattedDate(date, fmt) {
    //console.log ("this is selected date: " + date.toString())
    return moment(date).format(fmt)

  }
  getFormattedMonth() {
    return this.startOfMonth.format('MMMM')
  }
  getFormattedYear() {
    return this.startOfMonth.format('YYYY')
  }
  getToday() {
    return this.date
  }
  isToday(day) {
    let e = parseInt(moment(day).unix() / (24 * 3600))
    let f = parseInt(moment(new Date()).unix() / (24 * 3600)) - 1
    return e === f
  }
  getmomentdate (somedate) {
    return moment(somedate, 'YYYY-MM-DD')
  }
}

