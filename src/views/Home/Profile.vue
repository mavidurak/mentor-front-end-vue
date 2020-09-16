<template>
  <div>
    <Navbar/>
    <div class="body">
    <div class="container">
    <div class="row">
        <div class="col-lg-12">
          <div class="border my-5 py-3 shadow-lg ">
            <div class="row mx-auto">
              <div class="col-lg-4">
                <v-gravatar :email="email" size="500" class="rounded img-fluid px-2" />
              </div>
              <div class="col-lg-8 px-5">
                <div class="row" >
                  <a href="#" id="spin-cog" class="rl cog-i" @click="gizleGoster('mySidenav')"><i class="fas fa-cog fa-3x closebtn mt-3"></i></a>
                  <div id="mySidenav" class="sidenav mx-auto bg-dark d-flex">
                    <div class="align-items-start px-3">
                      <router-link class="rl" to="/change-nick">Nick Değiştir</router-link>
                      <router-link class="rl" to="/change-email">Eposta Değiştir</router-link>
                      <router-link class="rl" to="/change-password">Şifre Değiştir</router-link>
                      <router-link class="rl" to="#">...</router-link>
                    </div>
                  </div>
                </div>
                <div class="row border-bottom pt-3">
                  <div class="col-lg-6 pb-1">
                    <h3>Username:</h3>
                  </div>
                  <div class="col-lg-6">
                     <h3>{{username}}</h3>
                  </div>
                </div>
                <div class="row border-bottom pt-3">
                  <div class="col-lg-6">
                     <h3>Name Surname:</h3>
                  </div>
                  <div class="col-lg-6">
                     <h3>{{name}}</h3>
                  </div>
                </div>
                <div class="row border-bottom pt-3">
                  <div class="col-lg-6">
                     <h3>Email:</h3>
                  </div>
                  <div class="col-lg-6">
                     <h3>{{email}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="border my-5 py-3 shadow-lg " id="imf">
              Grafik alanı
            </div>
            <div class="border my-5 py-3 shadow-lg " id="imf">
              Grafik eklenecek
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
      .get(
        '/authentications/me/',
        {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      )
      .then(response => {
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
  .fa-cog{
    z-index: 2;
  }
  .ppic{
    height:50vh;
  }
 .row{
  font-family:monospace;
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
.cog-i{
  transition: 0.5s ease;
}

</style>
