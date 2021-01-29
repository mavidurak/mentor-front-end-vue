import Axios from 'axios'
SubmitData()
function SubmitData () {
  Axios.post('http://localhost:4000/authentications/register/', {
    username: this.username,
    password: this.password,
    email: this.email,
    name: this.name
  })
    .then((respose) => {
      if (respose.status === 201) {
        console.log('Success')
      }
    })
    .catch((err) => {
      if (err.response.status === 400) {
        const errorText = err.response.data.error.details[0].message
        console.log(errorText)
      }
    })
}
