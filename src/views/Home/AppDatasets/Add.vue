<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title font-weight-bold">
            Create Application Dataset Connection
          </h4>
          <br />
          <form @submit.prevent="onSubmit()">
            <div class="form-group"  v-if="addableDatasets">
              <label>Value : </label>
              <multiSelect
                :options="addableDatasets"
                @getKey="updateKeyTitle"/>
            </div>
            <button
              type="submit"
              class="btn btn-success float-right">
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
      application: undefined,
      addableDatasets: null,
      dataset_id: undefined
    }
  },
  created () {
    if (this.$route.params) {
      this.application = this.$route.params.application
    }
    this.getAddableDatasets()
  },
  methods: {
    createDataSet () {
      return Axios.post(
        '/application-datasets/',
        {
          application_id: this.$route.params.applicationId,
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
      console.log(this.$route.params.applicationId)
      Axios.get(`/application-datasets/unavaible-application-datasets/${this.$route.params.applicationId}`, {
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
