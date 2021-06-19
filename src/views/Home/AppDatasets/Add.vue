<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title font-weight-bold">
            Create Data
          </h4>
          <br />
          <form @submit.prevent="onSubmit()">
            <div class="form-group"  v-if="addableDatasets">
              <label for="exampleInputEmail1">Value : </label>
              <multiSelect
                :options="addableDatasets"
                @getKey="updateKeyTitle"
              />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swal from 'sweetalert'
import multiSelect from '@/components/Multiselect.vue'

export default {
  name: 'AddData',
  components: {
    multiSelect
  },
  data: () => {
    return {
      application_id: undefined,
      application: undefined,
      addableDatasets: null,
      dataset_id: undefined
    }
  },
  created () {
    if (this.$route.params) {
      this.application_id = this.$route.params.application_id
      this.application = this.$route.params.application
    }
    this.getAddableDatasets()
  },
  methods: {
    createDataSet () {
      return Axios.post(
        '/appdatasets/',
        {
          application_id: this.application_id,
          dataset_id: this.dataset_id
        },
        {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      )
        .then(response => {
          swal({
            title: 'Success',
            text: 'Created successfully!',
            icon: 'success'
          }).then(result => {
            this.$router.push({ name: 'ListAppDatasets', params: { application: this.application } })
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
    getAddableDatasets () {
      Axios.get(`addablesforapp/${this.application_id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.addableDatasets = response.data.results
      })
    },
    updateKeyTitle (value) {
      if (value) {
        this.dataset_id = value.id
      }
    },
    onSubmit: async function () {
      await this.createDataSet()
    }
  }
}
</script>
