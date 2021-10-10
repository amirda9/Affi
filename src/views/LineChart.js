import { Bar } from 'vue-chartjs'
import { onMounted } from 'vue-demi'

export default {
  extends: Bar,
  setup(){
    onMounted(()=>{
      this.renderChart(this.chartdata, this.options);
    })
  },
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

}