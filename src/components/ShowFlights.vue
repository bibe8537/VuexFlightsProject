<template>
  <div id="showflights">
    <div class="show-flights">
    <h1>Our Flights are</h1>
    <ul>
    <li v-for="flight in runFlights" :key=flight.name>
      <span class="name">{{flight.name}}</span>
      <span class="name">-----{{flight.duration}}hr</span>
    </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
/* mapGetters and mapActions are used where we have so many getters in store and we want call them by name.
 mapGetters are called from computed
 mapActions are called from methods */

export default {
 computed: {
   flights(){ // store values in flights property
     return this.$store.state.flightsData; // reaching to store and grabbing data
   },
   runFlights(){
    return this.$store.getters.newFlights; // access the getter method in store and manipulate data if needed
   },

   ...mapGetters([
       'newFlights'
   ])
 },
 methods: {
     ...mapActions([ 
        'reduceDuration'
     ])
 }
}
</script>

<style>
.show-flights {
    background: beige;
    margin: 40px
}
</style>
