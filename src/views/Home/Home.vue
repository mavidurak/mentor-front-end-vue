<template>
  <div>
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
              <AppDetailsViewPill title="Permissions">
                <AppDatasetViewPill v-if="selectedApp.permission_read" color="border-success" title="Read"/>
                <AppDatasetViewPill v-if="selectedApp.permission_write" color="border-primary" title="Write"/>
                <AppDatasetViewPill v-if="selectedApp.permission_delete" color="border-danger" title="Delete"/>
              </AppDetailsViewPill>
              <AppDetailsViewPill title="Creation Date" :content="selectedApp.createdAt"/>
              <AppDetailsViewPill title="Last Update" :content="selectedApp.updatedAt"/>
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
                      <ul>
                        <li v-for="dataSet in dataSets" :key="dataSet.data_set.id">
                          <button
                            class="dropdown-item"
                            type="button"
                            @click="selectDataSet(dataSet.data_set)"
                          >
                            {{ dataSet.data_set.title }}
                          </button>
                        </li>
                      </ul>
                      </div>
                    </div>
                  </li>
                </ol>
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
                      <apexchart
                        ref="realtimeChart"
                        width= "100%"
                        height="100%"
                        type="area"
                        :responsive="responsive"
                        :options="options"
                        :series="series">
                      </apexchart>
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
                <div class="row">
                  <div class="col">
                    <div class="row">
                    <div class="col">
                      <div class="card app-info">
                        <div
                          class="card-header"
                          style="background-color: #dc4146"
                        >
                          App Id
                        </div>
                        <div class="card-body">
                          {{ selectedApp.id }}
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card app-info">
                        <div
                          class="card-header"
                          style="background-color: #31a2b8"
                        >
                          App Title
                        </div>
                        <div class="card-body">
                          {{ selectedApp.title }}
                        </div>
                      </div>
                    </div>
                    </div>
                    <div class="row">
                      <div class="col">
                      <div class="card app-info">
                        <div
                          class="card-header"
                          style="background-color: #4fa845"
                        >
                          Data Set Title
                        </div>
                        <div class="card-body">
                          {{ selectedDataSet.title }}
                        </div>
                      </div>
                    </div>
                      <div class="col">
                        <div class="card app-info">
                          <div
                            class="card-header"
                            style="background-color: #fec134"
                          >
                            Data Set Id
                          </div>
                          <div class="card-body">
                            {{ selectedDataSet.id }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="card app-info">
                          <div
                            class="card-header"
                            style="background-color: #6c757d"
                          >
                            App Description
                          </div>
                          <div class="card-body">
                            {{ selectedApp.description }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="card app-info">
                          <div
                            class="card-header"
                            style="background-color: #7952b3"
                          >
                            App Read Permission
                          </div>
                          <div class="card-body">
                            {{ selectedApp.permission_read }}
                          </div>
                        </div>
                      </div>
                      <div class="col">
                          <div class="card app-info">
                            <div
                              class="card-header"
                              style="background-color: #7952b3"
                            >
                              App Write Permission
                            </div>
                            <div class="card-body">
                              {{ selectedApp.permission_write }}
                            </div>
                        </div>
                      </div>
                      <div class="col">
                          <div class="card app-info">
                            <div
                              class="card-header"
                              style="background-color: #7952b3"
                            >
                              App Delete Permission
                            </div>
                            <div class="card-body">
                              {{ selectedApp.permission_delete }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <div class="card app-info">
                          <div
                            class="card-header"
                            style="background-color: black"
                          >
                            Location
                          </div>
                          <div class="card-body">
                            <div id="map">
                              <google-map />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Application info-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '../../components/GoogleMap'
import LineChart from '../../components/LineChart'
import Axios from 'axios'
import AppDetailsViewPill from '@/components/viewpill/AppDetailsViewPill'
import AppDatasetViewPill from '@/components/viewpill/AppDatasetViewPill'

export default {
  name: 'Home',
  components: {
    LineChart,
    GoogleMap
  },
  methods: {
    // For chart refreshing
    updateSeriesLine () {
      this.$refs.realtimeChart.updateSeries([{
        data: this.series[0].data
      }], false, true)
    },
    selectDataSet: function (dataset) {
      Axios.get(`http://localhost:4000/data-sets/with-datas/${dataset.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.series[0].data = response.data.result.datas.map(function (val) {
          return {
            x: val.createdAt,
            y: val.value
          }
        })
        this.selectedDataSet = response.data.result
        this.updateSeriesLine()
      })
    },
    selectApp: function (app) {
      Axios.get(`http://localhost:4000/applications/with-dataset-options/${app.id}`, {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then(response => {
        this.selectedApp = response.data.result
        this.dataSets = response.data.result.application_datasets
        if (this.dataSets.length === 0) {
          return
        }
        this.selectDataSet(this.dataSets[0].data_set)
      })
    },
    getAppOptions: async function () {
      await Axios.get('http://localhost:4000/applications/options', {
        headers: {
          'X-AccessToken': localStorage.getItem('X-AccessToken')
        }
      }).then((response) => {
        if (response.data.count === 0) {
          return
        }
        this.apps = response.data.results
        this.selectApp(this.apps[0])
      })
    }
  },
  data () {
    return {
      dataSetCount: null,
      dataSets: null,
      selectedDataSet: {},
      appCount: '',
      selectedApp: {},
      apps: [],
      dataCount: null,
      datas: [],
      app: null,
      dataInput: null,
      // Chart settings
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          type: 'datetime'
        }
      },
      // Datas which will show at one chart
      series: [{
        data: []
      }],
      // Configration for responsive charts
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
