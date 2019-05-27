
<template>
  <div id="home">
      <p>{{msg}}</p>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      msg: 'Hello, welcome. Please feel free to browse around, but you\'ll want to check out the calandar to add items to it/generate.'
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
