<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h4 v-if="app.id == 0" class="card-title font-weight-bold">
            Create Data Set
          </h4>
          <h4 v-else class="card-title">Update Data Set</h4>
          <br />
          <form @submit.prevent="onSubmit()">
            <div class="form-group">
              <label for="exampleInputEmail1">Title : </label>
              <input
                v-model="app.title"
                type="text"
                class="form-control"
                placeholder="title"
                required
                minlength="1"
                maxlength="255"
              />
            </div>
            <div class="form-group">
              <label for="exampleKeyTitle">Key Title : </label>
              <multiSelect
                :options="options"
                :selectedkey="app.data_type"
                @getKey="updateKeyTitle"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description : </label>
              <textarea
                v-model="app.description"
                class="form-control"
                type="text"
                rows="3"
                minlength="1"
              ></textarea>
            </div>
            <button
              v-if="app.id == 0"
              type="submit"
              class="btn btn-success float-right"
            >
              Create
            </button>
            <div v-else>
              <button type="submit" class="btn btn-success float-right">
                Update
              </button>
              <button
                type="reset"
                @click="deleteDataSet()"
                class="btn btn-danger mr-2 float-right"
              >
                Delete
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
import { DataTypes } from '@/constants/DataTypes'

export default {
  name: 'AddDataSet',
  components: {
    multiSelect
  },
  data: () => {
    return {
      app: {
        id: 0,
        title: '',
        data_type: '',
        description: ''
      },
      key: '',
      options: null
    }
  },
  created () {
    this.options = Object.values(DataTypes).map(dataType => ({ key: dataType }))
  },
  methods: {
    createDataSet () {
      return Axios.post(
        '/data-sets/',
        {
          title: this.app.title,
          data_type: this.app.data_type,
          description: this.app.description
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
        this.app.data_type = value.key
      }
    },
    onSubmit: async function () {
      if (this.app.id === 0) {
        await this.createDataSet()
      } else {
        await this.updateDataSet()
      }
    },
    updateDataSet: async function () {
      Axios.put(
        `/data-sets/${this.app.id}`,
        {
          title: this.app.title,
          data_type: this.app.data_type,
          description: this.app.description
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
          this.$router.push('/data-sets/list')
        })
      })
    },

    deleteDataSet: async function () {
      Axios.delete(`/data-sets/${this.app.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.$router.push('/data-sets/list')
        })
      })
    }
  }
}
</script>

<style></style>
