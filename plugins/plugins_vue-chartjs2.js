/* eslint-disable vue/require-prop-types */
import Vue from 'vue'
import { Scatter } from 'vue-chartjs'

Vue.component('MyScatter', {
  extends: Scatter,
  //  props: ['mydata'],
  data() {
    return {
      Data: {
        datasets: [
          {
            data: [
              {
                x: 5,
                y: 4,
              },
              {
                x: 2,
                y: 14,
              },
              {
                x: 4,
                y: 12,
              },
              {
                x: 2,
                y: 10,
              },
              {
                x: 3,
                y: 4,
              },
              {
                x: 3,
                y: 5,
              },
              {
                x: 3,
                y: 8,
              },
              {
                x: 6,
                y: 12,
              },
            ],
          },
        ],
      },
      Options: {
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
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
    this.renderChart(this.Data, this.Options)
  },
})
