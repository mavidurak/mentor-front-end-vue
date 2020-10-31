<template>
  <div>
    <div class="row text-center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="text-center">
          <img
            src="@/assets/mavidurak-io-logo.png"
            class="rounded"
            id="logo"
            alt="Mavidurak-IO Logo"
          />
        </div>
        <ValidationObserver ref="form" v-slot="{ invalid }">
          <div class="card">
            <div class="card-body">
              <h4>Sign Up</h4>
              <form class="text-left" @submit.prevent="onSubmit()">
                <div class="form-group">
                  <label for="inputUsername">Username:</label>
                  <validation-provider
                    name="username"
                    rules="required|min:3|max:20"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="inputUsername"
                      v-model="username"
                      placeholder="Enter your username"
                    />
                    <span>{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider
                    name="password"
                    rules="required|min:8|max:16"
                    v-slot="{ errors }"
                    :bails="false"
                  >
                    <label for="inputPassword">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      v-model="password"
                      placeholder="Enter your password"
                    />
                    <span>{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <label for="inputname">Fullname:</label>
                  <validation-provider
                    name="name"
                    rules="required|min:3|max:20"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="inputname"
                      v-model="name"
                      placeholder="Enter your fullname"
                    />
                    <span>{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <label for="inputMail">Email:</label>
                  <validation-provider name="email" rules="required|email" v-slot="{ errors }">
                    <input
                      type="email"
                      class="form-control"
                      id="inputMail"
                      v-model="email"
                      placeholder="Enter your email"
                    />
                    <span>{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <router-link class="btn btn-light" to="/login">Back</router-link>
                <button
                  type="submit"
                  name="submitButton"
                  id="submitButton"
                  class="btn btn-success float-right"
                  :disabled="invalid"
                >Sign Up</button>
              </form>
            </div>
          </div>
        </ValidationObserver>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Signup',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      email: '',
      username: '',
      password: '',
      name: '',
      errors: []
    }
  },
  methods: {
    onSubmit: function () {
      Axios.post('/authentications/register/', {
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name
      })
        .then((respose) => {
          if (respose.status === 201) {
            swal({
              title: `Thank you ${this.name}.Your acount has been succesfully created.`,
              text: 'Please check your mailbox.We send a information mail ...',
              icon: 'success'
            }).then((isOk) => {
              this.$router.push('login')
            })
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            const errorText = err.response.data.error.details[0].message
            swal({
              title: 'Error!',
              text: errorText,
              icon: 'error'
            })
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
