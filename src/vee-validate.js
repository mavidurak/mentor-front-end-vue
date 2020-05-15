import Vue from 'vue'
import { extend, localize } from 'vee-validate'
import { required, email, min, max } from 'vee-validate/dist/rules'
import tr from 'vee-validate/dist/locale/tr.json'
import en from 'vee-validate/dist/locale/en.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)

localize({
  en: {
    messages: en.messages,
    names: {
      email: 'E-mail Address',
      password: 'Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password'
    }
  },
  tr: {
    messages: tr.messages,
    names: {
      email: 'Email',
      password: 'Şifre',
      username: 'Kullanıcı adı',
      newPassword: 'Yeni Şifre',
      confirmPassword: 'Şifreyi Doğrula'
    }
  }
})

let LOCALE = 'tr'

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, 'locale', {
  get () {
    return LOCALE
  },
  set (val) {
    LOCALE = val
    localize(val)
  }
})
