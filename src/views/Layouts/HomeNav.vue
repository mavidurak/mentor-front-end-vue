<template>
<body class="hold-transition sidebar-mini layout-fixed">
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header border-bottom-0 navbar navbar-expand navbar-light text-sm main-header-bg">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link :class="[currentPage.includes('home') ? activeClass : '', 'nav-link']" to="/home">
          <p>Home</p>
        </router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="@/assets/mavidurak-io-logo.png" alt="User Avatar" class="img-size-50 mr-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="@/assets/mavidurak-io-logo.png" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="@/assets/mavidurak-io-logo.png" alt="User Avatar" class="img-size-50 img-circle mr-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="login">
          <span v-on:click="logout()"><i class="fas fa-sign-out-alt"></i></span>
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
      <img src="@/assets/md-beyaz-croped.png" alt="MD-IO logo" class="brand-image elevation-0" style="opacity: .8">
      <span class="brand-text font-weight-light">MaviDurak-IO</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
        <v-gravatar
          :email="email"
          :size="100"
          class="img-circle elevation-2"
          alt="User Image"
        />
        </div>
        <div class="info">
          <a href="#" class="d-block"></a>
          <router-link class="d-block" to="/profile">
            {{username}}
          </router-link>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar nav-child-indent nav-flat flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="#" :class="[currentPage.includes('home')|| currentPage.includes('profile') ? activeClass : '', 'nav-link']">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item" >
                <router-link :class="[currentPage.includes('home') ? activeClass : '', 'nav-link']" to="/home">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :class="[currentPage.includes('profile') ? activeClass : '', 'nav-link']" to="/profile">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="../../index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :class="[currentPage.includes('api-dashboard-vmc') ? activeClass : '', 'nav-link']" to="/api-dashboard-vmc">
              <i class="far fa-circle nav-icon"></i>
              <p>ApiDashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <!-- Main content -->
    <v-main>
      <slot/>
    </v-main>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer border-top-0 text-sm">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 3.1.0-pre
    </div>
    <strong>Copyright &copy; 2014-2020 <a href="https://mavidurak.github.io/">MaviDurak-IO</a>.</strong> All rights reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</body>
</template>

<script>
import router from '../../router'
import axios from 'axios'
import '@/plugins/jquery.overlayScrollbars.js'
// import '@/plugins/adminlte.js'
import '@/styles/OverlayScrollbars.min.css'
// import '@/styles/adminlte.css'
import '@/adminlte/js/AdminLTE.js'

export default {
  name: 'HomeNav',
  computed: {
    currentPage () {
      return this.$route.path
    }
  },
  data () {
    return {
      username: '',
      email: '',
      activeClass: 'active'
    }
  },
  methods: {
    logout () {
      // TODO: şuanda cookie silinemiyor. ilgilenilecek
      window.localStorage.removeItem('X-AccessToken')
      router.push('/login')
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
          this.email = response.data.email
        }
      })
  }
}
</script>

<style>
.nav-item {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.brand-text {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.main-header-bg {
  background-color:transparent!important;
}
.main-header{
  position: relative;
  color:black!important;
  opacity: 1!important;
}
.main-footer{
  position: relative;
  z-index:1;
  background-color:transparent!important;
}
</style>
