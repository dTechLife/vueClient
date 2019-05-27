<template>
    <div>
      <navbar/>
      <router-view/> <!-- this element is necessary to route our application! -->
    </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
