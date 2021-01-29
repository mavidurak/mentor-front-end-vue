<template>
  <div>
    <div class="up-background"></div>
    <div class="container">
      <div class="row text-center mt-5 justify-content-center ">
        <div class="col-lg-6 border rounded bg-light shadow-lg mt-5 px-3">
          <h5 class="mb-3">Change Password</h5>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <form class="text-left" @submit.prevent="onSubmit()">
              <PasswordInput v-model='password'/>
              <PasswordInput title='New Password:' v-model='newPassword'/>
              <PasswordInput title='New Password Again: ' v-model='confirmPassword'/>
              <button
                type="submit"
                name="submitButton"
                id="submitButton"
                class="btn btn-success"
                :disabled="invalid"
              >Change</button>
            </form>
          </ValidationObserver>
          <div id="success" class="mt-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import PasswordInput from '@/components/input/Password'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'ChangePassword',
  components: {
    ValidationObserver,
    PasswordInput
  },
  data: () => {
    return {
      password: '',
      newPassword: '',
      confirmPassword: '',
      message: '',
      errors: []
    }
  },
  methods: {
    onSubmit: function () {
      if (this.confirmPassword === this.newPassword && this.newPassword.length >= 8 && this.newPassword.length <= 30) {
        axios
          .patch(
            '/authentications/me/',
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
            if (response.status === 200) {
              swal({
                title:
                  'Your password has been successfully changed.',
                icon: 'success'
              }).then((isOk) => {
                this.$router.push('/profile')
              })
            }
          })
          .catch((err) => {
            if (err.response.status === 401 || err.response.status === 400) {
              swal({
                title:
                  err.response.data.message,
                icon: 'error'
              })
            }
          })
      } else {
        this.message = 'New Password not Matching or New Password must be min 8 max 30 character'
      }
    }
  }
}
</script>
<style>
.up-background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(153,240,194);
  background: linear-gradient(180deg, rgba(153,240,194,1) 0%, rgba(58,90,91,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
