<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div v-if="application" class="col-9 py-0">
              <h5 class="d-inline-flex">
                <div class="pr-3 pl-4 border-right d-inline-flex">
                  {{ application.title }}
                </div>
              </h5>
              <div class="px-3 border-right d-inline-flex">
                {{ application.data_type }}
              </div>
              <div class="px-3 border-right d-inline-flex">
                {{ new Date(application.createdAt).toLocaleDateString() }}
              </div>
              <div class="px-3 d-inline-flex">
                {{ new Date(application.updatedAt).toLocaleDateString() }}
              </div>
            </div>
            <div class="col-3 px-5 py-0">
              <router-link
                :to="{ name: 'AddAppDatasets', params: { application_id:this.application.id, application:application } }"
                class="btn btn-success float-right">
                Create
              </router-link>
            </div>
          </div>
          <div v-if="appDatasets" class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="appDatasets"
                :items-per-page="5"
                class="elevation-1 table-bordered text-center">
                <template v-slot:[`item.createdAt`]="{ item }">
                  <span>{{
                    new Date(item.createdAt).toLocaleDateString()
                  }}</span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <button
                    type="reset"
                    @click="deleteData(item)"
                    class="btn btn-danger mx-1">
                    Delete
                  </button>
                </template>
              </v-data-table>
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'ListData',
  components: {},
  methods: {
    getDatas: async function () {
      Axios.get(`/application-datasets/${this.application.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.appDatasets = response.data.result
        console.log(this.appDatasets)
      })
    },
    deleteData: async function (data) {
      Axios.delete(`/application-datasets/${data.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.getDatas()
        })
      })
    }
  },

  mounted () {
    if (this.$route.params.application) {
      this.application = this.$route.params.application
    }
    this.getDatas()
  },

  data: () => {
    return {
      application: {
        id: undefined
      },
      appDatasets: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Title', value: 'data_set.title' },
        { text: 'Description', value: 'data_set.description' },
        { text: 'Data Type', value: 'data_set.data_type' },
        { text: 'ConCreation Date', value: 'createdAt' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>
