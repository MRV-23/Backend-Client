
let date_format = require('dateformat')
let DateDiff = require('date-diff')
let moment = require('moment')
//let moment_timezone = require('moment-timezone')

// Class Datetime
module.exports = class Datetime {
	// Constructor
	constructor() {
		
	}

	// Get now date with format
	now(format = 'yyyy-mm-dd HH:MM:ss') {
		let now = new Date()
		return (format == null) ? now : date_format(now, format)
	}

	// Get now date in timestamp
	timestamp(date = new Date()) {
		return date.getTime()
	}

	// Get date with format
	dateFormat(date, format = 'yyyy-mm-dd HH:MM:ss') {
		date = new Date(date)
		return (format == null) ? date : date_format(date, format)
	}

	dateFormatMoment(date, format = 'YYYY-MM-DD HH:mm:ss') {
		date = new Date(date)
		return moment(date).format(format)
	}

	dateFormatTimezone(date, timezone, format = 'YYYY-MM-DD HH:mm:ss') {
		date = new Date(date)
		return moment(date).tz(timezone).format(format)
	}

	// Get week day string from date
	getDay(date, lang = 'es', signs = true) {

		// Get week day based of en standar
		let days_week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		let day_format = date_format(date, 'ddd')
		let day_index = days_week.indexOf(day_format)

		// Get week day name from lang global variable
		// let days = LANG[lang].datetime.days
		let day = days[day_index]

		if(signs) {
			day.replace(/á/g,'a')
			day.replace(/é/g,'e')
			day.replace(/í/g,'i')
			day.replace(/ó/g,'o')
			day.replace(/ú/g,'u')
		}

		return day
	}

	// Get monnth name
	getMonth(date, lang) {

		// Get month name from lang global variable
		// return LANG[lang].datetime.months[date.getMonth()]
	}

	// Get days difference from date1 to date2
	differenceInDays(date1, date2 = new Date(), ceil = true) {

		let difference = new DateDiff(date1, date2)

		if(ceil) {
			return Math.ceil(difference.days())
		}
		else {
			return difference.days()
		}
	}

	// Get hours difference from date1 to date2
	differenceInHours(date1, date2 = new Date(), ceil = true) {

        return moment(date2).diff(date1, 'hours')

		// let difference = new DateDiff(date1, date2)

		// if(ceil) {
		// 	return Math.ceil(difference.hours())
		// }
		// else {
		// 	return difference.hours()
		// }
	}

	// Get minutes difference from date1 to date2
	differenceInMinutes(date1, date2 = new Date(), ceil = true) {

        return moment(date2).diff(date1, 'minutes')


		// let difference = new DateDiff(date1, date2)

		// if(ceil) {
		// 	return Math.ceil(difference.minutes())
		// }
		// else {
		// 	return difference.minutes()
		// }
	}

	// Add seconds to date
	addSeconds(date, seconds) {
		seconds = Number(seconds)
		date = new Date(date)
		return new Date(date.setSeconds(date.getSeconds() + seconds))
	}

	// Add minutes to date
	addMinutes(date, minutes) {
		minutes = Number(minutes)
		date = new Date(date)
		return new Date(date.setMinutes(date.getMinutes() + minutes))
	}

	// Add hours to date
	addHours(date, hours) {
		hours = Number(hours)
		date = new Date(date)
		return new Date(date.setHours(date.getHours() + hours))
	}

	// Add days to date
	addDays(date, days) {
		date = new Date(date)
		return new Date(date.setDate(date.getDate() + days))
	}

	// Add months to date
	addMonths(date, months) {
		date = new Date(date)
		return new Date(date.setMonth(date.getMonth() + months))
	}
	
	// Add years to date
	addYears(date, years) {
		date = new Date(date)
		return new Date(date.setYear(date.getFullYear() + years))
	}

	// Delete days to date
	removeDays(date, days) {
		date = new Date(date)
		return new Date(date.setDate(date.getDate() - days))
	}

	// Delete minutes to date
	removeMinutes(date, minutes) {
		date = new Date(date)
		return new Date(date.setMinutes(date.getMinutes() - minutes))
	}

	// Remove months to date
	removeMonths(date, months) {
		date = new Date(date)
		return new Date(date.setMonth(date.getMonth() - months))
	}

    removeYears(date, years) {
		date = new Date(date)
		return new Date(date.setMonth(date.getFullYear() - years))
	}

	lastDayMonth(year, month) {
	//	date = new Date(year)
		return new Date(year, month, 0).getDate();
	}

	secondsFromTime(time) {
		const time_components = time.split(':')

		const hour = parseInt(time_components[0])
		const minutes = parseInt(time_components[1])
		const seconds = parseInt(time_components[2])

		return (hour * 60 * 60) + (minutes * 60) + seconds
	}
}
