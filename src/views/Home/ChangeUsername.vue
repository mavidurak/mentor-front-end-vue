<template>
  <div>
    <div class="up-background"></div>
    <div class="container">
      <div class="row text-center mt-5 justify-content-center">
        <div class="col-lg-6 border rounded bg-light shadow-lg mt-5 px-3">
          <h5 class="mb-3">Change Username</h5>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <form class="text-left" @submit.prevent="onSubmit()">
              <div class="form-group">
                <label for="inputNewUsername">New Username</label>
                <validation-provider name="newUsername" rules="required" v-slot="{ errors }">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNewUsername"
                    v-model="newUsername"
                    placeholder="Enter Your New Username"
                  />
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <validation-provider name="password" rules="required" v-slot="{ errors }">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    v-model="password"
                    placeholder="Enter Your Password"
                  />
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'ChangeUsername',
  components: {
    ValidationProvider,
    ValidationObserver
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
                  'Your username has been successfully changed.',
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
