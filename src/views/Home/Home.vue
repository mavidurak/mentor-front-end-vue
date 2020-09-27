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
                  Total API <br />
                  <strong class="total-data">{{ apiCount }}</strong>
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
        <!--DataSet info-->
        <div class="row">
          <div class="col">
            <div class="card">
              <!--DataSet info navbar-->
              <div class="card-header chart-header">
                <div class="data-set-name">
                  {{ dataSets[selectedDataSet]["title"] }}
                </div>
                <!--DataSet edit and select-->
                <div class="select-data-set">
                  <div class="btn-group">
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
                      <button class="dropdown-item" type="button">
                        Change '<strong>title</strong>', '<strong
                          >key title</strong
                        >', '<strong>description</strong>'
                      </button>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item delete-data-set" href="#">
                        <strong>Delete</strong> this Data Set</a
                      >
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
                      <ul style="list-style-type: none">
                        <li v-for="dataSet in dataSets" :key="dataSet.title">
                          <button class="dropdown-item" type="button" @click="selectDataSet(dataSet)">
                            {{ dataSet.title }}
                          </button>
                        </li>
                      </ul>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item create-data-set" href="#"
                        ><strong>Create</strong> Data Set</a
                      >
                    </div>
                  </div>
                </div>
                <!--End of DataSet edit and select-->
              </div>
              <!--End of DataSet info navbar-->
              <!--DataSet info body-->
              <div class="card-body">
                <div class="row">
                  <!--vue-chart-->
                  <div class="col-8 chart">
                    <LineChart :height="250" :width="580" />
                  </div>
                  <!--End of vue-chart-->
                  <div class="col-4">
                    <table style="width: 100%;color: white;border-collapse: separate;border-spacing: 0px 30px;">
                      <tr style="margin-bottom:25%;">
                        <td class="info-header info-title-header">
                          <i class="fas fa-3x fa-heading"></i>
                        </td>
                        <td>
                          <ul class="info-body info-title-body">
                            <li><h4>Title:</h4></li>
                            <li>{{ dataSets[selectedDataSet]["title"] }}</li>
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
                            <li>{{ dataSets[selectedDataSet]["key_title"] }}</li>
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
                            <li>{{ dataSets[selectedDataSet]["description"] }}</li>
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
                  <div class="col">
                    <span>Data Type: <strong> Temperature(*C)</strong> </span>
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
                            <td v-for="data in datas" :key="data.created_at">
                              {{ data.created_at }}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Value</th>
                            <td v-for="data in datas" :key="data.value">
                              {{ data.value }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <!--End of Data info-->
            </div>
          </div>
        </div>
        <!--End of DataSet info-->
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../../components/LineChart'

export default {
  name: 'Home',
  components: {
    LineChart
  },
  methods: {
    selectDataSet: function (dataset) {
      this.selectedDataSet = dataset.id - 1
      console.log(dataset)
    }
  },
  data () {
    return {
      selectedDataSet: 0,
      apiCount: '7',
      dataSetCount: '15',
      dataSets: [
        {
          id: '1',
          title: 'My-Data-Set-1',
          key_title: 'DataSet1',
          description: 'It is my data set 1'
        },
        {
          id: '2',
          title: 'My-Data-Set-2',
          key_title: 'DataSet2',
          description: 'It is my data set 2'
        },
        {
          id: '3',
          title: 'My-Data-Set-3',
          key_title: 'DataSet3',
          description: 'It is my data set 3'
        }
      ],
      dataCount: '683',
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
      ]
    }
  },
  created: () => {
    document.body.className = ''
  }
}
</script>
<style scoped>
.data-set-name {
  text-align: center;
  font-size: 1.5em;
  float: left;
  font-weight: bold;
}
.select-data-set {
  float: right;
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
  padding: 5px;
}
.card-header {
  padding: 5px;
  padding-left: 20px;
  padding-bottom: 0px;
}
.card-footer {
  background-color: white;
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
.create-data-set {
  color: #28a745;
  background-color: #fff;
}
.create-data-set:hover {
  color: #fff;
  background-color: #28a745;
}
.delete-data-set {
  color: #dc3545;
  background-color: #fff;
}
.delete-data-set:hover {
  color: #fff;
  background-color: #dc3545;
}
.dropdown-menu {
  padding-bottom: 0;
}
.info-header{
  width: 60px;
  height: 100%;
}
.info-body{
  list-style-type: none;
  text-align: left;
  padding-left: 12px;
  height: 100%;
  margin:0;
}
.info-title-body{
  background-color:#f29c2d;
}
.info-title-header{
  background-color:  #c17d22;
}
.info-key-title-body{
  background-color:#dd4b39;
}
.info-key-title-header{
  background-color: #B03B2E;
}
.info-description-body{
  background-color:#2FC0EF;
}
.info-description-header{
  background-color:  #249ABE;
}
</style>
