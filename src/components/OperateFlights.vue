<template>
  <div id="create-flights">
    <div class="create-new">
      <h1>Operate Flights</h1>
      <ul>
        <li v-for="flight in flights" :key="flight.id">
          <div v-if="flight.status == 1" class="launch-flight">
            <span class="name"><strong>{{ flight.name }}</strong></span>
            <p class="name">Duration: {{ flight.duration }}hr</p>
            <div>
              <div v-show="isNinja">
              <p> Want to run the flight?</p>
              <flyingFlight v-bind:flightIdprop=flight.id></flyingFlight>
              </div>
              <p v-show="!isNinja">No flight</p>
            </div>
          </div>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
import FlyFlight from "./FlyFlight";

export default {
  components: {
    flyingFlight: FlyFlight
  },
  data() {
    return {
      component: "",
      isFlightStarted: false,
      isFlightLanded: false,
      flightstatus: "",
      isNinja:true,
    };
  },
  computed: {
    flights() {
      // store values in flights property
      return this.$store.state.flightsData; // reaching to store and grabbing data
    },
    runFlights() {
      return this.$store.getters.newFlights; // access getters for new manipulated data
    }
  },
  methods: {
    // we want to adit store data
    reduceFlightTime(amount) {
      //  this.$store.state.flightsData.forEach(element => {
      //    element.duration -= 1;
      //  });
      /* problem here for using method to change store data is it is not transparent and hard to understand and track in 
    in a complex project that where the data is being changed. So we use 'mutation' in store.js to do this kind of 
    state(data) change as it changes the data objects globally. */

      // this.$store.commit('changeFlightDuration'); // calling the mutation(changeFlightDuration) from store.js..calling it by 'commit'
      this.$store.dispatch("reduceDuration", amount); // calls the 'actions' by name .... dispatch , 'amount' is a parameter
    },
  }
};
</script>

<style>
.create-new {
  margin: 40px;
}
.launch-flight {
  background: white;
  padding: 40px;
  border: 2px solid #6aeabb;
}

</style>
