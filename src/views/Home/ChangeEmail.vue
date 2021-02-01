<template>
  <div>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-2"></div>
      <div class="col-md-6">
        <h6>Change Email Page</h6>
        <ValidationObserver ref="form" v-slot="{ invalid }">
        <form v-show="emailChangerStatus" class="text-left" @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="inputPassword">Yeni Email Adresiniz</label>
             <validation-provider name="newEmail" rules="required" v-slot="{ errors }">
           <input
              type="email"
              class="form-control"
              id="inputEmail"
              v-model="newEmail"
              placeholder="Yeni email adresinizi girin"
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
         <ValidationObserver ref="form" v-slot="{ invalid }">
        <form v-show="emailChangerStatus1" class="text-left" @submit.prevent="onConfirm()">
          <div class="form-group">
            <label for="inputPassword">Doğrulama Kodu</label>
             <validation-provider name="userConfirmCode" rules="required|min:6|max:6" v-slot="{ errors }">
           <input
              type="text"
              class="form-control"
              id="inputUConfirmCode"
              v-model="userConfirmCode"
              placeholder="EPostanıza gelen doğrulama kodunu girin"
            /> <span>{{ errors[0] }}</span>
            </validation-provider>
            </div>
         <button
            type="submit"
            name="confirmButton"
            id="confirmButton"
            class="btn btn-success"
            :disabled="invalid"
          >Değiştir</button>
        </form>
        </ValidationObserver>
          <div v-show="operationSuccesful">
            <br>
            <div class="alert alert-success" role="alert">
              <table>
                <tr><th colspan="3"><h3>Successfull</h3><hr></th></tr>
                <tr>
                  <td>
                    <img src="../../assets/success.svg" alt="success" style="margin: 10px; width: 90px; heigth: 90px;">
                  </td>
                  <td>
                    <h5>Email guncellemesi başarılı..</h5>
                    <h5> Yeni adresin "<b>{{email}}</b>" </h5>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div v-show="operationUSuccesful">
            <br>
            <div class="alert alert-danger" role="alert">
              <table>
                <tr><th colspan="3"><h3>Code invalid</h3><hr></th></tr>
                <tr>
                  <td>
                    <img src="../../assets/error.svg" alt="error" style="margin: 10px; width: 90px; heigth: 90px;">
                  </td>
                  <td>
                    <h5>Kod hatalı</h5>
                    <h5> Adresin değişmedi "<b>{{email}}</b>" </h5>
                      <button
                       name="retryButton"
                       id="retryButton"
                       class="btn btn-warning"
                       @click="reload()"
                     >Yeniden Dene</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        <div id="success"></div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'ChangeEmail',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      email: 'old@hotmail.com',
      newEmail: '',
      confirmCode: '',
      userConfirmCode: '',
      emailChangerStatus: true,
      emailChangerStatus1: false,
      operationSuccesful: false,
      operationUSuccesful: false
    }
  },
  methods: {
    onSubmit: function () {
      this.randomInt()
      this.consolInfo()
      this.emailChangerStatus = false
      this.emailChangerStatus1 = true
    },
    randomInt: function () {
      this.confirmCode = Math.floor(Math.random() * (1000000 - 100000)) + 100000
    },
    consolInfo: function () {
      console.log('New Email Address: ' + this.newEmail + ' Confirm Code: ' + this.confirmCode)
      // more code
    },
    onConfirm: function () {
      if (this.confirmCode === parseInt(this.userConfirmCode)) {
        this.email = this.newEmail
        this.emailChangerStatus1 = false
        this.operationSuccesful = true
      } else {
        this.emailChangerStatus1 = false
        this.operationUSuccesful = true
      }
    },
    reload: function () {
      location.reload()
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
