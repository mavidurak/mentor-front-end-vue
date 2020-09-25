<template>
  <div>
    <Navbar>
    <div class="text-center">
      <h1 class="mt-5">Dashboard</h1>
    </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar2'

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
