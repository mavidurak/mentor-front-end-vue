<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h5 v-if="item.id == 0" class="card-title">Api Oluştur</h5>
        <h5 v-else class="card-title">Api Güncelle</h5>
        <hr />
        <form @submit.prevent="onSubmit()">
          <div class="form-group">
            <label for="exampleInputEmail1">Name : </label>
            <input
              v-model="item.name"
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description : </label>
            <textarea v-model="item.description" class="form-control" rows="3"></textarea>
          </div>
          <button v-if="item.id == 0" type="submit" class="btn btn-success float-right">Oluştur</button>
          <button v-else type="submit" class="btn btn-success float-right">Güncelle</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiAppAddOrUpdate',
  data: () => {
    return {
      item: {
        id: 0,
        name: '',
        description: ''
      }
    }
  },
  mounted () {
    if (this.$route.params.app) {
      this.item = this.$route.params.app
    }
  },
  methods: {
    onSubmit: function () {
      if (this.item.id === 0) {
        console.log('database add request')
      } else {
        console.log('database update request')
      }
      console.log('item.id : ' + this.item.id + '\nitem.name : ' + this.item.name + '\nitem.description : ' + this.item.description)
    }
  }
}
</script>

<style></style>
