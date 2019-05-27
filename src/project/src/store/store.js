import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let apiURL = 'http://172.16.1.86:3000'
const apiURI = '/api/recipes/'

const state = {
  count: 0,
  recipes: [{}],
  error: ''
}
/* eslint-disable */ 
export default new Vuex.Store({
  state,
  getters: {
    recipes: state => {
      return state.recipes;
    }
  },
  mutations: {
    // used for setters
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
    // recipes: (recipes) => (this.state.recipes = recipes)
  },
  actions: {
    fetchRecipes(context) {
      axios
        .get(apiURL + apiURI)
        .then(response => {
          context.commit("SET_RECIPES", response.data.recipes);
        })
        .catch(error => {
          context.commit("SET_ERROR", response.error);
        });
    }
  }
});
