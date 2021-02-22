import Vue from 'vue'
import { Line } from 'vue-chartjs'

Vue.component('my-line', {
  extends: Line,
  props: ['options', 'mydata'],
  mounted() {
    this.renderChart(this.mydata, this.options)
  },
})
