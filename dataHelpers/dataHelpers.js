

import { urlService} from './src/url/url.service.js'
import { emailService} from './src/email/email.service.js'
import { dateService} from './src/date/date.service.js'
import { arrayService} from './src/array/array.service.js'


export const dataHelpers = {
    url: urlService,
    email: emailService,
    date: dateService,
    array: arrayService
}




