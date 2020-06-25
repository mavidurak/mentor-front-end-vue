<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          <div class="row">
            <div class="col-md-8">
              <h5>Api Uygulamaları</h5>
            </div>
            <div class="col-md-4">
              <router-link to="/api-dashboard-vmc/add-or-update" class="btn btn-success float-right">Oluştur</router-link>
            </div>
          </div>
          </div>
        <hr />
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Açıklama</th>
              <th scope="col">Oluşturma Tarihi</th>
              <th scope="col">Son Güncelleme</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in applications" :key="app.id">
              <th scope="row">{{ app.id }}</th>
              <td>{{ app.title }}</td>
              <td>{{ app.description }}</td>
              <td>{{ app.createDate }}</td>
              <td>{{ app.lastUpdate }}</td>
              <td>
                <router-link :to="{ name: 'ApiAddOrUpdateMC', params: { app: app } }" class="btn btn-primary">Güncelle</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        <router-view/>

  </div>
</template>

<script>
export default {
  title: 'ApiTable',
  data: () => {
    return {
      applications: [
        { id: 1, title: 'app1', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app1-desc' },
        { id: 2, title: 'app2', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app2-desc' },
        { id: 3, title: 'app3', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app3-desc' },
        { id: 4, title: 'app4', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app4-desc' },
        { id: 5, title: 'app5', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app5-desc' },
        { id: 6, title: 'app6', createDate: '12.03.2006', lastUpdate: '24.05.2017', description: 'app6-desc' }
      ]
    }
  }
}
</script>

<style></style>
