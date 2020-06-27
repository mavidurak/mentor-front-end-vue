import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Datatable from 'vue2-datatable-component'
import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './vee-validate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(Datatable) // done!
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
