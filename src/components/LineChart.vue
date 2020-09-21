<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line, // grafiğin türü belirlenir.
  mounted () {
    this.renderChart({
      labels: ['Mon', 'Tue', 'Wedn', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Created applications per day',
          fill: true,
          data: [12, 20, 18, 39, 23, 25, 14, 23],
          pointBackgroundColor: '#232323',
          borderColor: ' #000000',

          backgroundColor: ' #42A5F5'
        }
      ]
    })
  }
}
</script>
