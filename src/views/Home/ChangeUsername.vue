<template>
  <div>
    <div class="up-background"></div>
    <div class="container">
      <div class="row text-center mt-5 justify-content-center">
        <div class="col-lg-6 border rounded bg-light shadow-lg mt-5 px-3">
          <h5 class="mb-3">Change Username</h5>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <form class="text-left" @submit.prevent="onSubmit()">
              <TextInputGenerator v-model='newUsername' title='New Username' rules='required|min:3|max:20' type='text'/>
              <TextInputGenerator v-model='password' title='Password' rules='required|min:8|max:16' type='password'/>
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
import TextInputGenerator from '@/components/input/TextInputGenerator'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'ChangeUsername',
  components: {
    ValidationObserver,
    TextInputGenerator
  },
  data: () => {
    return {
      password: '',
      newUsername: '',
      message: '',
      errors: []
    }
  },
  methods: {
    onSubmit: function () {
      axios
        .patch(
          '/authentications/me/',
          {
            password: this.password,
            newUsername: this.newUsername
          }).then((response) => {
          if (response.status === 200) {
            swal({
              title:
                  'Your username has been successfully changed.',
              icon: 'success'
            }).then((isOk) => {
              this.$router.push('/profile')
            })
          }
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 400) {
            const message = err.response.data.errors
              .map(e => e.message)
              .join('<br/>')
            const content = document.createElement('div')
            content.innerHTML = message
            swal({
              title: 'Error!',
              content,
              icon: 'error'
            })
          }
        })
    }
  }
}
</script>
<style>
.up-background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(153, 240, 194);
  background: linear-gradient(
    180deg,
    rgba(153, 240, 194, 1) 0%,
    rgba(58, 90, 91, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
