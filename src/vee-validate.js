import { extend, localize } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'
import tr from 'vee-validate/dist/locale/tr.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)

localize('tr', tr)
