<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div v-if="application" class="col-9 py-0">
              <h5 class="d-inline-flex">
                <div class="pr-3 pl-4 border-right d-inline-flex">
                  Application Datasets: {{ application.title }}
                </div>
              </h5>
            </div>
            <div class="col-3 px-5 py-0">
              <router-link
                :to="{ name: 'AddAppDatasets', params: { application:application } }"
                class="btn btn-success float-right">
                <i class="fas fa-plus-square"/>
              </router-link>
            </div>
          </div>
          <div v-if="applicationDatasets" class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="applicationDatasets"
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
                    <i class="fas fa-trash-alt"/>
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
    getApplicationDatasets: async function () {
      Axios.get(`/application-datasets/${this.$route.params.applicationId}`).then(response => {
        this.applicationDatasets = response.data.result
        console.log(this.applicationDatasets)
      })
    },
    deleteData: async function (data) {
      Axios.delete(`/application-datasets/${data.id}`).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.getApplicationDatasets()
        })
      })
    }
  },

  created () {
    if (this.$route.params.application) {
      this.application = this.$route.params.application
    }
    this.getApplicationDatasets()
  },

  data: () => {
    return {
      application: {
        id: undefined
      },
      applicationDatasets: [],
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
