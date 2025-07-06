

export const emailService = {

    isValid: isEmail,
    isEmail, isEmail,
    toEmail: toEmail,
    
    
}


function isEmail(value) {
    /**
     * Checks if a value is an email
     * @param {*} value - The value to check
     * @returns {Boolean} - True if the value is an email, false otherwise
     * 
     */

    //
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    result = emailRegex.test(value);

    // Return 
    return result

}

function toEmail(inputValue, defaultValue) {
    /**
     * Converts a value to an email
     * @param {*} value - The value to convert
     * @returns {String} - The email
     * @example toEmail('john.doe@gmail.com') // 'john.doe@gmail.com'
     */

    let result 
    let value = inputValue
    let isValid = true
    let errorMessage = 'Invalid Email: '

    // Input validation
    let c1 = value !== undefined
    let c2 = typeof value === 'string'

    isValid = c1 && c2 

    // Process input
    if(isValid === true){
        try {

            value = value.trim()
            let username = value.split('@')[0]
            let domain = value.split('@')[1]
            domain = domain.toLowerCase()
            result = [username, value].join('@')

        } catch (err){
            isValid = false
        }
    }

    // Final validity check
    isValid = isEmail(result)

    // Return result
    if(isValid === false){
        if(!defaultValue){
            throw(errorMessage + String(value))
        }       
        return defaultValue
    }


    return result


}