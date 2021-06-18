<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 v-if="application.id === undefined" class="card-title font-weight-bold">
            Create Application
          </h4>
          <h4 v-else class="card-title">Update Data Set {{application.id}}</h4>
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
                maxlength="255"
              />
            </div>
            <div class="form-group"  v-if="options">
              <label for="exampleKeyTitle">Key Title : </label>
              <multiSelect
                :multiple="true"
                :options="options"
                @getKey="updateKeyTitle"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description : </label>
              <textarea
                v-model="application.description"
                class="form-control"
                type="text"
                rows="3"
                minlength="1"
              ></textarea>
            </div>
            <button
              v-if="application.id == undefined"
              type="submit"
              class="btn btn-success float-right"
            >
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
import Axios from 'axios'
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
        description: ''
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
      Axios.get('/data-sets/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.options = Object.values(response.data.results).map(dataType => ({ id: dataType.id, key: dataType.title }))
        console.log(this.options)
      })
    },
    createApplication () {
      console.log(this.application.dataset_ids.map(({ id }) => id))
      Axios.post(
        '/applications/',
        {
          title: this.application.title,
          dataset_ids: this.application.dataset_ids.map(({ id }) => id),
          description: this.application.description,
          permission_read: true,
          permission_write: true,
          permission_delete: true
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
            this.$router.push('/data-sets/')
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
        console.log(this.application.dataset_ids)
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
        `/data-sets/${this.application.id}`,
        {
          title: this.application.title,
          data_type: this.application.data_type,
          description: this.application.description
        },
        {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      ).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.$router.push('/data-sets/')
        })
      })
    }
    /*
*/
  }

}
</script>

<style></style>
