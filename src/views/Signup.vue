<template>
  <div>
    <div class="row text-center">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h6>Signup Page</h6>
          <ValidationObserver ref="form" v-slot="{ invalid }">
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
            <validation-provider name="username" rules="required|min:3|max:20" v-slot="{ errors }">
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
            <validation-provider name="password" rules="required|min:8|max:16"  v-slot="{ errors }" :bails="false">
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
        </form>  </ValidationObserver>

      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

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
      errors: []
    }
  },
  methods: {
    onSubmit: function () {
      console.log(
        'Mail : ' +
          this.email +
          'Username: ' +
          this.username +
          'Password: ' +
          this.password
      )
    }
  }
}
</script>

<style scoped>
</style>
