<template>
  <div >
      <ul id="navbar">
          <li v-for="link in links" v-bind:key="link.link">
               <a v-bind:href="link.url">{{link.name}}</a>
          </li>
      </ul>

  </div>
</template>

<script>
/* eslint-disable */

export default {
  data: function () {
    return { 
        links:[
            {url:'/#/', name:'home'},
            {url:"/#/shoppingList", name:'shoppinglist'},
            {url:'/#/calendar', name:'mealplanner'},
            {url:'/#/cookbook', name:'cookbook'}
            // {link:'', name:''}
                    
        ]}
    },
  methods: {
      dothat(){

      }  
  },

  mounted () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>