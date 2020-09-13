import { extend } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
