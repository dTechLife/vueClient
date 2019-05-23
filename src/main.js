//import list from './components/List.js'
// import listAdd from './components/listAdd.js'
// import navBar from './components/navBar.js'


var app = new Vue({
    el: '#App',
    data:{
          groccerys:[
                //we want to fetch this object from a database
            {id:"1", name:"bannanas", quantity:"Quantity", unit:"grams", done:false}
      
      ]},

      methods:{
            addTodo(event){     
                  const name = event.target.value //sets the const name to value from the event that fired the function
                  this.groccerys.push({name, done:false, id:Date.now()})
                  event.target.value = ''
            },

            removeTodo(id){
                  this.groccerys = this.groccerys.filter(function(groccerys){ return groccerys.id !== id})  // this is a list function, it's made to run on lists.    
              
            },
            
            check(groccery){
                  groccery.done = !groccery.done
            }

      },
      mounted(){
            axios
                  .get('url')
                  .then(function(response){ this.groccerys = response})
      }
})