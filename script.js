
import { dataHelpers } from './dataHelpers/dataHelpers.js'


let value = 'john.doe@gmail.com'
let result = dataHelpers.email.isValid(value)
console.log(result)