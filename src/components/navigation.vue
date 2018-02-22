<template>
<div class="navigation">
  <div class="personal-image">

  <svg id="image-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
     <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
       <image width="300" height="300" xlink:href="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0OAAAAJDEzYWFiZGMzLTcwNTItNGNhYS1hMzI2LTRjMjU0YTY2Nzc3Mg.jpg"></image>
    </pattern>
    </defs>
    <polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url('#image-bg')"></polygon>
  </svg>
</div>
  <div class="navbar">
      <router-link :to="{path: '/'}" replace>
        <h4>Home</h4>
      </router-link>
      <router-link :to="{path: '/Experience'}" replace>
        <h4>Experience</h4>
      </router-link>
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
      msg: 'Welcome to Your Vue.js App'
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
  height: 36rem;
}
.navbar {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #ACE3B1;
}
.navigation {
  background-color: #D45B58;
  border-radius: 5px;
}
</style>
