/* eslint-disable vue/require-prop-types */
import Vue from 'vue'
import { Line } from 'vue-chartjs'

Vue.component('MyLine', {
  extends: Line,
  props: ['mydata'],
  data() {
    return {
      Options: {
        tooltips: {
          enabled: false,
        },
        title: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'linear',
              time: {
                unit: 'year',
                // unitStepSize: 10,
              },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                // eslint-disable-next-line object-shorthand
                callback: function (value, index, values) {
                  return '$' + value
                },
              },
              id: 'A',
              position: 'left',
            },
            {
              id: 'B',
              position: 'right',
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
            {
              id: 'C',
              ticks: {
                // eslint-disable-next-line object-shorthand
                callback: function (value, index, values) {
                  return '$' + value / 1e7 + 'B'
                },
              },
              position: 'right',
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.mydata, this.Options)
  },
})
