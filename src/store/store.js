import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// creating central store of application
export const store = new Vuex.Store({
    // define data i.e. state here
    state: { 
        flightsData: [
            {id: 1, name: 'Lufthansa', origin: 'A', destination: 'B', duration: 3, status: 1},
            {id: 2, name: 'Qatar', origin: 'A', destination: 'B', duration: 2, status: 1},
            {id: 3, name: 'Ryan', origin: 'B', destination: 'C', duration: 2, status: 1}
          ]  
    },
    getters: { // create any kind of manipulation in the components and can be called from any component. 
        // But store state original data is not changed. change in one component does not affect the other.
        // so we need to call the getters from every components 'computed' where we need the change
        newFlights: state => { 
        var runflights = state.flightsData.map(flight => {
            // map method takes the origin flightsData from store and map(cycling the array) it with new object runflights
            return{
              name: '**'+ flight.name +'**', // assigning new value
              duration: 2+flight.duration // assign new value
            }
            });
           return runflights;
        }
    },
   mutations: { // manipulate the original store state objects. So if value is changed in one component automatically reflects in other component
       changeFlightDuration: (state, payload) => {
            state.flightsData.forEach(element => {
                element.duration -= payload;
              });
            },
       // async functions like fetching data from DB or setTimeout function where data is changed automatically
       // should not be called from a single 'mutation'. BCZ for more than one async functions it is hard to track
       // which one has created the change. To avoid this problem we use 'actions'. 'actions' sits btn components  which commits the mutation
        runAFlight: (state, payload) => {
           state.flightsData.filter(flight => {
                if(flight.id == payload){
                    flight.duration = 0;
                    flight.status = 0;
                }
            })
        },
        removeFlights: state => {
            state.flightsData.filter(flight => {
                flight.status != 0;
               })
        }
    },
    actions: { // use for doing any kind of mutation. ASYNC functions should always be created under 'actions'
        reduceDuration: (context, payload) => { // context also represents the 'state', payload is a parameter value that comes from component where we pass some value
            setTimeout(function(){
            context.commit('changeFlightDuration', payload) // calling the 'mutation' which we want to do .. can be grabbing data from somewhere OR communication with server
            }, 3000)
        },

        flyAFlight: (context, payload) => { 
            setTimeout(function(){
            context.commit('runAFlight', payload) 
            }, 5000)
            context.commit('removeFlights')

        }
    }
})
