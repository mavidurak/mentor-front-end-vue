<template>
  <div>
    <div class="up-background"></div>
    <Navbar />
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
          <div class="col-lg-12">
            <div class="my-2">
              <div class="row">
                <div class="col-md-6 px-5">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <v-gravatar :email="email" :size="200" class=" rounded img-fluid border shadow-lg rounded-circle border-dark" />
                    </div>
                  </div>
                  <div class="border rounded bg-light border-dark shadow-lg mt-2 px-3">
                  <div class="row border-bottom ">
                    <div class="col-lg-4">
                      <h5>Username:</h5>
                    </div>
                    <div class="col-lg-6">
                      <h5>{{username}}</h5>
                    </div>
                    <div class="col-md-2 text-right" style="font-size:15px;">
                      <router-link to="/change-password"><i class="far fa-edit fa-2x"></i></router-link>
                    </div>
                  </div>
                  <div class="row border-bottom">
                    <div class="col-lg-4">
                      <h5>Name Surname:</h5>
                    </div>
                    <div class="col-lg-6">
                      <h5>{{name}}</h5>
                    </div>
                    <div class="col-md-2 text-right" style="font-size:15px;">
                      <router-link to="/change-password"><i class="far fa-edit fa-2x"></i></router-link>
                    </div>
                  </div>
                  <div class="row border-bottom ">
                    <div class="col-lg-4">
                      <h5>Email:</h5>
                    </div>
                    <div class="col-lg-6">
                      <h5>{{email}}</h5>
                    </div>
                    <div class="col-md-2 text-right" style="font-size:15px;">
                      <router-link to="/change-password"><i class="far fa-edit fa-2x"></i></router-link>
                    </div>
                  </div>
                  <div class="row border-bottom ">
                    <div class="col-lg-4">
                      <h5>Password:</h5>
                    </div>
                    <div class="col-lg-6">
                      <h5>******</h5>
                    </div>
                    <div class="col-md-2 text-right" style="font-size:15px;">
                      <router-link to="/change-password"><i class="far fa-edit fa-2x"></i></router-link>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="col-md-5 border shadow-lg bg-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../Home/Navbar'
import axios from 'axios'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      username: '',
      name: '',
      email: ''
    }
  },
  created () {
    axios
      .get('/authentications/me/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      })
      .then((response) => {
        if (response.status === 200) {
          this.username = response.data.username
          this.name = response.data.name
          this.email = response.data.email
        }
      })
  },
  methods: {
    gizleGoster (ID) {
      var secilenID = document.getElementById(ID)
      if (secilenID.style.width === '0%') {
        secilenID.style.width = '100%'
      } else {
        secilenID.style.width = '0%'
      }
    }
  }
}
</script>

<style scoped>
.up-background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(https://picsum.photos/id/1055/720/?blur);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}
.ppic {
  height: 50vh;
}
.row {
  font-size: 20px;
}

.sidenav {
  height: 100%;
  width: 0%;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  /* background-color: #111; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.rl {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.rl:hover {
  color: #f1f1f1;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.cog-i {
  transition: 0.5s ease;
}
</style>
