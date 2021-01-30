<template>
  <div>
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="text-center">
          <img
            src="@/assets/mavidurak-io-logo.png"
            class="rounded"
            id="logo"
            alt="MaviDurak-IO Logo"
          />
        </div>
        <ValidationObserver ref="form" v-slot="{ invalid }">
          <div class="card">
            <div class="card-body">
              <h4>Sign In</h4>
              <form class="text-left" @submit.prevent="onSubmit()">
                <TextInputGenerator v-model='username' title='Username' rules='required|min:3|max:20' type='text'/>
                <TextInputGenerator v-model='password' title='Password' rules='required|min:8|max:16' type='password'/>
                  <router-link to="/forgot-password" class="d-block">Forgot your password?</router-link>
                <div class="row justify-content-between mx-1">
                  <router-link to="/signup">
                    <button type="button" class="btn btn-light">Sign up</button>
                  </router-link>
                  <div class="block">
                    <i id="info" v-bind:class="statusClass"></i>
                  </div>
                  <button
                    type="submit"
                    name="submitButton"
                    id="submitButton"
                    class="btn btn-success"
                    :disabled="invalid"
                  >Sign In</button>
                </div>
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
import { ValidationObserver } from 'vee-validate'
import TextInputGenerator from '@/components/input/TextInputGenerator'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Login',
  components: {
    ValidationObserver,
    TextInputGenerator

  },
  data: () => {
    return {
      username: '',
      password: '',
      statusClass: null
    }
  },

  methods: {
    onSubmit: function () {
      axios
        .post('/authentications/login/', {
          username: this.username,
          password: this.password
        })
        .then((respose) => {
          if (respose.status === 200) {
            localStorage.setItem(
              'X-AccessToken',
              respose.data.token.token_value
            )
            this.statusClass = 'fas fa-check fa-2x text-success'
            this.$router.push('/home')
          }
        })
        .catch((err) => {
          swal({
            title: err.response.data.message,
            icon: 'error'
          })
          console.log(err.response.data)
          if (err.response.data.error !== undefined) {
            swal({
              title: 'Validation Failed!',
              text: err.response.data.error.details[0].message,
              icon: 'error'
            })
          }
        })
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
