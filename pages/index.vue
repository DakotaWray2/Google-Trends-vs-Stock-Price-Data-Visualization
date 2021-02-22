<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Digital_Olympics2</h1>
      <client-only>
        <my-line v-if="showLine" :options="options" :mydata="lineData">
        </my-line>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    const lineData = {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [
        {
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: 'Africa',
          borderColor: '#3e95cd',
          fill: false,
        },
        {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: 'Asia',
          borderColor: '#8e5ea2',
          fill: false,
        },
        {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: 'Europe',
          borderColor: '#3cba9f',
          fill: false,
        },
        {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: 'Latin America',
          borderColor: '#e8c3b9',
          fill: false,
        },
        {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: 'North America',
          borderColor: '#c45850',
          fill: false,
        },
      ],
    } // some data
    const options = {
      title: {
        display: true,
        text: 'World population per region (in millions)',
      },
    } // some options
    return { lineData, options }
  },
  data() {
    return {
      showLine: false,
    }
  },
  mounted() {
    this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
