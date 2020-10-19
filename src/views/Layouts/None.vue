<template>
    <v-main>
      <slot/>
    </v-main>
</template>
<script>
import axios from 'axios'
export default {
  created () {
    if (localStorage.getItem('X-AccessToken') !== null) {
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
            this.$router.push('home')
          }
        })
    }
  }
}

</script>
