<template>
<div class="experience">
  <h2 id="prof-experience">Professional Experience</h2>
  <div class="job-section">
    <div class="card" data-aos='fade-up' v-for="job in jobs">
      <div class="job">
        <div class="upper-card">
          <h3>{{job.title}}, {{job.company}}</h3>
          <h3>{{job.date}}</h3>
        </div>
        <div class="lower-card" v-bind:class='"mode" + job.id % 2'>
          <div class="test">
            <ul>
              <div class="deck" v-for='point in job.deck'>
                <li>{{point}}</li>
              </div>
            </ul>
            <div class="logo-div">
              <img :src='job.img' class='logo'>
            </div>
          </div>
        </div>
        <div class="tags">
          <h5 v-for='tag in job.tags'>{{tag}}</h5>
        </div>
      </div>
    </div>
  </div>
  <h2 id="edu-experience">Education</h2>
  <div class="job-section">
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
          <div class="tags" v-for='tag in item.tags'>
            <h6>{{tag}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 id="edu-experience">Projects</h2>
  <div class="job-section">
    <div class="card" v-for="item in projects">
      <div class="job">
        <div class="upper-card">
          <h3>{{item.title}}, {{item.school}}</h3>
        </div>
        <div class="lower-card" v-bind:class='"mode" + item.id % 2'>
          <div class="deck">
            <p>{{item.deck}}</p>
          </div>
          <div>
            <img :src='item.img' class='logo'>
          </div>
          <div class="tags" v-for='tag in item.tags'>
            <h6>{{tag}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import anime from 'animejs'
import VueScrollShow from 'vue-scroll-show'
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
        id: 1,
        title: "Accounting Technician",
        company: "KCK Inc.",
        date: "November 2013 - January 2018",
        deck: ["Coordinate with business partners to create efficient invoicing and reporting protocols",
          "Create custom financial reports to make recommendations on contract proposals, which have led to contract wins valued over at over 5 million dollars",
          "Research and stay up to date on latest government regulations and trends",
          "Help grow the company from a startup with 5 employees to one with well over 100"
        ],
        img: require("../assets/kck_logo.png"),
        tags: ['Excel', 'Payroll']
      }, {
        id: 2,
        title: "Intern",
        company: "RocketML",
        date: "June 2017 - July 2017",
        deck: ['Ported entire legacy website to WordPress and developed new, custom theme template', 'Plan, manage, and coordinate work between another intern in a remote environment',
          'Developed PHP plugin for WordPress to auto-generate, format and display external content on the company blog',
          'Improved maintainability code and efficiency of workflows by implementing system of code comments and highly-detailed project documentation'
        ],
        img: require('../assets/rocketml_logo.png'),
        tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
      }, ],
      education: [{
          id: 1,
          title: 'JavaScript/PHP Track',
          school: 'Epicodus',
          date: 'January 2017 - July 2017',
          deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
          img: 'http://dummyimage.com/149x120.png/ff4444/ffffff',
          tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
        },
        {
          id: 2,
          title: 'A.S., Computer Science',
          school: 'Northern Virginia Community College',
          date: 'August 2015 - December 2016',
          deck: 'Couse work in datastructures, algorithms, object oriented programming and computer architecture',
          img: require('../assets/nvcc_logo.jpg'),
          tags: ['Java', 'Datastructures', '']
        },
      ],
      projects: [{
          id: 1,
          title: 'Project',
          school: 'Link',
          deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
          img: 'http://dummyimage.com/149x120.png/ff4444/ffffff',
          tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
        },{
            id: 2,
            title: 'Project2',
            school: 'Link',
            deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
            img: 'http://dummyimage.com/149x120.png/ff4444/ffffff',
            tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
          },{
            id: 3,
            title: 'Project2',
            school: 'Link',
            deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
            img: 'http://dummyimage.com/149x120.png/ff4444/ffffff',
            tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
          },{
            id: 4,
            title: 'Project2',
            school: 'Link',
            deck: 'jkfga jdkjfgj j joifjgoidfjgaerg ergekgeirgef frgepodfin sksdn vdnxdn cvnxohn iuhbiuhn in isnfj nsdk nsd, nsduh so osij osidh lisyguydb aousidv iusyobv iyctvugb ytxdrctuvybuyvtdrx yubictruvbivtcfuvbtcruvibvtcf t byuiv vy vy vygu yguv v vygu viuyb ud biudcb ihbdbj d  dfvnhdfc nv  rf dfhnvc jnvdn df vdfijnd d',
            img: 'http://dummyimage.com/149x120.png/ff4444/ffffff',
            tags: ['PHP', 'MySQL', 'AWS', 'Heroku', 'HTML/JavaScript/CSS', 'WordPress']
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

.experience {
  display: flex;
  flex-direction: column;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 1.6rem;
  padding: 1.3rem;
  background-color: white;
  background-blend-mode: lighten;
  width: 62rem;
}

.upper-card {
  display: flex;
  /* justify-content: space-between; */
}

#prof-experience,
#edu-experience {
  text-align: center;
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

.tags h5 {
  border: 2px solid purple;
  border-radius: 3.5px;
  padding: 2px;
  margin: 2px;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.lower-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.test {
  display: flex;
  flex-direction: row;
}

.job {
  padding: 15px;
}

.logo {
  height: 150px;
}
</style>
