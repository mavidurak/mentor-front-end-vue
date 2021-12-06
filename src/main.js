import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Datatable from 'vue2-datatable-component'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './vee-validate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Notifications from 'vue-notification'
import Gravatar from 'vue-gravatar'
import HomeNav from '@/views/Layouts/HomeNav'
import None from '@/views/Layouts/None'
import { configure } from 'vee-validate'
import axios from 'axios'
import swal from 'sweetalert'

Vue.component('home-nav-layout', HomeNav)
Vue.component('none-layout', None)

Vue.component('v-gravatar', Gravatar)

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(Datatable)

const token = localStorage.getItem('X-AccessToken')
axios.interceptors.request.use((config) => {
  config.headers.common['X-AccessToken'] = token
  return config
}, (error) => {
  if (error.response.status === 401) {
    swal(
      'Session expired!',
      'Please sign in again!',
      'error'
    )
  }
  return Promise.reject(error)
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'] // multiple classes per flag!
    // ...
  }
})
