<template>
  <div>
    <Navbar/>
    <div class="text-center">
      <h1 class="mt-5">Dashboard</h1>
    </div>

  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },

  created: () => {
    document.body.className = ''
  }
}
</script>
