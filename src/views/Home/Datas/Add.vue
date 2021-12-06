<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 v-if="this.data.id == undefined" class="card-title font-weight-bold">
            Create Data
          </h4>
          <h4 v-else class="card-title">Update Data</h4>
          <br />
          <form @submit.prevent="onSubmit()">
            <div class="form-group">
              <label>Value : </label>
              <input
                v-model="data.value"
                type="number"
                class="form-control"
                placeholder="value"
                required/>
            </div>
            <button
              v-if="this.data.id == undefined"
              type="submit"
              class="btn btn-success float-right">
              Create
            </button>
            <div v-else>
              <button type="submit" class="btn btn-success float-right">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from '@/helpers/axios'
import swal from 'sweetalert'

export default {
  name: 'AddData',
  data: () => {
    return {
      dataset: undefined,
      data: {
        id: undefined,
        dataset_id: 0,
        value: Number
      }
    }
  },
  created () {
    if (this.$route.params.data) {
      this.data = this.$route.params.data
      this.dataset = this.$route.params.dataset
    }
  },
  methods: {
    createDataSet () {
      return Axios.post(
        '/datas/',
        {
          value: this.data.value,
          dataset_id: this.$route.params.dataSetId
        })
        .then(response => {
          swal({
            title: 'Success',
            text: 'Created successfully!',
            icon: 'success'
          }).then(result => {
            this.$router.push({ name: 'ListDatas', params: { dataset: this.dataset } })
          })
        })
        .catch(err => {
          const message = err.response.data.errors
            .map(e => e.message)
            .join('<br/>')
          const content = document.createElement('div')
          content.innerHTML = message
          swal({
            title: 'Error!',
            content,
            icon: 'error'
          })
        })
    },
    updateDataSet: async function () {
      Axios.put(
        '/datas/update',
        {
          id: this.data.id,
          value: this.data.value,
          dataset_id: this.$route.params.dataSetId
        })
        .then(response => {
          swal({
            title: 'Message',
            text: response.data.message,
            icon: 'success'
          }).then(result => {
            this.$router.push({ name: 'ListDatas', params: { dataset: this.dataset } })
          })
        })
    },
    onSubmit: async function () {
      if (this.data.id === undefined) {
        await this.createDataSet()
      } else {
        await this.updateDataSet()
      }
    }
  }
}
</script>
