<template>
  <div>
    <div class="row text-center">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h6>Login Page</h6>
                  <ValidationObserver v-slot="{ invalid }">
<form class="text-left">
          <div class="form-group">
            <label for="inputUsername">Kullanıcı Adı : </label>
             <validation-provider rules="required" v-slot="{ errors }">
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
             <validation-provider rules="required" v-slot="{ errors }">
           <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="password"
              placeholder="Şifre giriniz"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>
         <button
            type="submit"
            name="submitButton"
            id="submitButton"
            class="btn btn-success"
            @click.prevent="onSubmit()" :disabled="invalid"
          >Kaydol</button>
        </form>
        </ValidationObserver>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, max, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Bu alan gerekli'
})

extend('max', {
  ...max,
  message: 'Maximum {length} karakter olmalı'
})

extend('min', {
  ...min,
  message: 'Minimum {length} karakter olmalı'
})

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
    }
  }
}
</script>
