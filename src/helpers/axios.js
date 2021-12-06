import axios from 'axios'
import swal from 'sweetalert'

const Axios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('X-AccessToken')
  config.headers.common['X-AccessToken'] = token
  return config
}, (error) => {
  if (error.response.status === 401) {
    swal(
      'Session expired!',
      'Please sign in again!',
      'error'
    )
  }
  return Promise.reject(error)
})

export default Axios
