<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h5 v-if="app.id == 0" class="card-title">Api Oluştur</h5>
        <h5 v-else class="card-title">Api Güncelle</h5>
        <hr />
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
          <div class="form-group">
            <label for="exampleInputPassword1">DataSchemaId : </label>
            <select v-model="app.dataSchemaId" class="form-control" required>
              <option disabled value="">Please select one</option>
              <option value=1>DataSchema 1</option>
              <option value=2>DataSchema 2</option>
              <option value=3>DataSchema 3</option>
            </select>
          </div>
          <button v-if="app.id == 0" type="submit" class="btn btn-success float-right">Oluştur</button>
          <div v-else>
            <button type="submit" class="btn btn-success float-right">Güncelle</button>
            <button type="reset" @click="deleteApi()" class="btn btn-danger mr-2 float-right">Sil</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../Home/Navbar'

export default {
  name: 'ApiAppAddOrUpdate',

  components: {
    Navbar
  },

  data: () => {
    return {
      app: {
        id: 0,
        title: '',
        description: '',
        createDate: '',
        lastUpdate: '',
        deletedAt: '',
        dataSchemaId: 0
      }
    }
  },
  mounted () {
    if (this.$route.params.app) {
      this.app = this.$route.params.app
    }
  },
  methods: {
    onSubmit: function () {
      if (this.app.id === 0) {
        this.app.createDate = new Date().toLocaleString()
        console.log('------\ndatabase add request sended at ' + this.app.createDate)
      } else {
        this.app.lastUpdate = new Date().toLocaleString()
        console.log('------\ndatabase update request sended at ' + this.app.lastUpdate)
      }
      console.log('app.id : ' + this.app.id + '\napp.title : ' + this.app.title + '\napp.description : ' +
      this.app.description + '\napp.dataSchemaId : ' + this.app.dataSchemaId + '\n------')
    },
    deleteApi: function () {
      this.app.deletedAt = new Date().toLocaleString()
      console.log('------\ndatabase delete request sended at' + this.app.deletedAt)
      console.log('Api deleted. ID :' + this.app.id + '\n------')
    }
  }
}
</script>

<style></style>
