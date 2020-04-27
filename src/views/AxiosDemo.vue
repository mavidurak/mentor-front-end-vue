<template>
<div class="axios_demo">
  <div  id="axios-get">
    <div class="danger">
        <h1>Axios Demo Get</h1>
    </div>
    <ul>
      <li v-for="post of posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ index + 1 }} - {{ error.message }}
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  created () {
    this.getPosts()
  },
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  methods: {
    getPosts () {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (this.posts = response.data))
        .catch(error => {
          this.errors.push(error)
        })
    }
  }
}
</script>
