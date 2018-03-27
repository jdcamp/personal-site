<template>
<div class='experience' id='experience'>


  <h2 id='prof-experience' data-aos-once='true' data-aos='fade-up' data-aos-duration='560'>Professional Experience</h2>
  <div class='job-section'>
    <div class='card' data-aos='fade-up' data-aos-once='true' data-aos-duration='560' v-for='job in jobs'>
      <div class='job'>
        <div class='upper-card'>
          <h3>{{job.title}}, {{job.company}}</h3>
          <h3>{{job.date}}</h3>
        </div>
        <div class='lower-card' v-bind:class='"mode" + job.id % 2'>
          <div class='test'>
            <ul>
              <div class='deck' v-for='point in job.deck'>
                <li>{{point}}</li>
              </div>
            </ul>
            <div class='logo-div'>
              <img :src='job.img' class='logo'>
            </div>
          </div>
          <div class='tags'>
            <p v-for='tag in job.tags'>{{tag}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <h2 id='edu-experience' data-aos-once='true' data-aos='fade-up' data-aos-duration='560'>Education</h2>
  <div class='job-section'>
    <div class='card anchor' data-aos-once='true' data-aos='fade-up' data-aos-duration='560' v-for='item in education'>
      <div class='job'>
        <div class='upper-card'>
          <h3>{{item.title}}, {{item.school}}</h3>
          <h3>{{item.date}}</h3>
        </div>
        <div class='lower-card' v-bind:class='"mode" + item.id % 2'>
          <div class='test'>

            <div class='deck'>
              <p>{{item.deck}}</p>
            </div>
            <div class='logo-div'>
              <img :src='item.img' class='logo'>
            </div>
          </div>
          <div class='tags'>
            <p v-for='tag in item.tags'>{{tag}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <h2 id='edu-experience' data-aos-once='true' data-aos='fade-up' data-aos-duration='560'>Projects</h2>
  <div class='job-section'>
    <div class='card' data-aos-once='true' data-aos='fade-up' data-aos-duration='560' v-for='item in projects'>
      <div class='job'>
        <div class='upper-card'>
          <a :href='item.link'>
            <h3>{{item.title}}</h3>
          </a>
        </div>
        <div class='lower-card' v-bind:class='"mode" + item.id % 2'>
          <div class='test'>

            <div class='deck'>
              <p>{{item.deck}}</p>
            </div>
            <div class='logo-div'>
              <img :src='item.img' class='logo'>
            </div>
          </div>
          <div class='tags'>
            <p v-for='tag in item.tags'>{{tag}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  methods: {
    animes: function () {
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
        title: 'Accounting Technician',
        company: 'KCK Inc.',
        date: 'November 2013 - January 2018',
        deck: ['Coordinate with business partners to create efficient invoicing and reporting protocols',
          'Create custom financial reports to make recommendations on contract proposals, which have led to contract wins valued over at over 5 million dollars',
          'Research and stay up to date on latest government regulations and trends',
          'Help grow the company from a startup with 5 employees to one with well over 100'
        ],
        img: require('../assets/kck_logo.png'),
        tags: ['Excel', 'Payroll', 'Contract Pricing', 'Financial Forcasting']
      }, {
        id: 2,
        title: 'Intern',
        company: 'RocketML',
        date: 'June 2017 - July 2017',
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
          deck: 'A 25 week fully immersive coding bootcamp focusing on web dev technologies and practicle experience.',
          img: require('../assets/epicodus_logo.png'),
          tags: ['PHP', 'MySQL', 'NoSQL', 'Ember', 'Drupal-7/8', 'Typescript', 'HTML/CSS/JavaScript', 'Angular', 'Paired Programming']
        },
        {
          id: 2,
          title: 'A.S., Computer Science',
          school: 'Northern Virginia Community College',
          date: 'August 2015 - December 2016',
          deck: 'Couse work in datastructures, algorithms, object oriented programming and computer architecture.',
          img: require('../assets/nvcc_logo.jpg'),
          tags: ['Java', 'Datastructures', 'UML', 'OOP Design']
        },
      ],
      projects: [{
          id: 1,
          title: 'Talkers',
          link: 'https://stalking-caf97.firebaseapp.com/',
          deck: 'A messaging service using Angular 2, Firebase real-time database, and Google maps API. Users can see people logged in, message chains and friend requests sent by other users.',
          img: require('../assets/talkers_logo.png'),
          tags: ['Angular', 'Firebase/NoSQL', 'HTML/JavaScript/CSS', 'Typescript', ]
        },
        {
          id: 2,
          title: 'AutoBlogger WP Plugin',
          link: 'https://github.com/jdcamp/rssfeed-wp',
          deck: 'A Wordpress plugin that will autopost content from rss feeds at a given interval. Used to populate wordpress blog with articles about a given topic given an rss feed. Can filter based on keywords and topics for more relevent articles. Uses picoFeed for rss parsing',
          img: require('../assets/rssfeed_logo.png'),
          tags: ['WordPress', 'MySQL', 'PHP', 'HTML/JavaScript/CSS',]
        },
        {
          id: 3,
          title: 'Job Board Module',
          link: 'https://github.com/jdcamp/job-board',
          deck: 'A Drupal module that implements a job board. Allows easy implemention of a careers page for a Drupal 7 site. Comes with default categories and can add categories as needed. ',
          img: require('../assets/rssfeed_logo.png'),
          tags: ['PHP', 'MySQL', 'HTML/JavaScript/CSS', 'Drupal-7', 'SCSS']
        },
        {
          id: 4,
          title: 'Personal Site',
          link: 'https://github.com/jdcamp/personal-site',
          deck: 'You are looking at it. Built with Vuejs, express, and webpack.',
          img: require('../assets/personal_site_logo.png'),
          tags: ['Vue', 'HTML/JavaScript/CSS', 'AnimeJS',]
        },
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.job-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.experience {
  display: flex;
  flex-direction: column;
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  margin: 1.6rem;
  padding: 1.3rem;
  background-color: white;
  background-blend-mode: lighten;
  width: 68rem;
  border-radius: 7px;
  flex-basis: 1;
}

.upper-card {
  display: flex;
  justify-content: space-between;
}

#prof-experience,
#edu-experience {
  text-align: center;
}
@media (min-width: 670px) {
  .card{
    min-width: calc(32.5% - 10px);
  }
}
.mode1 {
  display: flex;
  flex-direction: row;
  /* align-items: stretch; */
}

.mode0 .deck {
  display: flex;
  /* align-items: stretch; */
  flex-direction: row;
  order: 99;
}

.tags p {
  border: 1px solid #FD5AE8;
  border-radius: 5.5px;
  padding: 2px;
  margin: 2px;
  font-size: 1.2rem;
  flex-wrap: nowrap;
}

.tags p:hover {
  background-color: salmon;
  color: white;
  transform: scale(1.1);
  transition-duration: .5s;
  border: 1px solid salmon
}

.tags p:nth-child(2n):hover {
  background-color: #FD5AE8;
  color: white;
  transform: scale(1.1);
  transition-duration: .5s;
  border: 1px solid #FD5AE8
}

.tags p:nth-child(3n):hover {
  background-color: #5AE8FD;
  color: white;
  transform: scale(1.1);
  transition-duration: .5s;
  border: 1px solid #5AE8FD
}

.tags p:nth-child(4n):hover {
  background-color: #29fca5;
  color: white;
  transform: scale(1.1);
  transition-duration: .5s;
  border: 1px solid #29fca5
}

.deck {
  font-size: 1.5rem;
}

.tags {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  /* align-content: center; */
}

.lower-card {
  display: flex;
  flex-direction: column;
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
  height: 175px;
}

@media all and (max-width: 1279px) {
  .test {
    flex-direction: column-reverse;
  }
  .logo-div {
    order: 1;
    align-self: center;
  }
  .logo-div image {
    height: auto;
    max-width: 175px
  }
}
</style>
