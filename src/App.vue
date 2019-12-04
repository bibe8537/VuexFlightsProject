<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/plane.png">
    <div class="flight">
    <!-- <CreateFlights v-bind:flights="flightsData"></CreateFlights> -->
    <OperateFlights></OperateFlights>
    <show-flights></show-flights>
    </div>
  </div>
</template>

<script>
import OperateFlights from './components/OperateFlights.vue'
import ShowFlights from './components/ShowFlights.vue'

export default {
  components: {
    'OperateFlights': OperateFlights,
    'show-flights': ShowFlights
  },
  name: 'app',
  data() {
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
