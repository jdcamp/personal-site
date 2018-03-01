<template>
<div class="home">

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
     <div class="home-summary">
       <p>After spending the last few years working in the accounting fiel</p>
     </div>
  <!-- <div class="container">
    <div id='grid'></div>
  </div> -->

</div>
</template>

<script>
export default {


  name: 'home',
  data() {
    return {
    }
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
  stroke:black;
  stroke-width:4
 }
 .personal-image {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 25rem;
   flex-direction: column;
 }
 .home-summary {
   text-align: center;
 }
</style>
