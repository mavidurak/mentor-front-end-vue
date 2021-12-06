<template>
  <div>
    <div class="up-background"></div>

    <div class="body">
      <!--<img
        src="https://www.wallpaperflare.com/static/471/767/754/abstract-ae-plexus-blue-dot-wallpaper.jpg"
        style="
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        position:absolute;"
      />-->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="my-2">
              <div class="row">
                <div class="col-lg-6 px-3">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <v-gravatar
                        :email="email"
                        :size="200"
                        class="rounded img-fluid border shadow-lg rounded-circle border-dark"
                      />
                    </div>
                  </div>
                  <div class="border rounded bg-light shadow-lg mt-2 px-3">
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>Username:</h5>
                      </div>
                      <div class="col-6">
                        <h5>{{username}}</h5>
                      </div>
                      <div class="col-2 text-right" style="font-size:15px;">
                        <router-link to="/change-username">
                          <i class="far fa-edit fa-2x"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>Name Surname:</h5>
                      </div>
                      <div class="col-6">
                        <h5>{{name}}</h5>
                      </div>
                    </div>
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>Email:</h5>
                      </div>
                      <div class="col-6 overflow-hidden">
                        <h5>{{email}}</h5>
                      </div>
                    </div>
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>Password:</h5>
                      </div>
                      <div class="col-6">
                        <h5>******</h5>
                      </div>
                      <div class="col-2 text-right" style="font-size:15px;">
                        <router-link to="/change-password">
                          <i class="far fa-edit fa-2x"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>CreatedAt:</h5>
                      </div>
                      <div class="col-6 overflow-hidden">
                        <h5>{{created}}</h5>
                      </div>
                    </div>
                    <div class="row border-bottom">
                      <div class="col-4">
                        <h5>UpdatedAt:</h5>
                      </div>
                      <div class="col-6 overflow-hidden">
                        <h5>{{updated}}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="border shadow-lg bg-light rounded">
                    <line-chart></line-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from '@/helpers/axios'
import LineChart from '@/components/LineChart'
import moment from 'moment'

export default {
  name: 'profile',
  components: {
    LineChart
  },
  data () {
    return {
      username: '',
      name: '',
      email: '',
      user: '',
      created: '',
      updated: ''
    }
  },
  created () {
    axios
      .get('/authentications/me/')
      .then((response) => {
        if (response.status === 200) {
          this.username = response.data.username
          this.name = response.data.name
          this.email = response.data.email
          this.created = moment(String(response.data.createdAt)).format('DD/MM/YYYY')
          this.updated = moment(String(response.data.updatedAt)).format('DD/MM/YYYY')
        }
      })
  },
  methods: {
  }
}
</script>

<style scoped>
.up-background {
  position: fixed;
  height: 100vh;
  top:0px;
  width: 100vw;
  z-index: 0;
  background-image: url(https://picsum.photos/id/1018/720/?blur);
  background-repeat: no-repeat;
  background-size: cover;
}

.cog-i {
  transition: 0.5s ease;
}
</style>
