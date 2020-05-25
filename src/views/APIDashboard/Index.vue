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
              <router-link to="/apiDashboard/AddOrUpdate" class="btn btn-success float-right">Oluştur</router-link>
            </div>
          </div>
          </div>
        <hr />
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">İsim</th>
              <th scope="col">Açıklama</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in applications" :key="app.id">
              <th scope="row">{{ app.id }}</th>
              <td>{{ app.name }}</td>
              <td>{{ app.description }}</td>
              <td>
                <router-link :to="{ name: 'ApiAddOrUpdate', params: { app: app } }" class="btn btn-primary">Güncelle</router-link>
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
  name: 'ApiTable',
  data: () => {
    return {
      applications: [
        { id: 1, name: 'app1', description: 'app1-desc' },
        { id: 2, name: 'app2', description: 'app2-desc' },
        { id: 3, name: 'app3', description: 'app3-desc' },
        { id: 4, name: 'app4', description: 'app4-desc' },
        { id: 5, name: 'app5', description: 'app5-desc' }
      ]
    }
  }
}
</script>

<style></style>
