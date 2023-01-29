<template>
  <div class="about">
    <NavBar />
    <v-container fluid>
      <div class="main-title">
        <div class="header">
          <div class="waviy">
            <span style="--i: 1">Ko Yin Lay Village</span>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <iframe
            width="642"
            height="361"
            src="https://www.youtube.com/embed/Hpbh-No9QUU"
            title="KoYinLayVillage (My first android app) Since 2018"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            controls
          ></iframe>
        </v-col>
        <v-col cols="12" md="6">
          <strong>
            *This app is my first created app when I was studying android. * </strong
          ><br /><br />
          <strong><h2>Objectives</h2></strong><br />
          -To easily know the history of Kyike Day Ta Maw Ba Yat Pagoda.<br />
          -To introduce Pope Pha Waddy (Ko Yin Lay) Village.<br /><br />
          <strong><h2>Further Extension</h2></strong><br />
          -I want to develop this app with many functions and pretty UI Design.
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="footer">
            <p><strong>Git Hub</strong></p>
            <p>No Source Code Available!</p>
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
  padding: 30px;
  text-align: center;
  font-size: 35px;
}
/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: left;
}
.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 25px;
  color: black;
  text-transform: uppercase;
  animation: flip 7s infinite;
  animation-delay: calc(7s * var(--i));
  color: white;
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