<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/home">MaviDurak-IO</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/api-dashboard-vmc">Veri Setleri</router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link">
              Kullanıcılar
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profil</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="login">
              Çıkış
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import router from '../../router'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      // TODO: şuanda cookie silinemiyor. ilgilenilecek
      this.$cookies.remove('Token')
      router.push('/login')
    }
  }
}

</script>

<style>
</style>
