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
                to="/data-sets/add"
                class="btn btn-success float-right">
                <i class="fas fa-plus-square"/>
                </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="datasets"
                :items-per-page="5"
                class="elevation-1 table-bordered text-center">
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
                    :to="{ path:`/datas/${item.id}`, params: { dataset: item } }"
                    class="btn btn-primary mx-1 ">
                    <i class="fas fa-list-alt"/>
                  </router-link>
                  <router-link
                    :to="{ name: 'AddDataset', params: { dataset: item } }"
                    class="btn btn-primary mx-1 ">
                    <i class="fas fa-pen"/>
                  </router-link>
                  <button
                    type="reset"
                    @click="deleteDataSet(item)"
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
  name: 'ListDataSet',
  components: {},
  methods: {
    getDataSets: function () {
      Axios.get('/data-sets/')
        .then(response => {
          this.datasets = response.data.results
        })
    },
    deleteDataSet: async function (dataset) {
      Axios.delete(`/data-sets/${dataset.id}`)
        .then(response => {
          swal({
            title: 'Message',
            text: response.data.message,
            icon: 'success'
          }).then(result => {
            this.getDataSets()
          })
        })
    }
  },

  mounted () {
    this.getDataSets()
  },

  data: () => {
    return {
      datasets: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Data Type', value: 'data_type' },
        { text: 'Creation Date', value: 'createdAt' },
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>

<style scoped></style>
