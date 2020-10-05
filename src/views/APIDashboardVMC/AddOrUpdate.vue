<template>
  <div>
    <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h4 v-if="app.id == 0" class="card-title font-weight-bold">Create Data Set</h4>
        <h4 v-else class="card-title">Update Data Set</h4>
        <br/>
        <form @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="exampleInputEmail1">Title : </label>
            <input
              v-model="app.title"
              type="text"
              class="form-control"
              placeholder="title"
              required minlength="1" maxlength="255"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description : </label>
            <textarea
            v-model="app.description"
            class="form-control"
            type="text" rows="3"
            required minlength="1"
            ></textarea>
          </div>
          <button v-if="app.id == 0" type="submit" class="btn btn-success float-right">Create</button>
          <div v-else>
            <button type="submit" class="btn btn-success float-right">Update</button>
            <button type="reset" @click="deleteDataSet()" class="btn btn-danger mr-2 float-right">Delete</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'ApiAppAddOrUpdate',

  components: {
  },

  data: () => {
    return {
      app: {
        id: 0,
        title: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: ''
      }
    }
  },
  mounted () {
    if (this.$route.params.app) {
      this.app = this.$route.params.app
    }
  },
  methods: {
    createDataSet () {
      return Axios.post('http://localhost:4000/data-sets/', {
        title: this.app.title, key_title: 'deneme', description: this.app.description
      }, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        swal({
          title: 'Message',
          text: 'Created successfully!',
          icon: 'success'
        }).then((result) => {
          this.$router.push('/home')
        })
      }).catch(function (error) {
        console.log(error.response)
      })
    },
    onSubmit: async function () {
      if (this.app.id === 0) {
        await this.createDataSet()
      } else {
        await this.updateDataSet()
      }
    },

    updateDataSet: async function () {
      Axios.put(`http://localhost:4000/data-sets/${this.app.id}`, {
        title: this.app.title, title_key: 'deneme', description: this.app.description
      }, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then((result) => {
          this.$router.push('/home')
        })
      })
    },

    deleteDataSet: async function () {
      Axios.delete(`http://localhost:4000/data-sets/${this.app.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then((result) => {
          this.$router.push('/home')
        })
      })
    }
  }
}
</script>

<style></style>
