<template>
  <div id="app">
    <navigation></navigation>
    <home></home>
    <experience></experience>
    <about></about>
    <bottom></bottom>
  </div>
</template>

<script>
import navigation from './components/navigation'
import home from './components/home'
import experience from './components/experience'
import about from './components/about'
import bottom from './components/bottom'
import AOS from 'aos'
import Sticky from 'sticky-js'

export default {
  created() {
    AOS.init();
  },
  name: 'App',
  components:{
    navigation,
    bottom,
    about,
    experience,
    home,
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
}
body {
  /* background-color: #272727; */
  background-color: whitesmoke;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0
}
</style>
