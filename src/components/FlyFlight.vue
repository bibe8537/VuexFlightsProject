<template>
  <div id="run-flights">
    <div v-if="isFlightLanded == true">
        <p>Flight id: {{ flightIdprop }}</p>
      <div class='example'></div>
      <h1>Flight took off</h1>
      {{changeFlightStatus()}}
    </div>
    <button class='start' v-on:click="landthisFlight(flightIdprop)"
    >Start Flight</button>
    <p v-show="!isEnd">......Flight already flown.....</p>
    </div>
</template>

<script>

export default {
    props: ['flightIdprop'],
  component: {
  },
  data() {
    return {
      isFlightLanded: false,
      flightstatus: '',
      isEnd:true,
    }
  },
 computed: {
 },
 methods: {
 landthisFlight(pId){
    this.isFlightLanded = true;
    this.$store.dispatch('flyAFlight', pId); // calls the 'actions' by name .... dispatch , 'amount' is a parameter
 },
 changeFlightStatus(){
   this.isFlightLanded = true;
 }
 }
}
</script>

<style>
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
.start{
  background: #ff9f5b;
  height: 35px;
  font-weight: 900;
border-radius: 5px;
}
</style>
 