<template>
  <div class="about">
    <NavBar />
    <v-container fluid>
      <div class="main-title">
        <div class="header">
          <!-- <h2>RESTAURNANT ORDER SYSTEM</h2> -->
          <div class="waviy2">
            <span style="--i: 1">R</span>
            <span style="--i: 2">E</span>
            <span style="--i: 3">S</span>
            <span style="--i: 4">T</span>
            <span style="--i: 5">A</span>
            <span style="--i: 6">U</span>
            <span style="--i: 7">R</span>
            <span style="--i: 8">A</span>
            <span style="--i: 9">N</span>
            <span style="--i: 10">T</span>
            <span>_</span>
            <span style="--i: 12">O</span>
            <span style="--i: 13">R</span>
            <span style="--i: 14">D</span>
            <span style="--i: 15">E</span>
            <span style="--i: 16">R</span>
            <span style="--i: 17"></span>
            <span>_</span>
            <span style="--i: 18">S</span>
            <span style="--i: 19">E</span>
            <span style="--i: 20">R</span>
            <span style="--i: 21">V</span>
            <span style="--i: 22">I</span>
            <span style="--i: 23">C</span>
            <span style="--i: 24">E</span>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <iframe
            width="642"
            height="361"
            src="https://www.youtube.com/embed/ygieCSa9lXg"
            title="Restaurant Order Service System"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col cols="12" md="6">
          <strong>
            * This site is developed by three developers for BSCamp's OJT
            project.* </strong
          ><br /><br />
          <strong><h2>Features</h2></strong><br />
          -Better Customer Management <br />
          -Better Customer Orders <br />
          -Time Saving <br />
          -Easy to Use <br />
          -Simple Invoicing and <br />
          -Quick Payment
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="footer">
            <p><strong>Git Hub</strong></p>
            <p>
              <a href="https://github.com/ThinzarAung24/RestaurantOrderService-POS-system-">
                <i class="fab fa-github"></i> Restaurant Order Service System
              </a>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.header {
  /* background-color: #f1f1f1; */
  padding: 50px;
  text-align: center;
  font-size: 35px;
}
/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: left;
}
.waviy2 {
  position: relative;
  color: white;
}
.waviy2 span {
  position: relative;
  display: inline-block;
  font-size: 35px;
  color: black;
  text-transform: uppercase;
  animation: flip 3s infinite;
  animation-delay: calc(3s * var(--i));
  color: white;
}

.about {
  background-color: rgba(68, 110, 158, 0.888);
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

iframe {
  max-width: 100%;
}
</style>
