<template>
  <div id="list">
    <p id="errorText" style="color:red">{{error}}</p>
     <!-- list Items in the groccery object and allow them to edited, needs refactoring in to components-->
    <ul id="list">
      <li class="listItem" v-for="groccery in groccerys" v-bind:key="groccery.id">
        <input type="checkbox" class="groccery-checkbox" v-on:click="check(groccery)" v-model="groccery.done">
        <del v-on:click="check(groccery)" v-if="groccery.done">{{groccery.name}}</del>
        <span v-on:click="check(groccery)" v-else>{{groccery.name}}</span>
        <br/>
        <label>Yield(servings)</label><input type="text" v-on:keyup.enter="updateList(groccery)" v-model="groccery.yield"><br/>
        <label>Yield Unit</label><input type="text" v-on:keyup.enter="updateList(groccery)" v-model="groccery.yieldUnit"><br/>
        <label>Calories per serving</label><input type="text" v-on:keyup.enter="updateList(groccery)" v-model="groccery.servingCalories"><br/>
        <button class="list-buton" v-on:click="removeTodo(groccery.id)">X</button><br/>
      </li>
    </ul>
    <!-- input for new -->
    <div id="addGroccery">
      <input type="text" class="groccery-input" v-on:keyup.enter="addTodo" placeholder="Groccery name..." >
    </div>
  </div>
</template>

<script>
import axios from 'axios'

let apiURL = 'http://172.16.1.86:3000'

export default {
  data: function () {
    return {
      groccerys: [{}],
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
      this.groccerys = this.groccerys.filter((groccerys) => groccerys.id !== id) // this is a list function, it's made to run on lists.
      axios
        .delete(apiURL + '/api/groccerylists/' + id)
        .catch((error) => { this.error = error })
    },
    check (groccery) {
      groccery.done = !groccery.done
      this.updateList(groccery)
    },
    updateList (groccery) {
      axios
        .post(apiURL + '/api/groccerylists/' + groccery.id + '/replace', groccery)
        .then((error) => console.log(error))
        .then((response) => { this.groccerys = response.data })
        .catch((error) => { this.error = error.response })
    },
    getList () {
      axios
        .get(apiURL + '/api/groccerylists')
        .then((response) => {
          this.groccerys = response.data
        })
        .catch((error) => {
          this.error = error
        })
    },
    newTodo (event) {
      const name = event.target.value // sets the const name to value from the event that fired the function
      axios
        .post(apiURL + '/api/groccerylists', {
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
