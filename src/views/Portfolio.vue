<template>
  <div>
    <NavBar />
    <div class="main-title">
      <h2 class="text-center">MY <span>PORTFOLIO</span></h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <!-- Restaurant Order Service System -->
          <v-card class="mx-auto" max-width="344">
            <!-- <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img> -->
            <div class="porfolios">
              <div class="porfolio-item">
                <div class="image-port">
                  <v-img src="restaurantOrder.png" height="200px"></v-img>
                  <div class="hover-item">
                    <h3>Project Source</h3>
                    <div class="icons">
                      <div class="icon">
                        <a
                          href="https://github.com/ThinzarAung24/RestaurantOrderService-POS-system-"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <v-card-title> Restaurant Order Service System </v-card-title>

            <v-card-subtitle> Vue JS, CSS, SPRING BOOT (JAVA) </v-card-subtitle>
            <v-card-subtitle> <i class="fa-solid fa-calendar-days"></i> 22/1/2023</v-card-subtitle>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="orange lighten-2" to="/restaurantProject" dark>
                Read more....
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show1 = !show1">
                <v-icon>{{
                  show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  This project is created by three Developers who are Win Mon
                  Thi Lwin, Thinzar Aung and Kaung Linn Shann.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- ------------------------------------------------------------------------ -->
        <v-col cols="12" md="4">
          <!-- Web Application Vulnerability Testing System Using XSS-SQL-Scanning-Algorithm -->
          <v-card class="mx-auto" max-width="344">
            <!-- <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img> -->
            <div class="porfolios">
              <div class="porfolio-item">
                <div class="image-port">
                  <v-img src="VulnerabilityTesting.png" height="200px"></v-img>
                  <div class="hover-item">
                    <h3>Project Source</h3>
                    <div class="icons">
                      <div class="icon">
                        <a
                          href="https://github.com/ThinzarAung24/WebApplicationVulnerabilityTestingSystem-XSS-SQL-"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="colorCard">
              <v-card-title> Web Vulnerability Testing System </v-card-title>

              <v-card-subtitle> PYTHON </v-card-subtitle>
               <v-card-subtitle> <i class="fa-solid fa-calendar-days"></i> 28/1/2021</v-card-subtitle>
            </div>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                to="/webApplicationVulnerabiltiyTesting"
                dark
              >
                Read more....
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show2 = !show2">
                <v-icon>{{
                  show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  This is my Master Degree's Thesis Project developed by me.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- ---------------------------------------------------------------- -->
        <v-col cols="12" md="4">
          <!-- One-Storey Building -->
          <v-card class="mx-auto" max-width="344">
            <!-- <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img> -->
            <div class="porfolios">
              <div class="porfolio-item">
                <div class="image-port">
                  <v-img src="house.jpg" height="200px"></v-img>
                  <div class="hover-item">
                    <h3>Project Source</h3>
                    <div class="icons">
                      <div class="icon">
                        <a
                          href="https://github.com/ThinzarAung24/EstimatingCostofSingleStorey"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="colorCard">
              <v-card-title> Estimating Cost of Single-Storey </v-card-title>

              <v-card-subtitle> C# </v-card-subtitle>
              <v-card-subtitle> <i class="fa-solid fa-calendar-days"></i> 2018</v-card-subtitle>
            </div>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="orange lighten-2" to="/singleStorey" dark>
                Read more....
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show3 = !show3">
                <v-icon>{{
                  show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>

                <v-card-text>
                  This is my Bachelor Degree's Final year Project. It is created
                  by Ma Yamin, Ma Thinzar Aung, Ma Pyae Phyo Oo, Ma Thae Su
                  Khin, Mg Shine Ko Ko Aung, and Ma Wai Linn Tun.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <!-- Second Roll -->
      <v-row>
        <v-col cols="12" md="4">
          <!-- KoYinLayVillage -->
          <v-card class="mx-auto" max-width="344">
            <v-img src="KoYinLayVillage.jpg" height="200px"></v-img>
            <!-- <div class="porfolios">
              <div class="porfolio-item">
                <div class="image-port">
                  <v-img src="KoYinLayVillage.jpg" height="200px"></v-img>
                  <div class="hover-item">
                    <h3>Project Source</h3>
                    <div class="icons">
                      <div class="icon">
                        <a
                          href="https://github.com/ThinzarAung24/WebApplicationVulnerabilityTestingSystem-XSS-SQL-"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <v-divider></v-divider>
            <div class="colorCard">
              <v-card-title> Ko Yin Lay Village </v-card-title>

              <v-card-subtitle> JAVE (ANDROID STUDIO) </v-card-subtitle>
              <v-card-subtitle> <i class="fa-solid fa-calendar-days"></i> 2018</v-card-subtitle>
            </div>
            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="orange lighten-2" to="/koyinlayvillage" dark>
                Read more....
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show4 = !show4">
                <v-icon>{{
                  show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show4">
                <v-divider></v-divider>

                <v-card-text>
                  This is my first creation of android app since 2018.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
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
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  }),
};
</script>

<style>
.main-title h2 {
  font-size: 2rem;
}

.main-title h2 span {
  font-size: 2.5rem;
}

h2 {
  font-family: "Almendra", serif;
  font-size: 1.3rem;
}
.porfolio-item {
  position: relative;
  border-radius: 15px;
}

.image-port img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}

.image-port .hover-item {
  width: 100%;
  height: 200px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s ease-in-out;
}

.image-port .hover-item h3 {
  font-size: 1.5rem;
  color: black;
  margin-bottom: 1.5rem;
}

.porfolio-item:hover .hover-item {
  opacity: 1;
  transform: scale(1);
}

.porfolios .icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.porfolios .icon {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-radius: 50%;
}

.porfolios i {
  font-size: 1.5rem;
  color: black;
  margin: 0 2rem;
}

/* .colorCard{
  background-color: #89899e;
  color:white;
} */
</style>
