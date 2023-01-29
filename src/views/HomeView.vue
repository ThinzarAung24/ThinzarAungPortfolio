<template>
  <div class="home">
    <NavBar />
    <v-spacer></v-spacer>
    <v-container fluid>
      <h2>
        <strong
          ><div class="waviy3">
            <span style="--i: 1">M</span>
            <span style="--i: 2">y</span>
            <span style="--i: 3">_</span>
            <span style="--i: 4">P</span>
            <span style="--i: 5">O</span>
            <span style="--i: 6">R</span>
            <span style="--i: 7">T</span>
            <span style="--i: 8">F</span>
            <span style="--i: 9">O</span>
            <span style="--i: 10">L</span>
            <span style="--i: 11">I</span>
            <span style="--i: 12">O</span>
          </div></strong
        >
      </h2>
      <v-row>
        <v-col cols="12" md="6">
          <center>
            <v-card
              class="mx-auto"
              max-width="600"
              height="400"
              color="rgb(251, 249, 243, 0.8)"
              :img="require('../assets/bg.jpg')"
            >
              <div style="position: relative" class="mt-16">
                <div class="animate-charcter">
                  <br /><br /><br />

                  <h1>Hello!!!</h1>
                  <h5>I'm</h5>
                  <h3>THINZAR AUNG</h3>
                  <h4>Web Developer</h4>
                </div>
                <br />
              </div>
              <v-card-actions>
                
                <v-btn color="orange lighten-2" to="/contact" dark >
                  CONTACT ME
                </v-btn>
              </v-card-actions>
            
            </v-card>
          </center>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            class="portfolio"
            src="2.png"
            contain
            max-height="800px"
            max-width="800px"
          ></v-img>
        </v-col>
        <!-- <v-col cols="12" md="2"></v-col> -->
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
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 3s linear infinite;
}

h3 {
  font-size: 60px;
}

.home {
  background-color: rgba(68, 110, 158, 0.888);
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.waviy3 {
  position: relative;
}
.waviy3 span {
  position: relative;
  display: inline-block;
  font-size: 25px;
  color: black;
  text-transform: uppercase;
  animation: flip 3s infinite;
  animation-delay: calc(3s * var(--i));
  color: white;
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
</style>
