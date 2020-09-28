<template>
  <div>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
        <div class="row">
          <div class="col-3 px-5 py-0">
          <h5>Api</h5>
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
            <template v-slot:item.actions="{ item }">
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
export default {
  title: 'ApiTable',

  components: {},

  data: () => {
    return {
      applications: [
        {
          id: 1,
          title: 'app1',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app1-desc'
        },
        {
          id: 2,
          title: 'app2',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app2-desc'
        },
        {
          id: 3,
          title: 'app3',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app3-desc'
        },
        {
          id: 4,
          title: 'app4',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app4-desc'
        },
        {
          id: 5,
          title: 'app5',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app5-desc'
        },
        {
          id: 6,
          title: 'app6',
          createDate: '12.03.2006',
          lastUpdate: '24.05.2017',
          description: 'app6-desc'
        }
      ],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Create Date', value: 'createDate' },
        { text: 'Last Update', value: 'lastUpdate' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  }
}
</script>

<style scoped>
</style>
