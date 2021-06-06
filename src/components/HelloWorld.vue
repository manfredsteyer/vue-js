<template>
  <div class="hello">
    <h1>
      {{ msg }}
      <img alt="Vue logo" src="https://cli.vuejs.org/favicon.png" height="30">
    </h1>
    <p>
      Vue Version: {{ version }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {  
    msg: String,
    version: {
      type: String,
      default: require('../../package.json').dependencies.vue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
