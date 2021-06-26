<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-9 py-0">
              <h5 class="d-inline-flex">
                <div class="pr-3 pl-4 border-right d-inline-flex">
                  {{ dataset.title }}
                </div>
              </h5>
              <div class="px-3 border-right d-inline-flex">
                {{ dataset.data_type }}
              </div>
              <div class="px-3 border-right d-inline-flex">
                {{ new Date(dataset.createdAt).toLocaleDateString() }}
              </div>
              <div class="px-3 d-inline-flex">
                {{ new Date(dataset.updatedAt).toLocaleDateString() }}
              </div>
            </div>
            <div class="col-3 px-5 py-0">
              <router-link
                :to="{ name: 'AddData', params: { data: {dataset_id:this.dataset.id}, dataset:dataset } }"
                class="btn btn-success float-right">
                Create</router-link
              >
            </div>
          </div>
          <div class="row">
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
                    Update
                  </router-link>
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
      Axios.get(`/datas/${this.dataset.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.datas = response.data.result
      })
    },
    deleteData: async function (data) {
      Axios.delete(`/datas/${data.id}`, {
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
    if (this.$route.params.dataset) {
      this.dataset = this.$route.params.dataset
      this.key = this.dataset.data_type
    }
    this.getDatas()
  },

  data: () => {
    return {
      dataset: {
        id: 0,
        title: '',
        data_type: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: ''
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
