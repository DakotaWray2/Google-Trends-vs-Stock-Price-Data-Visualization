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
          // enabled: false,
        },
        legend: {
          labels: {
            fontColor: '#dedede',
          },
        },
        title: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              z: 5,
              type: 'time',
              distribution: 'linear',
              time: {
                unit: 'year',
                // unitStepSize: 10,
              },
              gridLines: {
                drawOnChartArea: false,
                zeroLineColor: 'rgba(255, 213, 0, 0.4)',
                color: 'rgba(255, 213, 0, 0.4)',
              },
              ticks: {
                fontColor: '#ffd300',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(255, 213, 0, 0.4)',
              },
              ticks: {
                padding: 15,
                fontColor: '#ffd300',
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
                color: '#ffd300',
              },
            },
            {
              id: 'C',
              ticks: {
                fontColor: '#ffd300',
                // eslint-disable-next-line object-shorthand
                callback: function (value, index, values) {
                  return '$' + value / 1e8 + 'B'
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
