<template>
  <div>
    <div class="row text-center">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h6>Login Page</h6>
                  <ValidationObserver ref="form" v-slot="{ invalid }">
        <form class="text-left" @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="inputUsername">Kullanıcı Adı : </label>
             <validation-provider name="username" rules="required" v-slot="{ errors }">
           <input
              type="text"
              class="form-control"
              id="inputUsername"
              v-model="username"
              placeholder="Kullanıcı adı girinz"
            /> <span>{{ errors[0] }}</span>
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
              placeholder="Şifre giriniz"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
            <router-link to="/forgot-password">Forgot your password?</router-link>
          </div>
         <button
            type="submit"
            name="submitButton"
            id="submitButton"
            class="btn btn-success"
            :disabled="invalid"
          >Kaydol</button>

        </form>
        </ValidationObserver>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VueCookies from 'vue-cookies'

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
    }
  }
}
</script>
