<template>
  <div>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h6>Change Password Page</h6>
        <ValidationObserver ref="form" v-slot="{ invalid }">
        <form class="text-left" @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="inputPassword">Eski Parola</label>
             <validation-provider name="password" rules="required" v-slot="{ errors }">
           <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="password"
              placeholder="Eski şifrenizi girin"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="inputNewPassword">Yeni Parola</label>
             <validation-provider name="newPassword" rules="required" v-slot="{ errors }">
           <input
              type="password"
              class="form-control"
              id="inputNewPassword"
              v-model="newPassword"
              placeholder="Yeni şifrenizi girin"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>
           <div class="form-group">
            <label for="inputConfirmPassword">Yeni Parola</label>
             <validation-provider name="confirmPassword" rules="required" v-slot="{ errors }">
           <input
              type="password"
              class="form-control"
              id="inputConfirmPassword"
              v-model="confirmPassword"
              placeholder="Yeni şifrenizi girin"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>
         <button
            type="submit"
            name="submitButton"
            id="submitButton"
            class="btn btn-success"
            :disabled="invalid"
          >Değiştir</button>

        </form>
        </ValidationObserver>
        <div id="success" class="mt-3"></div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import axios from 'axios'

export default {
  name: 'ChangePassword',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      password: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit: function () {
      if (this.confirmPassword === this.newPassword) {
        axios
          .post('/user/',
            {
              password: this.password,
              newPassword: this.newPassword
            },
            {
              headers: {
                'X-AccessToken': localStorage.getItem('X-AccessToken'),
                'Content-Type': 'application/json'
              }
            }
          )
          .then((response) => {
            console.log('Success' + response.data)
          })
          .catch((err) => {
            if (err.response.status === 401) {
              console.log(this.user)
            }
          })
      }
    }
  }
}
</script>
