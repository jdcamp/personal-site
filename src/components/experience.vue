<template>
<div class="experience">
  <div class="job-section">
    <div class="card" v-for="job in jobs">
      <div class="job">
        <div class="upper-card">
          <h3>{{job.title}}</h3>
          <h3>{{job.date}}</h3>
        </div>
        <div class="lower-card">
          <p>{{job.deck}}</p>
          <img v-bind:src = job.img>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'experience',
  data() {
    return {
      jobs: [{
        "title": "Staff Accountant II",
        "date": "2/13/2018",
        "deck": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "img": "http://dummyimage.com/125x191.png/dddddd/000000"
      }, {
        "title": "Research Nurse",
        "date": "1/1/2018",
        "deck": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "img": "http://dummyimage.com/118x109.png/cc0000/ffffff"
      }, {
        "title": "Cost Accountant",
        "date": "2/1/2018",
        "deck": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "img": "http://dummyimage.com/105x167.png/5fa2dd/ffffff"
      }, {
        "title": "Data Coordiator",
        "date": "11/6/2017",
        "deck": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "img": "http://dummyimage.com/178x179.png/ff4444/ffffff"
      }, {
        "title": "Financial Analyst",
        "date": "9/30/2017",
        "deck": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "img": "http://dummyimage.com/183x245.png/dddddd/000000"
      }, {
        "title": "Civil Engineer",
        "date": "1/21/2018",
        "deck": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "img": "http://dummyimage.com/149x120.png/ff4444/ffffff"
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-section {
  display: flex;
  flex-direction: column;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 15px;
  padding: 10px;
  background-color: #EFF6F7;
  background-blend-mode: lighten;
}

.upper-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.lower-card {
  display: flex;
  flex-direction: row;
}
</style>
