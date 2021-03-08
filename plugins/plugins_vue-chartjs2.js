/* eslint-disable vue/require-prop-types */
import Vue from 'vue'
import { Scatter } from 'vue-chartjs'

Vue.component('MyScatter', {
  extends: Scatter,
  props: ['mydata'],
  data() {
    return {
      Options: {
        layout: {
          padding: {
            left: 3,
            right: 3,
            top: 3,
            bottom: 3,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                tickMarkLength: 0,
                display: false,
                // drawborder: true,
                // linewidth: 0,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                tickMarkLength: 0,
                display: false,
                // drawborder: true,
                // linewidth: 0,
              },
            },
          ],
        },
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.mydata, this.Options)
  },
})
