<template>
  <div>
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="text-center">
                  <img src="../../assets/mavidurak-io-logo.png" class="rounded" id="logo" alt="Mavidurak-io Logo">
        </div>
        <ValidationObserver ref="form" v-slot="{ invalid }">
          <div class="card">
            <div class="card-body">
              <h4>Giriş</h4>
              <form class="text-left" @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="inputUsername">Kullanıcı Adı : </label>
             <validation-provider name="username" rules="required" v-slot="{ errors }">
           <input
              type="text"
              class="form-control"
              id="inputUsername"
              v-model="username"
              autocomplete="off"
            /> <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
             <validation-provider name="password" rules="required" v-slot="{ errors }">
           <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="password"
            /> <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
            <router-link to="/forgot-password" class="d-block">Forgot your password?</router-link>
          </div>
         <button
            type="submit"
            name="submitButton"
            id="submitButton"
            class="btn btn-success float-right"
            :disabled="invalid"
          >Giriş</button>
           <router-link to="/signup">
            <button class="btn btn-outline-primary float-right mr-2">Kayıt Ol</button>
          </router-link>
        </form>
            </div>
          </div>
        </ValidationObserver>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VueCookies from 'vue-cookies'
import router from '../../router'

export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      console.log('Username : ' + this.username + ' Password : ' + this.password)
      VueCookies.set('Token', this.username)

      router.push('/home')
    }
  },

  created: () => {
    document.body.className = 'login-home'
  }
}
</script>

<style>
.login-home {
  height: 100vh;
  background-color: #eee;
}
#logo {
  max-width: 150px;
}
</style>
