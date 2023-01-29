<template>
  <div class="about">
    <NavBar />
    <v-container fluid>
      <div class="main-title">
        <div class="header">
          <div class="waviy">
            <span style="--i: 1">Estimating Cost of Single-Storey</span>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <template v-slot:prev="{ on, attrs }">
              <v-btn color="success" v-bind="attrs" v-on="on"
                >Previous slide</v-btn
              >
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
            </template>
            <!-- <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="item.src">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item> -->
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <strong>
            * This site is developed for Bachelor Degree final year's project by
            six students.* </strong
          ><br /><br />
          <strong><h2>Objectives</h2></strong><br />
          -To make easier cost estimating on building construction for single
          storey
          <br />
          -To safe time ,money and human efforts<br /><br />

          <strong><h2>Advantages</h2></strong><br />
          -The system estimates the cost of building for single storey. <br />
          -Everything within the estimator’s brief is included the cost planning
          process. <br />
          -Estimators can manage the standard value of raw materials in the
          current year. <br />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="footer">
            <p><strong>Git Hub</strong></p>
            <a
              href="https://github.com/ThinzarAung24/EstimatingCostofSingleStorey"
              >https://github.com/ThinzarAung24/EstimatingCostofSingleStorey</a
            >
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

  data() {
    return {
      items: [
        {
          src: "Photo/Picture1.png",
        },
        {
          src: "Photo/Picture2.png",
        },
        {
          src: "Photo/Picture3.png",
        },
        {
          src: "Photo/Picture4.png",
        },
        {
          src: "Photo/Picture5.png",
        },
        {
          src: "Photo/Picture6.png",
        },
        {
          src: "Photo/Picture7.png",
        },
        {
          src: "Photo/Picture8.png",
        },
        {
          src: "Photo/Picture9.png",
        },
        {
          src: "Photo/Picture10.png",
        },
        {
          src: "Photo/Picture11.png",
        },
        {
          src: "Photo/Picture12.png",
        },
        {
          src: "Photo/Picture13.png",
        },
        {
          src: "Photo/Picture14.png",
        },
        {
          src: "Photo/Picture15.png",
        },
        {
          src: "Photo/Picture16.png",
        },
        {
          src: "Photo/Picture17.png",
        },
        {
          src: "Photo/Picture18.png",
        },
        {
          src: "Photo/Picture19.png",
        },
        {
          src: "Photo/Picture20.png",
        },
        {
          src: "Photo/Picture21.png",
        },
        {
          src: "Photo/Picture22.png",
        },
        {
          src: "Photo/Picture23.png",
        },
        {
          src: "Photo/Picture24.png",
        },
        {
          src: "Photo/Picture25.png",
        },
        {
          src: "Photo/Picture26.png",
        },
        {
          src: "Photo/Picture27.png",
        },
        {
          src: "Photo/Picture28.png",
        },
        {
          src: "Photo/Picture29.png",
        },
      ],
    };
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
  max-width: 100%;
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