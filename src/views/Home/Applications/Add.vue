<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 v-if="application.id === undefined" class="card-title font-weight-bold">
            Create Application
          </h4>
          <h4 v-else class="card-title">Update Application id: {{application.id}}</h4>
          <br />
          <form @submit.prevent="onSubmit()">
            <div class="form-group">
              <label>Title : </label>
              <input
                v-model="application.title"
                type="text"
                class="form-control"
                placeholder="title"
                required
                minlength="1"
                maxlength="255"/>
            </div>
            <div class="form-group"  v-if="options&&application.id === undefined">
              <label>Key Title : </label>
              <multiSelect
                :multiple="true"
                :options="options"
                @getKey="updateKeyTitle"/>
            </div>
            <div class="form-group">
              <label>Description : </label>
              <textarea
                v-model="application.description"
                class="form-control"
                type="text"
                rows="3"
                minlength="1">
              </textarea>
            </div>
            <div class="form-group">
              <label> Permission Read : </label>
              <input v-model="application.permission_read" class="mx-3 " type="checkbox"/>
            </div>
            <div class="form-group">
              <label> Permission Write : </label>
              <input v-model="application.permission_write" class="mx-3 " type="checkbox"/>
            </div>
            <div class="form-group">
              <label> Permission Delete : </label>
              <input v-model="application.permission_delete" class="mx-3 " type="checkbox"/>
            </div>
            <button
              v-if="application.id == undefined"
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
import multiSelect from '@/components/Multiselect.vue'

export default {
  name: 'AddDataSet',
  components: {
    multiSelect
  },
  data: () => {
    return {
      application: {
        id: undefined,
        title: '',
        dataset_ids: [],
        description: '',
        permission_read: false,
        permission_write: false,
        permission_delete: false

      },
      key: '',
      options: null
    }
  },
  created () {
    if (this.$route.params.application) {
      this.application = this.$route.params.application
      this.key = this.application.dataset_ids
    }
    this.getDatasets()
  },
  methods: {
    getDatasets () {
      Axios.get('/data-sets/').then(response => {
        this.options = Object.values(response.data.results).map(dataType => ({ id: dataType.id, key: dataType.title }))
      })
    },
    createApplication () {
      Axios.post(
        '/applications/',
        {
          title: this.application.title,
          dataset_ids: this.application.dataset_ids.map(({ id }) => id),
          description: this.application.description,
          permission_read: this.application.permission_read,
          permission_write: this.application.permission_write,
          permission_delete: this.application.permission_delete
        })
        .then(response => {
          swal({
            title: 'Success',
            text: 'Created successfully!',
            icon: 'success'
          }).then(result => {
            this.$router.push('/applications/')
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
    updateKeyTitle (value) {
      if (value) {
        this.application.dataset_ids = value
      }
    },
    onSubmit: async function () {
      if (this.application.id === undefined) {
        await this.createApplication()
      } else {
        await this.updateDataSet()
      }
    },
    updateDataSet: async function () {
      Axios.put(
        `/applications/${this.application.id}`,
        {
          title: this.application.title,
          description: this.application.description,
          permission_read: this.application.permission_read,
          permission_write: this.application.permission_write,
          permission_delete: this.application.permission_delete
        }).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.$router.push('/applications/')
        })
      })
    }
    /*
*/
  }

}
</script>

<style></style>
