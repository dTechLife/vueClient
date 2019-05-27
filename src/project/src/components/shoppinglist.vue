
<template>
  <div id="cookbook">
      <p>{{$store.state.count}}</p>
       <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      msg: 'cookbook'
    }
  },
  methods: {},
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
