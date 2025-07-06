

export const urlService = {
    isvalid: isUrl,
    isUrl: isUrl,
    toUrl: toUrl
}


function isUrl(value) {
    /**
     * Checks if a value is a URL
     * @param {*} value - The value to check
     * @returns {Boolean} - True if the value is a URL, false otherwise
     * @example isUrl('https://www.google.com') // true
     */

    let result
    let isValid

    // Input validation
    let c1 = value !== undefined
    let c2 = typeof value === 'string'

    isValid = c1 && c2 
    if(isValid === false){
        return false
    }

    // Input test
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    result = urlRegex.test(value);

    // return
    return result

}

function toUrl(inputValue, defaultValue) {
    /**
     * Converts a value to a URL
     * @param {*} value - The value to convert
     * @returns {String} - The URL
     * @example toUrl('https://www.google.com') // 'https://www.google.com'
     */

    // 

    let result 
    let value = inputValue
    let isValid = true
    let errorMessage = 'Invalid Url: '

    // Input validation
    let c1 = value !== undefined
    let c2 = typeof value === 'string'

    isValid = c1 && c2 

    // Process input
    if(isValid === true){
        try {

            value = value.trim()
            result = String(new URL(value))

        } catch (err){
            isValid = false
        }
    }

    // Final validity check
    isValid = isUrl(result) 

    // Return result
    if(isValid === false){
        if(!defaultValue){
            throw(errorMessage + String(value))
        }       
        return defaultValue
    }


    return result
}

