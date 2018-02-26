<template>
<div class="experience">
  <h2  v-on:click='animes()'>Professional Experience</h2>
  <div class="job-section">
    <div class="card" v-for="job in jobs">
      <div class="job">
        <div class="upper-card">
          <h3>{{job.title}}, {{job.company}}</h3>
          <h3>{{job.date}}</h3>
        </div>
        <div class="lower-card" v-bind:class='"mode" + job.id % 2'>
          <div class="deck">
            <p>{{job.deck}}</p>
          </div>
          <div>
            <img :src='job.img' class='logo'>
          </div>
        </div>
      </div>
    </div>
    <!-- <h2>Education</h2> -->
    <div class="card" v-for="item in education">
      <div class="job">
        <div class="upper-card">
          <h3>{{item.title}}, {{item.school}}</h3>
          <h3>{{item.date}}</h3>
        </div>
        <div class="lower-card" v-bind:class='"mode" + item.id % 2'>
          <div class="deck">
            <p>{{item.deck}}</p>
          </div>
          <div>
            <img :src='item.img' class='logo'>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import anime from 'animejs'
export default {
  methods: {
    // animes: function(e) {
    //   alert('working')
    // }
      animes: function() {
        let el = document.querySelectorAll('.job')
        anime({
        targets: el,
        translateX: [{
          value: 100,
          duration: 1200
        },
        {
          value: 0,
          duration: 800
        }
      ],
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 2000,
      loop: true
    })
  }
  },
  data() {
    return {
      name: 'experience',
      jobs: [{
        "id": 1,
        "title": "Accounting Technician",
        "company": "KCK Inc.",
        "date": "November 2013 - January 2018",
        "deck": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "img": require("../assets/kck_logo.png"),
        tags: ['Excel']
      }, {
        "id": 2,
        "title": "Intern",
        "company": "RocketML",
        "date": "June 2017 - July 2017",
        "deck": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "img": require('../assets/rocketml_logo.png'),
        tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS']
      }, {
        "id": 3,
        "title": "Cost Accountant",
        "company": "RocketML",
        "date": "2/1/2018",
        "deck": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "img": "http://dummyimage.com/105x167.png/5fa2dd/ffffff"
      }, {
        "id": 4,
        "title": "Data Coordiator",
        "company": "RocketML",
        "date": "11/6/2017",
        "deck": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "img": "http://dummyimage.com/178x179.png/ff4444/ffffff"
      }, {
        "id": 5,
        "title": "Financial Analyst",
        "company": "RocketML",
        "date": "9/30/2017",
        "deck": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "img": "http://dummyimage.com/183x245.png/dddddd/000000"
      }, {
        "id": 6,
        "title": "Civil Engineer",
        "company": "RocketML",
        "date": "1/21/2018",
        "deck": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "img": "http://dummyimage.com/149x120.png/ff4444/ffffff"
      }],
      education: [{
          id: 1,
          title: 'JavaScript/PHP Track',
          school: 'Epicodus',
          date: '1-1-1',
          deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
          img: 'http://dummyimage.com/149x120.png/ff4444/ffffff'
        },
        {
          id: 2,
          title: 'A.S., Computer Science',
          school: 'Northern Virginia Community College',
          date: '1-1-1',
          deck: 'Couse work in datastructures, algorithms, object oriented programming and computer architecture',
          img: 'http://dummyimage.com/149x120.png/ff4444/ffffff'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 1.6rem;
  padding: 1.3rem;
  background-color: #EFF6F7;
  background-blend-mode: lighten;
  width: 50rem;
}

.upper-card {
  display: flex;
  /* justify-content: space-between; */
}

.mode1 {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.mode0 .deck {
  display: flex;
  flex-direction: row;
  order: 99;
}

.lower-card {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.job {
  padding: 15px;
}

.logo {
  height: 150px;
}
</style>
