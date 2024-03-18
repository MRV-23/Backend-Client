// Required node modules
const validator = require('validator')

// Class Validator
module.exports =  class Validator {

	// Constructor
	constructor() {
		
	}
	
	hasValue(value) {
		return (value !== undefined && value !== null)
	}

	isEmptyString(value) {
		return value.trim() === ''
	}
	
	isUUID(uuid) {
		return validator.isUUID(uuid)
	}

	isNumeric(value) {
		return validator.isNumeric(value)
	}

	isFloat(value, min = null, max = null) {
		let options = new Object()

		if(min !== null) {
			options.min = min
		}

		if(max !== null) {
			options.max = max
		}
		
		return validator.isFloat(value, options)
	}
	
	isString(value, validateEmptyString = true) {
		if(validateEmptyString) {
			return typeof value === 'string' && value.trim() !== ''
		}
		
		return typeof value === 'string'
	}
	
	isInt(value, min = null, max = null) {
		let options = new Object()

		if(min !== null) {
			options.min = min
		}

		if(max !== null) {
			options.max = max
		}

		return validator.isInt(value, options)
	}

	isBoolean(value) {
		return validator.isBoolean(value)
	}

	imageExtension(value) {
		return (value === 'jpg' || value === 'png' || value === 'webp') ? true : false
	}

	isArray(value) {
		return Array.isArray(value)
	}
	
	isObject(value) {
		return Object.prototype.toString.call(value) === '[object Object]'
	}

	isDate(value) {
		return !isNaN((new Date(value)).valueOf())
	}

	isAfter(value) {
		return validator.isAfter(value)
	}

	isEmail(value) {
        console.log('entroismaol')
		return validator.isEmail(value)
	}

    isUsername(value) {
        return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(value)
    }
	
	// isEmail(value) {
	// 	return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value)
	// }

	isRFC(value) {
		return /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(value)
	}
	
	isTag(value, length = 5) {
		const regexp = new RegExp(`^[A-Za-z0-9-]{1,${length}}$`)
		return regexp.test(value)
	}
	
	isBirthday(value) {
		if(!/^[0-9]{2}\/[0-9]{2}$/.test(value)) {
	        return false;    
	    }
	    
	    let birthday_components = value.split('/')
	    let day = parseInt(birthday_components[0])
	    let month = parseInt(birthday_components[1])

	    if(month > 12 || month <= 0 || day > 31 || day <= 0) {
	        return false
	    }
	    
	    if(month == 2 && day > 29) {
	        return false
	    }

	    var monts31 = [1,3,5,7,8,10,12];
	    if(day == 31 && monts31.indexOf(month) == -1) {
	        return false
	    }
	    
	    return true
	}

	isTime(value) {
		return /^(0[0-9]{1}|[0-9]+):(0[0-9]{1}|[0-5]{1}[0-9]{1}):(0[0-9]{1}|[0-5]{1}[0-9]{1})$/.test(value)
	}
	
	isIP(value) {
		return validator.isIP(value)
	}

	isCard(value) {
		return /^[0-9]{7,8}$/.test(value)
	}
	
	isCellphone(value, country_code = true) {
		if(country_code) {
            if(/^\+[0-9]{1,4}\s[0-9]{9,10}$/.test(value)) {
                return /^\+[0-9]{1,4}\s[0-9]{9,10}$/.test(value)
            }
            else if(/^\+[1-9]\d{10,14}$/.test(value)) {
                return /^\+[1-9]\d{10,14}$/.test(value)
            }
            else if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
                return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)
            }
			
		}
		else {
			return /^[0-9]{9,10}$/.test(value)
		}
	}

	isCountryCode(value) {
		return /^\+[0-9]{1,4}$/.test(value)
	}
	
	isLatitude(value) {
		return /^-?([1-8]?\d(?:\.\d{1,})?|90(?:\.0{1,6})?)$/.test(value)
	}

	isLongitude(value) {
		return /^-?((?:1[0-7]|[1-9])?\d(?:\.\d{1,})?|180(?:\.0{1,})?)$/.test(value)
	}
	
	toInt(value) {
		return validator.toInt(value)
	}

	toFloat(value) {
		return validator.toFloat(value)
	}

	toBoolean(value) {
		return validator.toBoolean(value)
	}
	
	toDate(value) {
		return validator.toDate(value)
	}

	hasSecuentialNumbers(value) {
		let secuential = [
	        '012', 
	        '123', 
	        '234', 
	        '345', 
	        '456', 
	        '567', 
	        '678', 
	        '789', 
	        '987', 
	        '876', 
	        '765', 
	        '654', 
	        '543', 
	        '321', 
	        '210'
	    ]

	    for(var s in secuential) {
	        if(value.indexOf(secuential[s]) > -1) {
	            return true;
	        }
	    }

	    return false;
	}
	
	hasRepeatedNumbers(value) {
		return /([0-9])\1{2}/.test(value)
	}

}