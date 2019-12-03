<template>
  <div id="create-flights">
    <div class="create-new">
    <h1>Create Flights</h1>
    <ul>
    <li v-for="flight in flights" :key=flight.id>
      <div class="launch-flight">
      <span class="name">{{flight.name}}</span>
      <span class="name">-----{{flight.duration}}hr</span>
      <div>
          <button v-on:click="landthisFlight(flight.id)">Start Flight</button>
      </div>
      </div>
    </li>
    </ul>
    <div v-if="isFlightStarted == true || isFlightLanded == false">
      <div class='example'></div>
      <h1>Flight took off</h1>
      {{changeFlightStatus()}}
    </div>
    <!-- <button v-on:click="reduceFlightTime(2)">Run Flight</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlightStarted: false,
      isFlightLanded: false,
      flightstatus: ''
    }
  },
 computed: {
   flights(){ // store values in flights property
     return this.$store.state.flightsData; // reaching to store and grabbing data
   },
   runFlights(){
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
    this.$store.dispatch('reduceDuration', amount); // calls the 'actions' by name .... dispatch , 'amount' is a parameter
 },
 landthisFlight(pId){
    this.isFlightStarted = true;
    this.$store.dispatch('flyAFlight', pId); // calls the 'actions' by name .... dispatch , 'amount' is a parameter
 },
 changeFlightStatus(){
   this.isFlightLanded = true;
 }
 }
}
</script>

<style>
.create-new {
  background: burlywood;
  margin: 40px
}
.launch-flight {
  background: white;
  padding: 40px;
  border: 2px solid #6aeabb
}
.example {
  width: 64px;
  height: 64px;
  background-image: url("../assets/flighta.png");
  background-color: #cccccc00;
  position: relative;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 4s;
}
@-webkit-keyframes example {
   0%   {background-color:#cccccc00; left:0px; top:0px; background-image: url("../assets/flighta.png")}
  100%  {background-color:#cccccc00; left:900px; top:0px; background-image: url("../assets/flighta.png")}
}

/* Standard syntax */
@keyframes example {
   0%   {background-color:#cccccc00; left:0px; top:0px;background-image: url("../assets/flighta.png")}
  100%  {background-color:#cccccc00; left:900px; top:0px;background-image: url("../assets/flighta.png")}
}
</style>
