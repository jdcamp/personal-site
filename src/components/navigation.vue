<template>
<div class="navigation">
  <h1 id='site-title'>Jake Campa</h1>
  <div class="personal-image">

  <svg id="image-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
     <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
       <image width="300" height="300" xlink:href="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0OAAAAJDEzYWFiZGMzLTcwNTItNGNhYS1hMzI2LTRjMjU0YTY2Nzc3Mg.jpg"></image>
    </pattern>
    </defs>
    <polygon class="hex" stroke-linecap="butt" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url('#image-bg')"></polygon>
  </svg>
</div>
  <div class="navbar">
      <router-link :to="{path: '/'}" replace>
        <h4>Home</h4>
      </router-link>
      <h4>/</h4>
      <router-link :to="{path: '/Experience'}" replace>
        <h4>Experience</h4>
      </router-link>
      <h4>/</h4>
      <router-link :to="{path: '/About'}" replace>
        <h4>About</h4>
      </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
}
.navbar {
   -moz-box-shadow:    inset 0px 0 10px 0px #000000;
   -webkit-box-shadow: inset 0px 0 10px 0px #000000;
   box-shadow:         inset 0px 0px 7px 0px #000000;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  /* background-color: #ACE3B1; */
  background-color: #bce8c0;
  font-size: 1.72rem;
}
.navbar h4 {
  border: solid 2px red;
}
.navigation {
  /* background-color: #D45B58; */
  background-color: #d77a7c;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
#site-title{
  text-align: center;
  padding-top: 8px;
}
.hex {
  stroke:purple;
  stroke-linecap:butt;
  stroke-width:1
}
</style>
