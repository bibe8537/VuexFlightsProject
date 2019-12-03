<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="flight">
    <!-- <CreateFlights v-bind:flights="flightsData"></CreateFlights> -->
    <CreateFlights></CreateFlights>
    <show-flights></show-flights>
    </div>
  </div>
</template>

<script>
import CreateFlights from './components/CreateFlights.vue'
import ShowFlights from './components/ShowFlights.vue'

export default {
  components: {
    'CreateFlights': CreateFlights,
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
