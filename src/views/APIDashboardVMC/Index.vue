<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
        <div class="row">
          <div class="col-3 px-5 py-0">
          <h5>Data Sets</h5>
          </div>
          <div class="col-9 px-5 py-0">
          <router-link
            to="/api-dashboard-vmc/add-or-update"
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
          <template v-slot:[`item.createdAt`]="{ item }">
           <span>{{new Date(item.createdAt).toLocaleDateString()}}</span>
         </template>
         <template v-slot:[`item.updatedAt`]="{ item }">
           <span>{{new Date(item.updatedAt).toLocaleDateString()}}</span>
         </template>
            <template v-slot:[`item.actions`]="{ item }">
              <router-link
                :to="{ name: 'ApiAddOrUpdateMC', params: { app: item } }"
                class="btn btn-primary"
                >Update</router-link
              >
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

export default {
  title: 'ApiTable',

  components: {},

  methods: {
    getDataSets: function () {
      Axios.get('http://localhost:4000/data-sets/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        this.applications = response.data.results
      })
    }
  },

  mounted () {
    this.getDataSets()
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
        { text: 'Creation Date', value: 'createdAt' },
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>

<style scoped>
</style>
