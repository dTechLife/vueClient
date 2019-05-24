//import list from './components/List.js'
// import listAdd from './components/listAdd.js'
// import navBar from './components/navBar.js'
let apiURL = "http://localhost:3000"




var app = new Vue({
    el: '#App',
    data:{
          groccerys:[
                //we want to fetch this object from a database
            {
                  id:"1", name:"bannanas", quantity:"Quantity", unit:"grams", done:false
            }
            
      ]},

      methods:{
            addTodo(event){     
                
                  const name = event.target.value //sets the const name to value from the event that fired the function
                  this.groccerys.push({name, done:false, id:Date.now()})
                  axios
                  .post(apiURL+'/api/groccerylists',{
                        name:name,
                        ingredients:{"potatoes":1},
                        yield:0,
                        yieldUnit:"lbs",
                        servingCalories:100})
                  .then (function(response){
                        console.log(response);})
                  .catch(function(error){
                        console.log(error);
                  })
                  event.target.value = ''
            },

            removeTodo(id){
                  this.groccerys = this.groccerys.filter(function(groccerys){return groccerys.id !== id})  // this is a list function, it's made to run on lists.    
                  axios 
                      .delete(apiURL) 
            },
            
            check(groccery){
                  groccery.done = !groccery.done
            }

      },
      mounted(){
            axios
                  .get(apiURL+'/api/groccerylists')
                  .then(function(response){ app.groccerys = response.data, console.log(response)})
                  
      }
})

      // [
      // {
      //       "name": "Baked potatoes",
      //       "ingredients": {
      //         "potatoes": {
      //           "amount": "3",
      //           "unit": "potato"
      //         },
      //         "butter": {
      //           "amount": 5,
      //           "unit": "tsp"
      //         }
      //       },
      //       "yield": 3,
      //       "yieldUnit": "baked potatoes",
      //       "servingCalories": 300,
      //       "id": 1
      //     }
      //   ]