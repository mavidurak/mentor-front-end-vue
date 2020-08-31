<template>
  <div>
    <div class="row text-center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="text-center">
                  <img src="../../assets/mavidurak-io-logo.png" class="rounded" id="logo" alt="Mavidurak-io Logo">
        </div>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <div class="card">
              <div class="card-body">
                <h4>Kaydol</h4>
                <form class="text-left" @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="inputMail">E-Mail :</label>
            <validation-provider name="email" rules="required|email" v-slot="{ errors }">
              <input
                type="text"
                class="form-control"
                id="inputMail"
                v-model="email"
                placeholder="Mail giriniz"
              />
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="inputUsername">Kullanıcı Adı :</label>
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
                  placeholder="Kullanıcı adı girinz"
                />
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="inputname">Ad Soyad :</label>
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
                  placeholder="Ad Soyad  giriniz"
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
                  placeholder="Şifre giriniz"
                />
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <button
              type="submit"
              name="submitButton"
              id="submitButton"
              class="btn btn-success float-right"
              :disabled="invalid"
            >Kaydol</button>
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
      Axios
        .post(
          'http://localhost:4000/authentications/register/',
          {
            username: this.username,
            password: this.password,
            email: this.email,
            name: this.name
          }
        ).then(respose => {
          if (respose.status === 201) {
            localStorage.setItem('X-AccessToken', respose.data.token.token_value)
            location.assign('/')
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
