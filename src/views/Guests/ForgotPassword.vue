<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="text-center">
          <img
            src="../../assets/mavidurak-io-logo.png"
            class="rounded"
            id="logo"
            alt="Mavidurak-io Logo"
          />
        </div>
        <div class="card">
          <div class="card-body">
            <form v-show="!isReset" @submit.prevent="onSubmit()">
              <div class="text-center">
                <h4>Forgot your password?</h4>
                <div class="alert alert-warning" role="alert">
                  Don't worry, please enter your mail address.
                  We will send the password reset instructions to the email address for this account.
                  <br />
                  <br />If you don't know the your email address is no longer valid, please
                  <abbr
                    title="Send Mail"
                  >
                    <a href="mailto: mavidurak.io@gmail.com" class="alert-link">Contact Us</a>
                  </abbr>
                  for further assistance.
                </div>
              </div>
              <div>
                <label for="mail">Email Adress</label>
                <input
                  type="email"
                  required
                  v-model="mail"
                  id="mail"
                  class="form-control"
                  placeholder="e.g. name@domain.com"
                />
              </div>
              <div>
                <br />
                <button type="submit" class="btn btn-success float-right">Reset password</button>
              </div>
            </form>
            <div v-show="isReset">
              <br />
              <div class="alert alert-success" role="alert">
                <table>
                  <tr>
                    <th colspan="3">
                      <h3>Successfull</h3>
                      <hr />
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="../../assets/success.svg"
                        alt="success"
                        style="margin: 10px; width: 90px; heigth: 90px;"
                      />
                    </td>
                    <td>
                      <h5>
                        An email has been sent to "
                        <b>{{mail}}</b>".
                      </h5>
                      <h5>Please follow the link in your email to complete your password reset request.</h5>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div v-show="isReset">
              <br />
              <div class="alert alert-danger" role="alert">
                <table>
                  <tr>
                    <th colspan="3">
                      <h3>Error</h3>
                      <hr />
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="../../assets/error.svg"
                        alt="error"
                        style="margin: 10px; width: 90px; heigth: 90px;"
                      />
                    </td>
                    <td>
                      <h5>
                        We are sorry."
                        <b>{{mail}}</b>" is incorrect or the account does not exist.Please enter correct mail address
                      </h5>
                    </td>
                  </tr>
                </table>
              </div>
              <button @click="tryAgain()" class="btn btn-success">Try Again</button>
            </div>
            <router-link to="login">Back to Sing in</router-link>
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      mail: '',
      password: '',
      isReset: false
    }
  },
  methods: {
    onSubmit: function () {
      // isMailCorrect = true => continue
      this.isReset = true
    },
    tryAgain: function () {
      this.isReset = false
      this.mail = ''
      // more code
    }
  },
  created: () => {}
}
</script>
