<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-3 px-5 py-0">
              <h5>Application</h5>
            </div>
            <div class="col-9 px-5 py-0">
              <router-link
                to="/applications/add"
                class="btn btn-success float-right"
                >Create</router-link
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="applications"
                :items-per-page="5"
                class="elevation-1 table-bordered text-center"
              >
                <template v-slot:[`item.data_sets`]="{ item }">
                  <template v-for="dataSet in item.data_sets">
                    <div :key="dataSet.id" >
                      <AppDatasetViewPill :id="dataSet.id" :title="dataSet.title" :dataType="dataSet.data_type" />
                    </div>
                  </template>
                </template>
                <template v-slot:[`item.createdAt`]="{ item }">
                  <span>{{
                    new Date(item.createdAt).toLocaleDateString()
                  }}</span>
                </template>
                <template v-slot:[`item.updatedAt`]="{ item }">
                  <span>{{
                    new Date(item.updatedAt).toLocaleDateString()
                  }}</span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <router-link
                    :to="{ name: 'ListAppDatasets', params: { application: item } }"
                    class="btn btn-primary mx-1"
                  >
                    Datasets
                  </router-link>
                  <router-link
                    :to="{ name: 'AddApplication', params: { application: item } }"
                    class="btn btn-primary mx-1"
                  >
                    Update
                  </router-link>
                  <button
                    type="reset"
                    @click="deleteApplications(item)"
                    class="btn btn-danger mr-2 float-right"
                  >
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
import AppDatasetViewPill from '@/components/viewpill/AppDatasetViewPill'

export default {
  name: 'ListDataSet',
  components: {
    AppDatasetViewPill
  },
  methods: {
    getApplications: function () {
      Axios.get('/applications/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.applications = response.data.results
      })
    },
    deleteApplications: async function (application) {
      Axios.delete(`/applications/${application.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        swal({
          title: 'Message',
          text: response.data.message,
          icon: 'success'
        }).then(result => {
          this.getApplications()
        })
      })
    }
  },

  mounted () {
    this.getApplications()
  },

  data: () => {
    return {
      applications: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Datasets', value: 'data_sets' },
        { text: 'Creation Date', value: 'createdAt' },
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>

<style scoped></style>
