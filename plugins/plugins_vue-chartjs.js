/* eslint-disable vue/require-prop-types */
import Vue from 'vue'
import { Line } from 'vue-chartjs'

Vue.component('MyLine', {
  extends: Line,
  props: ['options', 'mydata'],
  mounted() {
    this.renderChart(this.mydata, this.options)
  },
})
