<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import navigation from './components/navigation'
import bottom from './components/bottom'
export default {
  name: 'App',
  components:{
    navigation,
    bottom
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  /* font-family: 'Work Sans', sans-serif; */
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background-color: #54A2B7; */
  /* background-color: #76b4c5; */
  /* background-color: #d77a7c; */
  margin: 0px;
}
body {
  background-color: #272727;
}
</style>
