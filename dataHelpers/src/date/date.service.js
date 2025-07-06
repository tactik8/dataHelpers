
export const dateService = {
    isValid: isDate,
    isDate: isDate,
    toDate: toDate,
    duration: duration,
    toString: toString,
}


function isDate(value) {
    return value instanceof Date
}

function toDate(value, defaultValue) {

    try {
        if (isDate(value)) {
            return value
        }
        if (typeof value === 'string') {
            return new Date(value)
        }
        if (typeof value === 'number') {
            return new Date(value)
        }
        if (typeof value === 'object') {
            return new Date(value)
        }
        return null
    } catch (error) {
        return processError('toDate', error, defaultValue)
    }
}

function duration(startTime, endTime, defaultValue){

    try {
        if(isDate(startTime) === false || isDate(endTime) === false){
            return processError('Invalid date', null, defaultValue)
        }
    
        if(startTime > endTime){
            startTime, endTime = endTime, startTime
        }
    
        return (endTime - startTime) / 1000
    } catch (error) {
        return processError('duration', error, defaultValue)
    }
}

function toString(date, defaultValue){
    try{
        if(isDate(date) === false){
            return processError('Invalid date', null, defaultValue)
        }
        return date.toISOString()
    } catch(error){
        return processError('toString', error, defaultValue)
    }
}



// -----------------------------------------------------
//  error processing 
// -----------------------------------------------------



function processError(message, error, defaultValue){
    if(defaultValue !== undefined){
        return defaultValue
    }
    throw(message + ' - ' + String(error))
}
  