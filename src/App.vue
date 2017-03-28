<template>
  <div id="app">
    <NewsList></NewsList>
  </div>
</template>

<script>
import NewsList from './components/NewsList.vue'

export default {
  name: 'app',
  components: {
    NewsList
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
