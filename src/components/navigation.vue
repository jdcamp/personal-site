<template>
<div class="navigation">
  <div class="container">
    <div id="grid">
      {{ createGrid(movePixels) }}
    </div>
  </div>
  <div class="intro">
    <p id='intro-deck'>Hello, my name is Jake Campa. I am a software engineer living in Portland, Oregon. I like to <span class="pink-accent">build</span>, <span class="teal-accent">create</span>, <span class="green-accent">break</span> and <span class="red-accent">fix</span> code.</p>
  </div>
  <div class="navbar" id="navbar">
      <h4 v-scroll-to="'#grid'">Home</h4>
      <h4 v-scroll-to="'#experience'">Experience</h4>
      <h4 v-scroll-to="'#about'">About</h4>
  </div>
</div>
</template>

<script>
import Sticky from 'sticky-js'
export default {
  mounted () {
    var sticky = new Sticky('.navbar')
    //     window.onscroll = function() {myFunction()};
    //
    // // Get the navbar
    // var navbar = document.getElementById("navbar");
    //
    // // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;
    // console.log(sticky);
    //
    // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // function myFunction() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    // }
  },
  /// ////////////////
  // Animation
  /// ////////////////
  methods: {
    createGrid: function (callback) {
      this.$nextTick(function () {
        var grid = document.getElementById('grid')
        for (let i = 0; i < 10; i++) {
          let column = document.createElement('div')
          let xCor = i.toString()
          column.classList.add('column' + xCor)
          column.classList.add('column')
          for (let j = 0; j < 10; j++) {
            let yCor = j.toString()
            let unit = document.createElement('div')
            unit.classList.add('p' + xCor + yCor)
            unit.classList.add('pixel')
            column.appendChild(unit)
          }
          grid.appendChild(column)
        }
        callback()
      })
    },

    movePixels: function () {
      let initialColorRed = '#BF4D46'
      let initialColorBlue = '#92D9E7'
      let initialColorBlack = '#000'
      let coordinates = {
        p00: {
          x1: 2,
          y1: 0,
          x2: 0,
          y2: 10,
          color: initialColorBlue
        },
        p01: {
          x1: 2,
          y1: 1,
          x2: 0,
          y2: 11,
          color: initialColorBlue
        },
        p02: {
          x1: 2,
          y1: 2,
          x2: 1,
          y2: 1,
          color: initialColorRed
        },
        p03: {
          x1: 2,
          y1: 3,
          x2: 1,
          y2: 2,
          color: initialColorRed
        },
        p04: {
          x1: 2,
          y1: 4,
          x2: 1,
          y2: 3,
          color: initialColorRed
        },
        p05: {
          x1: 2,
          y1: 5,
          x2: 1,
          y2: 4,
          color: initialColorRed
        },
        p06: {
          x1: 1,
          y1: 6,
          x2: 1,
          y2: 5,
          color: initialColorRed
        },
        p07: {
          x1: 0,
          y1: 5,
          x2: 1,
          y2: 6,
          color: initialColorRed
        },
        p08: {
          x1: 4,
          y1: 1,
          x2: 1,
          y2: 7,
          color: initialColorBlue
        },
        p09: {
          x1: 5,
          y1: 1,
          x2: 1,
          y2: 8,
          color: initialColorRed
        },
        p10: {
          x1: 5,
          y1: 3,
          x2: 1,
          y2: 9,
          color: initialColorBlue
        },
        p11: {
          x1: 6,
          y1: 2,
          x2: 1,
          y2: 10,
          color: initialColorRed
        },
        p12: {
          x1: 6,
          y1: 3,
          x2: 1,
          y2: 12,
          color: initialColorBlue
        },
        p13: {
          x1: 4,
          y1: 4,
          x2: 2,
          y2: 0,
          color: initialColorRed
        },
        p14: {
          x1: 6,
          y1: 4,
          x2: 2,
          y2: 12,
          color: initialColorBlue
        },
        p15: {
          x1: 4,
          y1: 5,
          x2: 3,
          y2: 0,
          color: initialColorBlue
        },
        p16: {
          x1: 6,
          y1: 5,
          x2: 3,
          y2: 12,
          color: initialColorRed
        },
        p17: {
          x1: 5,
          y1: 6,
          x2: 4,
          y2: 0,
          color: initialColorRed
        },
        p18: {
          x1: 7,
          y1: 6,
          x2: 4,
          y2: 5,
          color: initialColorRed
        },
        p19: {
          x1: 9,
          y1: 0,
          x2: 4,
          y2: 6,
          color: initialColorRed
        },
        p20: {
          x1: 12,
          y1: 0,
          x2: 4,
          y2: 7,
          color: initialColorBlue
        },
        p21: {
          x1: 9,
          y1: 1,
          x2: 4,
          y2: 12,
          color: initialColorRed
        },
        p22: {
          x1: 12,
          y1: 1,
          x2: 5,
          y2: 1,
          color: initialColorBlue
        },
        p23: {
          x1: 9,
          y1: 2,
          x2: 5,
          y2: 2,
          color: initialColorBlue
        },
        p24: {
          x1: 11,
          y1: 2,
          x2: 5,
          y2: 4,
          color: initialColorBlue
        },
        p25: {
          x1: 9,
          y1: 3,
          x2: 5,
          y2: 5,
          color: initialColorRed
        },
        p26: {
          x1: 10,
          y1: 3,
          x2: 5,
          y2: 6,
          color: initialColorRed
        },
        p27: {
          x1: 9,
          y1: 4,
          x2: 5,
          y2: 7,
          color: initialColorRed
        },
        p28: {
          x1: 11,
          y1: 4,
          x2: 5,
          y2: 8,
          color: initialColorRed
        },
        p29: {
          x1: 9,
          y1: 5,
          x2: 5,
          y2: 12,
          color: initialColorBlue
        },
        p30: {
          x1: 12,
          y1: 5,
          x2: 6,
          y2: 2,
          color: initialColorBlue
        },
        p31: {
          x1: 9,
          y1: 6,
          x2: 6,
          y2: 4,
          color: initialColorBlue
        },
        p32: {
          x1: 12,
          y1: 6,
          x2: 6,
          y2: 5,
          color: initialColorBlue
        },
        p33: {
          x1: 15,
          y1: 2,
          x2: 6,
          y2: 6,
          color: initialColorBlue
        },
        p34: {
          x1: 16,
          y1: 2,
          x2: 6,
          y2: 7,
          color: initialColorBlack
        },
        p35: {
          x1: 14,
          y1: 3,
          x2: 6,
          y2: 8,
          color: initialColorRed
        },
        p36: {
          x1: 17,
          y1: 3,
          x2: 6,
          y2: 9,
          color: initialColorRed
        },
        p37: {
          x1: 14,
          y1: 4,
          x2: 6,
          y2: 12,
          color: initialColorRed
        },
        p38: {
          x1: 15,
          y1: 4,
          x2: 7,
          y2: 1,
          color: initialColorRed
        },
        p39: {
          x1: 16,
          y1: 4,
          x2: 7,
          y2: 5,
          color: initialColorBlue
        },
        p40: {
          x1: 14,
          y1: 5,
          x2: 7,
          y2: 6,
          color: initialColorBlue
        },
        p41: {
          x1: 17,
          y1: 6,
          x2: 7,
          y2: 7,
          color: initialColorBlue
        },
        p42: {
          x1: 15,
          y1: 6,
          x2: 7,
          y2: 8,
          color: initialColorBlue
        },
        p43: {
          x1: 16,
          y1: 6,
          x2: 7,
          y2: 9,
          color: initialColorBlue
        },
        p44: {
          x1: 22,
          y1: 0,
          x2: 7,
          y2: 10,
          color: initialColorRed
        },
        p45: {
          x1: 23,
          y1: 0,
          x2: 7,
          y2: 12,
          color: initialColorRed
        },
        p46: {
          x1: 21,
          y1: 1,
          x2: 8,
          y2: 1,
          color: initialColorRed
        },
        p47: {
          x1: 24,
          y1: 1,
          x2: 8,
          y2: 5,
          color: initialColorRed
        },
        p48: {
          x1: 21,
          y1: 2,
          x2: 8,
          y2: 6,
          color: initialColorRed
        },
        p49: {
          x1: 21,
          y1: 3,
          x2: 8,
          y2: 7,
          color: initialColorBlue
        },
        p50: {
          x1: 21,
          y1: 4,
          x2: 8,
          y2: 8,
          color: initialColorBlue
        },
        p51: {
          x1: 21,
          y1: 5,
          x2: 8,
          y2: 9,
          color: initialColorBlue
        },
        p52: {
          x1: 24,
          y1: 5,
          x2: 8,
          y2: 10,
          color: initialColorBlue
        },
        p53: {
          x1: 22,
          y1: 6,
          x2: 8,
          y2: 12,
          color: initialColorBlue
        },
        p54: {
          x1: 23,
          y1: 6,
          x2: 9,
          y2: 1,
          color: initialColorRed
        },
        p55: {
          x1: 26,
          y1: 1,
          x2: 9,
          y2: 4,
          color: initialColorRed
        },
        p56: {
          x1: 27,
          y1: 1,
          x2: 9,
          y2: 5,
          color: initialColorRed
        },
        p57: {
          x1: 28,
          y1: 2,
          x2: 9,
          y2: 6,
          color: initialColorRed
        },
        p58: {
          x1: 27,
          y1: 3,
          x2: 9,
          y2: 7,
          color: initialColorRed
        },
        p59: {
          x1: 28,
          y1: 3,
          x2: 9,
          y2: 8,
          color: initialColorBlue
        },
        p60: {
          x1: 26,
          y1: 4,
          x2: 9,
          y2: 9,
          color: initialColorBlue
        },
        p61: {
          x1: 28,
          y1: 4,
          x2: 9,
          y2: 12,
          color: initialColorBlue
        },
        p62: {
          x1: 26,
          y1: 5,
          x2: 10,
          y2: 0,
          color: initialColorBlue
        },
        p63: {
          x1: 28,
          y1: 5,
          x2: 10,
          y2: 1,
          color: initialColorBlue
        },
        p64: {
          x1: 27,
          y1: 6,
          x2: 10,
          y2: 4,
          color: initialColorBlack
        },
        p65: {
          x1: 29,
          y1: 6,
          x2: 10,
          y2: 5,
          color: initialColorRed
        },
        p66: {
          x1: 32,
          y1: 2,
          x2: 10,
          y2: 6,
          color: initialColorRed
        },
        p67: {
          x1: 34,
          y1: 2,
          x2: 10,
          y2: 7,
          color: initialColorRed
        },
        p68: {
          x1: 31,
          y1: 3,
          x2: 10,
          y2: 8,
          color: initialColorRed
        },
        p69: {
          x1: 33,
          y1: 3,
          x2: 10,
          y2: 12,
          color: initialColorBlue
        },
        p70: {
          x1: 35,
          y1: 3,
          x2: 11,
          y2: 0,
          color: initialColorBlue
        },
        p71: {
          x1: 31,
          y1: 4,
          x2: 11,
          y2: 5,
          color: initialColorRed
        },
        p72: {
          x1: 35,
          y1: 4,
          x2: 11,
          y2: 6,
          color: initialColorBlue
        },
        p73: {
          x1: 31,
          y1: 5,
          x2: 11,
          y2: 7,
          color: initialColorBlue
        },
        p74: {
          x1: 35,
          y1: 5,
          x2: 11,
          y2: 12,
          color: initialColorBlue
        },
        p75: {
          x1: 31,
          y1: 6,
          x2: 12,
          y2: 0,
          color: initialColorRed
        },
        p76: {
          x1: 35,
          y1: 6,
          x2: 12,
          y2: 12,
          color: initialColorRed
        },
        p77: {
          x1: 38,
          y1: 3,
          x2: 13,
          y2: 0,
          color: initialColorRed
        },
        p78: {
          x1: 39,
          y1: 3,
          x2: 13,
          y2: 12,
          color: initialColorRed
        },
        p79: {
          x1: 37,
          y1: 4,
          x2: 14,
          y2: 0,
          color: initialColorBlue
        },
        p80: {
          x1: 40,
          y1: 4,
          x2: 14,
          y2: 12,
          color: initialColorBlue
        },
        p81: {
          x1: 37,
          y1: 5,
          x2: 15,
          y2: 0,
          color: initialColorRed
        },
        p82: {
          x1: 40,
          y1: 5,
          x2: 15,
          y2: 5,
          color: initialColorBlue
        },
        p83: {
          x1: 37,
          y1: 6,
          x2: 15,
          y2: 6,
          color: initialColorRed
        },
        p84: {
          x1: 38,
          y1: 6,
          x2: 15,
          y2: 7,
          color: initialColorBlue
        },
        p85: {
          x1: 39,
          y1: 6,
          x2: 15,
          y2: 12,
          color: initialColorBlue
        },
        p86: {
          x1: 37,
          y1: 7,
          x2: 16,
          y2: 0,
          color: initialColorRed
        },
        p87: {
          x1: 37,
          y1: 8,
          x2: 16,
          y2: 2,
          color: initialColorRed
        },
        p88: {
          x1: 37,
          y1: 9,
          x2: 16,
          y2: 3,
          color: initialColorRed
        },
        p89: {
          x1: 42,
          y1: 1,
          x2: 16,
          y2: 4,
          color: initialColorRed
        },
        p90: {
          x1: 43,
          y1: 1,
          x2: 16,
          y2: 5,
          color: initialColorBlue
        },
        p91: {
          x1: 44,
          y1: 2,
          x2: 16,
          y2: 7,
          color: initialColorBlue
        },
        p92: {
          x1: 43,
          y1: 3,
          x2: 16,
          y2: 8,
          color: initialColorRed
        },
        p93: {
          x1: 44,
          y1: 3,
          x2: 16,
          y2: 9,
          color: initialColorRed
        },
        p94: {
          x1: 42,
          y1: 4,
          x2: 16,
          y2: 10,
          color: initialColorRed
        },
        p95: {
          x1: 44,
          y1: 4,
          x2: 16,
          y2: 11,
          color: initialColorRed
        },
        p96: {
          x1: 42,
          y1: 5,
          x2: 16,
          y2: 12,
          color: initialColorRed
        },
        p97: {
          x1: 44,
          y1: 5,
          x2: 17,
          y2: 0,
          color: initialColorRed
        },
        p98: {
          x1: 43,
          y1: 6,
          x2: 17,
          y2: 1,
          color: initialColorBlue
        },
        p99: {
          x1: 45,
          y1: 6,
          x2: 17,
          y2: 2,
          color: initialColorRed
        }
      }
      for (let cor in coordinates) {
        let pX1 = coordinates[cor].x1
        let pY1 = coordinates[cor].y1
        let pX2 = coordinates[cor].x2
        let pY2 = coordinates[cor].y2
        let xOffset = parseInt(cor.substring(1, 2))
        let yOffset = parseInt(cor.substring(2, 3))
        let delay1 = 3000
        let duration1 = 5000
        let startingColor = coordinates[cor].color
        let pixel = '.' + cor
        anime({
          targets: pixel,
          translateX: [
            {value: 15 * (pX1 - xOffset) - 18 * 15, duration: duration1, delay: delay1, elasticity: function () { return anime.random(50, 200) }},
            {value: 15 * (pX2 - xOffset) - 4 * 15, duration: duration1, delay: delay1, elasticity: function () { return anime.random(50, 200) }}
          ],
          translateY: [
            {value: 15 * (pY1 - yOffset), duration: duration1, delay: delay1, elasticity: function () { return anime.random(50, 200) }},
            {value: 15 * (pY2 - yOffset), duration: duration1, delay: delay1, elasticity: function () { return anime.random(50, 200) }}
          ],
          backgroundColor: [startingColor, '#FFF', '#40814A'],
          duration: (duration1 + delay1) * 2,
          // delay: function() {return anime.random(890,1600);},
          // duration: function() {return anime.random(2000,7000);},
          borderRadius: [2, 5, 5]
        })
      }
    }
  },

  name: 'navigation',
  data () {
    return {}
  }
}
import anime from 'animejs'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.personal-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
}
#intro-deck {
  font-size: 2em;
  color: whitesmoke;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 3rem;
}
.navbar h4 {
  text-align: center;
  font-style: normal;
  padding-bottom: 15px;
  font-size: 1.5rem;
}
.navbar h4:hover {
  cursor: pointer;
  color: #5AE8FD
}
.navbar {
  /* width: 100vw; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  /* background-color: #ACE3B1; */
  /* background-color: #bce8c0; */
  font-size: 2rem;
  background-color: #222;
  z-index: 1;
  color: white;
  height: 70px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}
.navigation {
  /* background-color: #D45B58; */
  /* background-color: #d77a7c; */
  background-color: #222;
  /* border-radius: 5px; */
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 72%;
  /* width: inherit; */
  padding-top: 15px;
}
.sticky + .content {
  padding-top: 35px;
}
#site-title {
  text-align: center;
  padding-top: 8px;
}

.pink-accent {
  color: #FD5AE8;
}
.teal-accent {
  color: #5AE8FD
}
.green-accent {
  color: #29fca5
}
.red-accent {
  color: salmon;
}

.container {
  margin: auto;
  display: flex;
  align-content: center;
  padding: 15px;
}
a {
  text-decoration: none;
}
#grid {
  display: flex;
  flex-direction: row;
}

.pixel {
  width: 15px;
  height: 15px;
  position: relative;
}
</style>
