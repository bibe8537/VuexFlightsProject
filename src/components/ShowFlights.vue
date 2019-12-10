<template>
  <div id="showflights">
    <div class="show-flights">
      <h1>Our Flights are</h1>
        <div v-for="flight in flights" :key="flight.name">
          <span class="name">{{ flight.name }},</span>
          <span class="name">Duration: {{ flight.duration }}hr</span>
        </div>
      <div>
        <h3>Want to create a new flight?</h3>
        <button class='create' v-on:click="createNewFlights()">Create New Flight</button>
      </div>
    </div>
  <div>
    <h3>Flight already flown</h3>
    <div v-for="flight in flightHistory" :key="flight.id">
    <p>{{ flight.name }} and id: {{ flight.id }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
/* mapGetters and mapActions are used where we have so many getters in store and we want call them by name.
 mapGetters are called from computed
 mapActions are called from methods */

export default {
  computed: {
    flights() {
      // store values in flights property
      return this.$store.state.flightsData; // reaching to store and grabbing data
    },
    runFlights() {
      return this.$store.getters.newFlights; // access the getter method in store and manipulate data if needed
    },

    flightHistory(){
      return this.$store.state.flightHistory;
    },
    ...mapGetters([
      // calling mapGetters for few getters together
      "newFlights" // name of the getter method
    ]),

    //fetchedNewFlights() {
      // this is a mutation as we are adding new flight globally
      //return this.$store.getters.createNewFlights;
   // }
  },
  methods: {
    createNewFlights() {
      this.$store.commit("newFlightAdding");
    },
    ...mapActions(["reduceDuration"])
  }
};
</script>

<style>
.show-flights {
  background: beige;
  margin: 40px;
  border-radius: 20px;
}
.create {
  border-radius: 5px;
  background: #6aeabb;
  height: 35px;
  font-weight: 900;
}
</style>
