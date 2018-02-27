<!--
todo
Add links to social buttons
add link to resume download
 -->

<template>
<div class="footer">
  <div class="sitemap">
    <h5>Download Resume</h5>
  </div>
  <div class="social">
<a href="https://github.com/jdcamp">
    <img src="../assets/github_logo.png" alt="github logo">
  </a>
  <a href="https://www.linkedin.com/in/jdcampa/">
    <img src="../assets/linkedin_logo.png" alt="linkedin logo">
  </a>
  </div>
  <h5>Created by Jake Campa</h5>
</div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  /* background-color: #396D74; */
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
}

.social {
  align-self: center;
}

.social img {
  height: 45px;
}

.sitemap {
  align-self: center;
}
h5 {
  text-align: center;
}
</style>
