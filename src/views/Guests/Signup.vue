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
                <UsernameInput v-model='username'/>
                <PasswordInput v-model='password'/>
                <FullnameInput v-model='name'/>
                <EmailInput v-model='email'/>
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
import { ValidationObserver } from 'vee-validate'
import Axios from 'axios'
import swal from 'sweetalert'
import UsernameInput from '@/components/input/Username'
import PasswordInput from '@/components/input/Password'
import FullnameInput from '@/components/input/Fullname'
import EmailInput from '@/components/input/Email'

export default {
  name: 'Signup',
  components: {
    ValidationObserver,
    UsernameInput,
    PasswordInput,
    FullnameInput,
    EmailInput
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
      console.log(this.username)
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
            const errorText = err.response.data.error
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
