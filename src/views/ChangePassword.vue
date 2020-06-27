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

export default {
  name: 'ChangePassword',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      truePassword: '123',
      password: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit: function () {
      if (this.password === this.truePassword) {
        if (this.newPassword === this.confirmPassword) {
          this.truePassword = this.newPassword
          console.log('Old Password : ' + this.password + ' New Password : ' + this.newPassword)
          document.getElementById('success').innerHTML = 'Şifreniz başarıyla değiştirildi'
        } else {
          document.getElementById('success').innerHTML = 'Parolalar uyuşmuyor'
        }
      } else {
        document.getElementById('success').innerHTML = 'Parolala hatalı'
      }
    },
    switchLog: function () {
      // switch the locale.
      this.locale = this.locale === 'en' ? 'tr' : 'en'
      // you could also import 'localize' and call it.
      // localize('ar');

      // re-validate to re-generate the messages.
      this.$refs.form.validate()
    }
  }
}
</script>
