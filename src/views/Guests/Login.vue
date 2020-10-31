<template>
  <div id="login" style="height: 100vh">
    <v-container fluid class="fill-height">
      <v-row class="d-flex fill-heigt justify-center" align="center">
        <v-col sm="12" md="8" lg="6">
          <v-card>
            <v-row class="justify-center">
              <v-col cols="auto">
                <img
                  height="150"
                  :src="logoPath"
                  contain
                />
              </v-col>

              <v-col class="d-flex justify-center" cols="12">
                <h3>Login</h3>
              </v-col>

              <v-alert
                v-if="errorMessage"
                class="flex-grow"
                dismissible
                type="error"
              >{{ errorMessage }}</v-alert>

              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  name="username"
                  label="Username"
                  class="mx-3"
                  autocomplete="false"
                  :error="errorMessage ? true : false"
                  prepend-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  :type="isPasswordShown ? 'text' : 'password'"
                  class="mx-3"
                  autocomplete="false"
                  :error="errorMessage ? true : false"
                  prepend-icon="mdi-key"
                  :append-icon="isPasswordShown ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="isPasswordShown = !isPasswordShown"
                ></v-text-field>

                <v-col cols="12" class="px-3">
                  <router-link to="/forgot-password" class="d-block">Forgot password</router-link>

                  <span>Do you have an account?
                    <router-link to="/signup" >Click here</router-link>
                  </span>
                </v-col>

                <div class="d-flex mx-2">
                  <v-btn color="success" block dark @click="onSubmit">Sign In</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: '',
      isPasswordShown: false,
      logoPath: require('@/assets/mavidurak-io-logo.png'),
      errorMessage: ''
    }
  },

  methods: {
    onSubmit () {
      if (!this.username || !this.password) {
        this.errorMessage = 'Password and username fields are required.'

        return
      }

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

          if (err.response.data.error !== undefined) {
            swal({
              title: 'Validation Failed!',
              text: err.response.data.error.details[0].message,
              icon: 'error'
            })
          }
        })
    }
  }
}
</script>

<style>
.justify-center {
  justify-content: center;
}
</style>
