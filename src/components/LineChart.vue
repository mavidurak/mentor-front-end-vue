<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line, // grafiğin türü belirlenir.
  mounted () {
    this.renderChart({
      labels: ['Huawei', 'Oppo', 'Vestel', 'Xaomi', 'Blackberry', 'Honor', 'General-Mobile', 'Samsung', 'Iphone', 'Realme', 'Nokia'],
      datasets: [
        {
          label: 'Telefon Satışları',
          fill: false,
          data: [40, 20, 18, 39, 10, 40, 39, 80, 40, 20, 16], // veri girisi yapılır.
          borderColor: [
            ' #000000',
            ' #FFFFFF',
            ' #000000',
            ' #FFFFFF',
            ' #000000',
            ' #FFFFFF',
            ' #000000',
            ' #FFFFFF',
            ' #000000',
            ' #FFFFFF',
            ' #000000'
          ],
          backgroundColor: [ // noktaların rengi belirlenir.
            ' #42A5F5',
            ' #CC0000',
            ' #CC00FF',
            ' #00FF00',
            ' #42A5F5',
            ' #3333CC',
            ' #990000',
            ' #FF66FF',
            ' #42A5F5',
            ' #00FFCC',
            ' #FF0000'
          ]
        }
      ]
    })
  }
}
</script>
