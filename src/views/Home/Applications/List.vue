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
                class="btn btn-success float-right">
                <i class="fas fa-plus-square"/>
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="applications"
                :items-per-page="5"
                class="elevation-1 table-bordered text-center">
                <template v-slot:[`item.application_datasets`]="{ item }">
                  <template v-for="applicationDataset in item.application_datasets">
                    <div :key="applicationDataset.id" >
                      <AppDatasetViewPill
                        :id="applicationDataset.id"
                        :title="applicationDataset.data_set.title"
                        :dataType="applicationDataset.data_set.data_type" />
                    </div>
                  </template>
                </template>
                <template v-slot:[`item.locations`]="{ item }">
                  <template v-for="location in item.locations">
                    {{location.longitude}}-{{location.latitude}}
                  </template>
                </template>
                <template v-slot:[`item.permissions`]="{ item }" >
                  <div class="d-inline mx-1" v-if="item.permission_read">R</div>
                  <div class="d-inline mx-1" v-if="item.permission_write">W</div>
                  <div class="d-inline mx-1" v-if="item.permission_delete">D</div>
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
                    :to="{ path:`/appdatasets/${item.id}`, params: { application: item } }"
                    class="btn btn-primary mr-1">
                    <i class="fas fa-list-alt"/>
                  </router-link>
                  <router-link
                    :to="{ name: 'AddApplication', params: { application: item } }"
                    class="btn btn-primary mr-1">
                    <i class="fas fa-pen"/>
                  </router-link>
                  <button
                    type="reset"
                    @click="deleteApplications(item)"
                    class="btn btn-danger">
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
import AppDatasetViewPill from '@/components/viewpill/AppDatasetViewPill'

export default {
  name: 'ListDataSet',
  components: {
    AppDatasetViewPill
  },
  methods: {
    getApplications: function () {
      Axios.get('/applications/').then(response => {
        this.applications = response.data.results
      })
    },
    deleteApplications: async function (application) {
      Axios.delete(`/applications/${application.id}`).then(response => {
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
        { text: 'Locations', value: 'locations' },
        { text: 'Datasets', value: 'application_datasets' },
        { text: 'Creation Date', value: 'createdAt' },
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Permissions', value: 'permissions' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>

<style scoped></style>
