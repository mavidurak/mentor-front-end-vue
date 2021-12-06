<template>
    <v-main>
      <slot/>
    </v-main>
</template>
<script>
import axios from 'axios'
export default {
  name: 'None',
  created () {
    if (localStorage.getItem('X-AccessToken') !== null) {
      axios
        .get(
          '/authentications/me/')
        .then(response => {
          if (response.status === 200) {
            this.$router.push('home')
          }
        })
    }
  }
}

</script>
