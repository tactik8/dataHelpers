

import { addressService } from './src/address/address.service.js'
import { arrayService } from './src/array/array.service.js'
import { dateService } from './src/date/date.service.js'
import { emailService } from './src/email/email.service.js'
import { nullService } from './src/null/null.service.js'
import { phoneService } from './src/phone/phone.service.js'
import { stringService } from './src/string/string.service.js'
import { urlService } from './src/url/url.service.js'
import { uuidService } from './src/uuid/uuid.service.js'

export const dataHelpers = {
    address: addressService,
    array: arrayService,
    date: dateService,
    email: emailService,
    null: nullService,
    phone: phoneService,
    string: stringService,
    url: urlService,
    uuid: uuidService,

}




import { arrayService } from './src/array/array.service.js';
import { dateService } from './src/date/date.service.js';
import { nullService } from './src/null/null.service.js';
import { addressService } from './src/address/address.service.js';
import { phoneService } from './src/phone/phone.service.js';

export const dataHelpers = {
    array: arrayService,
    date: dateService,
    null: nullService,
    address: addressService,
    phone: phoneService,
    email: {
        isValid: (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
};
