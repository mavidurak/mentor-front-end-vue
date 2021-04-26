<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
        <div class="row">
          <div class="col-9 py-0">
            <h5 class="d-inline-flex">
              <div class="pr-3 pl-4 border-right d-inline-flex">{{app.title}}</div>
            </h5>
            <div class="px-3 border-right d-inline-flex">{{app.data_type}}</div>
              <div class="px-3 border-right d-inline-flex">{{new Date(app.createdAt).toLocaleDateString()}}</div>
              <div class="px-3 d-inline-flex">{{new Date(app.updatedAt).toLocaleDateString()}}</div>
            </div>
          <div class="col-3 px-5 py-0">
          <router-link
            to="/datas/add"
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
  name: 'ListData',
  components: {},
  methods: {
    getDatas: async function () {
      Axios.get(
        `/datas/${this.app.id}`, {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      ).then((response) => {
        this.applications = response.data.result
      })
    }
  },

  mounted () {
    if (this.$route.params.app) {
      this.app = this.$route.params.app
      this.key = this.app.data_type
    }
    this.getDatas()
  },

  data: () => {
    return {
      app: {
        id: 0,
        title: '',
        data_type: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: ''
      },
      applications: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Value', value: 'value' },
        { text: 'Creation Date', value: 'createdAt' },
        { text: 'Last Update', value: 'updatedAt' }
      ]
    }
  }
}
</script>
