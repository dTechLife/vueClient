<template>
  <div id="cookBook">
    <p id="errorText" style="color:red">{{error}}</p>
     <!-- list Items in the cookbook object and allow them to edited, needs refactoring in to components-->
    <ul id="list">
      <li class="listItem" v-for="recipe in recipes" v-bind:key="recipe.id">
        <input type="checkbox" class="recipe-checkbox" v-on:click="check(recipe)" v-model="recipe.done">
        <del v-on:click="check(recipe)" v-if="recipe.done">{{recipe.name}}</del>
        <span v-on:click="check(recipe)" v-else>{{recipe.name}}</span>
        <br/>
        <label>Yield(servings)</label><input type="text" v-on:keyup.enter="updateList(recipe)" v-model="recipe.yield"><br/>
        <label>Yield Unit</label><input type="text" v-on:keyup.enter="updateList(recipe)" v-model="recipe.yieldUnit"><br/>
        <label>Calories per serving</label><input type="text" v-on:keyup.enter="updateList(recipe)" v-model="recipe.servingCalories"><br/>
        <button class="list-buton" v-on:click="removeTodo(recipe.id)">X</button><br/>
      </li>
    </ul>
    <!-- input for new -->
    <div id="addRecipe">
      <input type="text" class="recipe-input" v-on:keyup.enter="addTodo" placeholder="Recipe name..." >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

let apiURL = 'http://172.16.1.86:3000'
const apiURI = '/api/groccerylists/'

export default {
  data: function () {
    return {
      recipes: [{}],
      error: ''
    }
  },
  methods: {
    addTodo (event) {
      this.newTodo(event)
      this.getList()
      event.target.value = ''
    },
    removeTodo (id) {
      this.recipes = this.recipes.filter((recipes) => recipes.id !== id) // this is a list function, it's made to run on lists.
      axios
        .delete(apiURL + apiURI + id)
        .catch((error) => { this.error = error })
    },
    check (recipes) {
      recipes.done = !recipes.done
      this.updateList(recipes)
    },
    updateList (recipes) {
      axios
        .post(apiURL + apiURI + recipes.id + '/replace', recipes)
        .then((error) => console.log(error))
        .then((response) => { this.recipes = response.data })
        .catch((error) => { this.error = error.response })
    },
    getList () {
      axios
        .get(apiURL + apiURI)
        .then((response) => {
          this.recipes = response.data
        })
        .catch((error) => {
          this.error = error
        })
    },
    newTodo (event) {
      const name = event.target.value // sets the const name to value from the event that fired the function
      axios
        .post(apiURL + apiURI, {
          name: name,
          ingredients: { potatoes: 1 },
          yield: 0,
          yieldUnit: 'lbs',
          done: false,
          servingCalories: 100
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.error = error
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  word-break: break-all
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.listItem{
  margin: 3px 0px !important;
  background-color:rgb(100, 100, 100);
  color:white;
}
#addGroccery{
  background-color:rgb(100,100,100);
}
</style>
