<template>
<div class="home">
  <div class="personal-image">
    <!-- <svg id="image-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" height="300" xmlns:xlink="http://www.w3.org/1999/xlink">
         <defs>
          <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
            <img width="300" height="300" src='../assets/headphoto.jpeg' />
         </pattern>
         </defs>
         <polygon class="hex" stroke-linecap="butt" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url('#image-bg')"></polygon>
       </svg> -->
       <img src="../assets/headphoto.jpeg" alt="">
  </div>
  <div class="home-summary">
    <p>Web developer with practical and theoretical knowledge of programming.  Experienced with PHP, WordPress, Drupal, NodeJS, VueJS.  Interested in using technology to solve business problems. I highly value collaboration, continuous learning and happy hours.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  padding: 25px;
  background-color: whitesmoke;
}

.hex {
  stroke: black;
  stroke-width: 3
}

.personal-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
  flex-direction: column;
}
.personal-image img {
  height: 340px;
  border-radius: 110px
}

.home-summary {
  text-align: center;
  font-size: 1.5em;
  font-weight: 400;
  padding: 25px 55px 20px 20px;
  width: 80vw;
  margin: auto;
}

.home-summary:after {
  content: "";
  /* This is necessary for the pseudo element to work. */
  display: block;
  /* This will put the pseudo element on its own line. */
  margin: 0 auto;
  /* This will center the border. */
  width: 50%;
  /* Change this to whatever width you want. */
  padding-top: 20px;
  /* This creates some space between the element and the border. */
  border-bottom: 1px solid black;
  /* This creates the border. Replace black with whatever color you want. */
}
</style>
