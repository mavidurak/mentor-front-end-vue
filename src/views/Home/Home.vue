<template>
  <div>
    <div
      class="modal fade"
      id="deleteDataSet"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Delete to {{ selectedDataSet.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="row"
              style="text-align: center; font-weight: bold; font-size: 1.2em"
            >
              <div class="col">Are you sure to delete this data set.</div>
            </div>
            <div class="row">
              <div class="col">Title :</div>
              <div class="col">{{ selectedDataSet.title }}</div>
            </div>
            <div class="row">
              <div class="col">Key Title :</div>
              <div class="col">{{ selectedDataSet.data_type }}</div>
            </div>
            <div class="row">
              <div class="col">Description</div>
              <div class="col">{{ selectedDataSet.description }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="deleteDataSet"
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="container">
        <!--Total api, dataSet and data cards-->
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <span class="icon app-icon"
                  ><i class="fas fa-3x fa-pager"></i
                ></span>
                <div>
                  Total Application <br />
                  <strong class="total-data">{{ appCount }}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <span class="icon data-set-icon"
                  ><i class="fas fa-3x fa-table"></i
                ></span>
                <div>
                  Total Data Set <br />
                  <strong class="total-data">{{ dataSetCount }}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <span class="icon data-icon"
                  ><i class="fas fa-3x fa-stopwatch"></i
                ></span>
                <div>
                  Total Data <br />
                  <strong class="total-data">{{ dataCount }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End of Total api, dataSet and data cards-->
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header">
                <div class="data-set-name">Application</div>
                <!--Select dataset / application-->
                <span class="select-app" style="padding-top: 4px">
                  <button
                    type="button"
                    class="btn"
                    title="Edit This Application"
                  >
                    <i style="font-size: 1.3em" class="fas fa-pen"></i>
                  </button>
                </span>
                <div class="select-app" title="Application / Data Set">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <!--Selecet dataset-->
                      <!--end of Selecet dataset-->
                      <!--Select application-->
                      <li class="breadcrumb-item">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {{ selectedApp.title }}
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <ul v-for="app in apps" :key="app.id">
                              <li>
                                <a
                                  class="dropdown-item"
                                  @click="selectApp(app)"
                                  >{{ app.title }}</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <!--end of Selecet application-->
                    </ol>
                  </nav>
                </div>
                <!--End of Select dataset / application-->
              </div>
              <!--Application info-->
              <div class="card-body">
              <AppDetailsViewPill title="Id" :content="selectedApp.id"/>
              <AppDetailsViewPill title="Title" :content="selectedApp.title"/>
              <AppDetailsViewPill title="Description" :content="selectedApp.description"/>
              <AppDetailsViewPill title="Permissions" :content="selectedApp.permissions"/>
              <AppDetailsViewPill title="Creation Date" :content="selectedApp.permissions"/>
              <AppDetailsViewPill title="Last Update" :content="selectedApp.permissions"/>
              </div>
            </div>
          </div>
        </div>
        <!--DataSet info-->
        <div class="row">
          <div class="col">
            <div class="card">
              <!--DataSet info navbar-->
              <div class="card-header chart-header">
                <div class="data-set-name">Data Set</div>
                <!--DataSet edit and select-->
                <div class="select-data-set">
                  <div class="btn-group">
                  <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {{ selectedDataSet.title }}
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <ul v-for="dataset in dataSets" :key="dataset.id">
                          <li>
                            <a
                              class="dropdown-item"
                              @click="selectDataSet(dataset)"
                              >{{ dataset.title }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                    <button
                      type="button"
                      class="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      title="Edit Data Set"
                    >
                      <i style="font-size: 1.3em" class="fas fa-pen"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <router-link
                        :to="{
                          name: 'UpdateDataSets',
                          params: { app: selectedDataSet },
                        }"
                        class="dropdown-item"
                      >
                        Change '<strong>title</strong>', '<strong
                          >key title</strong
                        >', '<strong>description</strong>'
                      </router-link>
                      <div class="dropdown-divider"></div>
                      <button
                        type="button"
                        class="btn btn-primary dropdown-item delete-data-set"
                        data-toggle="modal"
                        data-target="#deleteDataSet"
                      >
                        <strong>Delete</strong> this data set
                      </button>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      title="Select Data Set"
                    >
                      <i style="font-size: 1.3em" class="far fa-list-alt"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <h6 class="dropdown-header">Select a Data Set</h6>
                      <ul>
                        <li v-for="dataSet in dataSets" :key="dataSet.id">
                          <button
                            class="dropdown-item"
                            type="button"
                            @click="selectDataSet(dataSet)"
                          >
                            {{ dataSet.title }}
                          </button>
                        </li>
                      </ul>
                      <div class="dropdown-divider"></div>
                      <router-link
                        :to="{ name: 'AddDataset' }"
                        class="dropdown-item create-data-set"
                        ><strong>Create</strong> Data Set</router-link
                      >
                    </div>
                  </div>
                </div>
                <!--End of DataSet edit and select-->
              </div>
              <!--End of DataSet info navbar-->
              <!--DataSet info body-->
              <div v-if="selectedDataSet">
                <div class="card-body">
                  <div class="row">
                    <!--vue-chart-->
                    <div class="col-8 chart">
                      <apexchart width= "100%" height="100%" type="area" :responsive="responsive" :options="options" :series="series"></apexchart>
                    </div>
                    <!--End of vue-chart-->
                    <div class="col-4">
                      <table
                        style="
                          width: 100%;
                          color: white;
                          border-collapse: separate;
                          border-spacing: 0px 30px;
                        "
                      >
                        <tr style="margin-bottom: 25%">
                          <td class="info-header info-title-header">
                            <i class="fas fa-3x fa-heading"></i>
                          </td>
                          <td>
                            <ul class="info-body info-title-body">
                              <li><h4>Title:</h4></li>
                              <li>{{ selectedDataSet.title }}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td class="info-header info-key-title-header">
                            <i class="fas fa-3x fa-tag"></i>
                          </td>
                          <td>
                            <ul class="info-body info-key-title-body">
                              <li><h4>Key Title:</h4></li>
                              <li>
                                {{ selectedDataSet.data_type }}
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td class="info-header info-description-header">
                            <i class="fas fa-3x fa-stream"></i>
                          </td>
                          <td>
                            <ul class="info-body info-description-body">
                              <li><h4>Description:</h4></li>
                              <li>
                                {{ selectedDataSet.description }}
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <!--End of DataSet info body-->
                <!--Data info -->
                <div class="card-footer">
                  <div class="row">
                    <div class="col" style="padding-top: 0">
                      <!--header-->
                      <div class="row" style="padding-bottom: 10px">
                        <div class="col" style="padding: 0"></div>
                        <div class="col" style="padding: 0">
                          Data Type: <strong> Temperature(*C)</strong>
                        </div>
                        <div
                          class="col"
                          style="
                            padding: 0;
                            text-align: right;
                            padding-right: 15px;
                          "
                        >
                          <button
                            data-toggle="modal"
                            data-target="#createData"
                            title="Add new data"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <!-- add data Modal -->
                          <div
                            class="modal fade"
                            id="createData"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Add new data to
                                    <strong>{{ selectedDataSet.title }}</strong>
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="row">
                                    <div class="col-4">Select data set :</div>
                                    <div class="col-8">
                                      <strong>{{
                                        selectedDataSet.title
                                      }}</strong>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-4">
                                      Select application :
                                    </div>
                                    <div class="col-8">
                                      <select
                                        class="form-control"
                                        v-model="app"
                                      >
                                        <option
                                          v-for="app in apps"
                                          :key="app.id"
                                          placeholder="Select application"
                                        >
                                          {{ app.title }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-4">Data :</div>
                                    <div class="col-8">
                                      <input
                                        v-model="dataInput"
                                        class="form-control"
                                        type="text"
                                        placeholder="Your data"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    @click="
                                      addData({
                                        dataSet: selectedDataSet.id,
                                        application: app,
                                        data: dataInput,
                                      })
                                    "
                                    type="button"
                                    class="btn btn-success"
                                    data-dismiss="modal"
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!--end of add data Modal -->
                          </div>
                        </div>
                      </div>
                      <!--end of header-->
                      <!--data table-->
                      <div class="table-responsive data-table">
                        <table class="table table-bordered table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Id</th>
                              <th
                                scope="col"
                                v-for="data in datas"
                                :key="data.id"
                              >
                                {{ data.id }}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Date</th>
                              <td v-for="data in datas" :key="data.id">
                                {{ data.created_at }}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Value</th>
                              <td v-for="data in datas" :key="data.id">
                                {{ data.value }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--end of data table-->
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="dataset-not-found">
                <h4>You don't have a data set!</h4>
                <router-link
                  :to="{ name: 'AddDataset' }"
                  id="dataset-not-found-button"
                >
                  <strong>Create</strong> Data Set
                </router-link>
              </div>
              <!--End of Data info-->
            </div>
          </div>
        </div>
        <!--End of DataSet info-->
        <!--Application info-->
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios'
import swal from 'sweetalert'
import AppDetailsViewPill from '@/components/viewpill/AppDetailsViewPill'

export default {
  name: 'Home',
  components: {
    AppDetailsViewPill
  },
  methods: {
    selectDataSet: function (dataset) {
      this.selectedDataSet = dataset
    },
    selectApp: function (app) {
      this.selectedApp = app
    },
    getAppOptions: function () {
      Axios.get('http://localhost:4000/applications/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        if (response.data.count === 0) {
          return
        }
        this.apps = response.data.results
        console.log(response.data.results)
      }).catch(err => {
        console.log(err)
      })
    },
    getDataSets: function () {
      Axios.get('http://localhost:4000/data-sets/', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        if (response.data.count === 0) {
          this.selectedDataSet = false
          return
        }
        this.dataSetCount = response.data.count
        this.dataSets = response.data.results
        this.selectedDataSet = this.dataSets[0]
      })
    },
    addData: function (dataInfo) {
      Axios.post(
        'http://localhost:4000/datas/',
        {
          dataset_id: dataInfo.dataSet,
          value: dataInfo.data
        },
        {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      ).then((res) => {
        if (res.status === 201) {
          swal({
            title: 'Data has been added successfully!',
            icon: 'success'
          })
        }
      })
    },
    deleteDataSet: async function () {
      await Axios.delete(
        `http://localhost:4000/data-sets/${this.selectedDataSet.id}`,
        {
          headers: {
            'X-AccessToken': localStorage.getItem('X-AccessToken')
          }
        }
      )
      this.getAll()
    },
    getAll: function () {
      this.getDataSets()
    }
  },
  data () {
    return {
      dataSetCount: null,
      dataSets: null,
      selectedDataSet: {},
      appCount: '6',
      selectedApp: {},
      apps: [
        {
          id: '1',
          title: 'GoogleHomeMini',
          dataSetId: '1',
          description: 'Google home mini, smart assistant. asdas asd asd as dsad as d asd',
          permission_read: true,
          permission_write: true,
          permission_delete: false
        },
        {
          id: '2',
          title: 'app2',
          dataSetId: '2',
          description: 'its app2 description',
          permission_read: false,
          permission_write: false,
          permission_delete: false
        },
        {
          id: '3',
          title: 'app3',
          dataSetId: '3',
          description: 'its app3 description',
          permission_read: true,
          permission_write: true,
          permission_delete: true
        }
      ],
      dataCount: 689,
      datas: [
        { id: '1', created_at: '10.09.2020 10:50', value: '23' },
        { id: '2', created_at: '10.09.2020 11:00', value: '23.5' },
        { id: '3', created_at: '10.09.2020 11:15', value: '23.8' },
        { id: '4', created_at: '10.09.2020 11:22', value: '24' },
        { id: '5', created_at: '10.09.2020 11:30', value: '24.1' },
        { id: '6', created_at: '10.09.2020 11:42', value: '23.9' },
        { id: '7', created_at: '10.09.2020 12:45', value: '24' },
        { id: '8', created_at: '10.09.2020 12:36', value: '25' },
        { id: '9', created_at: '10.09.2020 13:52', value: '26' },
        { id: '10', created_at: '10.09.2020 14:39', value: '22' },
        { id: '11', created_at: '10.09.2020 15:57', value: '23' },
        { id: '12', created_at: '10.09.2020 18:11', value: '25.7' }
      ],
      app: null,
      dataInput: null,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          type: 'datetime'
        }
      },
      series: [{
        data: [
          { x: '10.09.2020 10:50', y: 30 },
          { x: '10.09.2020 11:00', y: 33 },
          { x: '10.09.2020 11:15', y: 12 },
          { x: '10.09.2020 11:22', y: 38 },
          { x: '10.09.2020 11:30', y: 44 },
          { x: '10.09.2020 11:42', y: 23 },
          { x: '10.09.2020 12:45', y: 27 }
        ]
      }],
      responsive: [{
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  },
  created () {
    document.body.className = ''
  },
  mounted () {
    this.getAll()
    this.getAppOptions()
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
}
.data-set-name {
  text-align: center;
  font-size: 1.5em;
  float: left;
  font-weight: bold;
}
.select-data-set {
  float: right;
}
.select-app {
  float: right;
  height: 50px;
}
.icon {
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  float: left;
  margin-right: 4%;
  color: white !important;
}
.app-icon {
  background-color: #31a2b8 !important;
}
.data-set-icon {
  background-color: #dc3545 !important;
}
.data-icon {
  background-color: #fec134 !important;
}
.card-body {
  padding: 20px;
}
.card-header {
  padding: 5px;
  padding-left: 20px;
  padding-bottom: 0px;
}
.card-footer {
  background-color: white;
}
.app-info,
.app-info .card-header {
  text-align: left;
  color: #fff;
  font-size: 1.1em;
  margin: 0;
  padding: 0;
  width: 100%;
}
.app-info .card-body {
  color: #303030;
  text-align: center;
  position: relative;
  bottom: 15px;
  top: 1px;
  font-size: 1.3em;
}
.app-info .card-header {
  padding-left: 13px;
}
.chart {
  height: 320px;
}
.total-data {
  font-size: 1.5em;
}
.dropdown-divider {
  margin-bottom: 0px;
}
.dropdown-menu {
  padding-bottom: 0;
}
.info-header {
  width: 60px;
  height: 100%;
}
.info-body {
  list-style-type: none;
  text-align: left;
  padding-left: 12px;
  height: 100%;
  margin: 0;
}
.list-group {
  max-height: 300px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.create-data-set {
  color: #28a745;
  background-color: #fff;
  transition: color 0.4s, background-color 0.4s;
}
.create-data-set:hover {
  color: #fff;
  background-color: #28a745;
}
.delete-data-set {
  color: #dc3545;
  background-color: #fff;
  transition: color 0.4s, background-color 0.4s;
}
.delete-data-set:hover {
  color: #fff;
  background-color: #dc3545;
}
.dataset-not-found {
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: rgb(43, 43, 43);
}
#dataset-not-found-button {
  width: 20%;
  margin: auto;
  color: #28a745;
  text-decoration: none;
}
.info-title-body {
  background-color: #f29c2d;
}
.info-title-header {
  background-color: #c17d22;
}
.info-key-title-body {
  background-color: #dd4b39;
}
.info-key-title-header {
  background-color: #b03b2e;
}
.info-description-body {
  background-color: #2fc0ef;
}
.info-description-header {
  background-color: #249abe;
}
.fa-plus {
  transition: color 0.3s;
}
.fa-plus:hover {
  color: #28a745;
}
</style>
