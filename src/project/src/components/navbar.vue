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
            {url:"/#/shoppingList", name:'Shopping List'},
            {url:'/#/calendar', name:'Meal Planner'},
            {url:'/#/cookbook', name:'CookBook'}
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

ul{
   list-style-type: none;
   background-color:rgb(100,100,100);
   margin:8px 0px;
  }
  /* A link that has not been visited */
a:link {
    color: rgb(255, 255, 255);
}

/* A link that has been visited */
a:visited {
    color: rgb(255, 255, 255);
}

/* A link that is hovered on */
a:hover {
    color: rgb(137, 137, 211);
}

/* A link that is selected */
a:active {
    color: rgb(92, 107, 243);
}
</style>