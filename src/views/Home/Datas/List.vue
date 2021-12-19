<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-9 py-0">
              <h5 class="d-inline-flex">
                <div class="pr-3 pl-4 border-right d-inline-flex">
                  Datas {{ dataset.title }}
                </div>
              </h5>
              <div class="px-3 border-right d-inline-flex">
                {{ dataset.data_type }}
              </div>
            </div>
            <div class="col-3 px-5 py-0">
              <router-link
                :to="{ name: 'AddData', params: {dataset:dataset } }"
                class="btn btn-success float-right">
                <i class="fas fa-plus-square"/>
              </router-link>
            </div>
          </div>
          <div v-if="datas" class="row">
            <div class="col-12">
              <v-data-table
                :headers="headers"
                :items="datas"
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
                    :to="{ name: 'AddData', params: { data: item , dataset:dataset} }"
                    class="btn btn-primary mx-1">
                    <i class="fas fa-pen"/>
                  </router-link>
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
    getDatas: async function () {
      console.log(this.$route.params.dataSetId)
      Axios.get(`/datas/${this.$route.params.dataSetId}`)
        .then(response => {
          this.datas = response.data.result
        })
    },
    deleteData: async function (data) {
      Axios.delete(`/datas/${data.id}`)
        .then(response => {
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

  created () {
    if (this.$route.params.dataset) {
      this.dataset = this.$route.params.dataset
    }
    console.log(this.$route.params)
    this.getDatas()
  },

  data: () => {
    return {
      dataset: {
        id: undefined,
        title: '',
        data_type: '',
        description: ''
      },
      datas: [],
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
