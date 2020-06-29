<template>
<div class="container">
<div class="row">
  <div class="col-sm"></div>
  <div class="col-sm">
    <form v-show="!isReset" @submit.prevent="onSubmit()">
      <br>
      <div class="alert alert-warning" role="alert">
        <h3><strong>Forgot Password?</strong></h3><hr>
        <h6>Don't worry.Reseting your password is easy.Just tell us the mail address you registered.Then check your mailbox.</h6>
      </div>
      <div>
        <input type="email" required v-model="mail" class="form-control" placeholder="Your Email Address">
      </div>
      <div>
        <br><button type="submit" class="btn btn-success">Reset Password</button>
      </div>
    </form>
    <div v-show="isReset">
      <br>
      <div class="alert alert-success" role="alert">
        <table>
          <tr><th colspan="3"><h3>Successfull</h3><hr></th></tr>
          <tr>
            <td>
              <img src="../assets/success.svg" alt="success" style="margin: 10px; width: 90px; heigth: 90px;">
            </td>
            <td>
              <h5>An email has been sent to "<b>{{mail}}</b>".</h5>
              <h5>Please follow the link in your email to complete your password reset request. </h5>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-show="isReset">
      <br>
      <div class="alert alert-danger" role="alert">
        <table>
          <tr><th colspan="3"><h3>Error</h3><hr></th></tr>
          <tr>
            <td>
              <img src="../assets/error.svg" alt="error" style="margin: 10px; width: 90px; heigth: 90px;">
            </td>
            <td>
              <h5>We are sorry."<b>{{mail}}</b>" is incorrect or the account does not exist.Please enter correct mail address</h5>
            </td>
          </tr>
        </table>
      </div>
      <button @click="tryAgain()" class="btn btn-success">Try Again</button>
    </div>

  </div>
 <div class="col-sm"></div>
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
      this.successReset()
      this.resetError()
      this.isReset = true
    },
    randomPassword: function () {
      this.password = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    },
    successReset: function () {
      this.randomPassword()
      console.log('mail: ' + this.mail + ' new password: ' + this.password)
      // more code
    },
    resetError: function () {
      this.isReset = false
      // more code
    },
    tryAgain: function () {
      this.isReset = false
      this.mail = ''
      // more code
    }
  }
}
</script>
