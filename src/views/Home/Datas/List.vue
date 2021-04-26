<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
        <div class="row">
          <div class="col-3 px-5 py-0">
          <h5>{{app.title}}<i> Dataset</i></h5>
          </div>
          <div class="col-9 px-5 py-0">
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
            <template v-slot:[`item.actions`]="{ item }">
              <router-link
                :to="{ name: 'ListDatas', params: { app: item } }"
                class="btn btn-primary mx-1"
                >Datas</router-link
              >
              <router-link
                :to="{ name: 'UpdateDataSets', params: { app: item } }"
                class="btn btn-primary mx-1"
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
      key: '',
      options: null,
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
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>
