import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Datatable from 'vue2-datatable-component'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './vee-validate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Notifications from 'vue-notification'
import Gravatar from 'vue-gravatar'
import HomeNav from '@/views/Layouts/HomeNav'
import None from '@/views/Layouts/None'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.component('home-nav-layout', HomeNav)
Vue.component('none-layout', None)

Vue.component('v-gravatar', Gravatar)

Vue.config.productionTip = false

Vue.use(Notifications)
Vue.use(Datatable) // done!

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
