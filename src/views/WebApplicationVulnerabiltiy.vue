<template>
  <div class="about">
    <NavBar />
    <v-container fluid>
      <div class="main-title">
        <div class="header">
          <!-- <h2>RESTAURNANT ORDER SYSTEM</h2> -->
          <div class="waviy">
            <span style="--i: 1"
              >Effective Web Application Vulnerability Testing System using XSS_SQL_Scanning_Algorithm</span>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <iframe
            width="699"
            height="393"
            src="https://www.youtube.com/embed/cNGc56SZsNE"
            title="Web Application Vulnerability Testing System Using XSS_SQL_Scanning_Algorithm"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col cols="12" md="6">
          <strong>
            * This site is used to test XSS Vulnerability for Educatioanal
            Purpose. This is my Master Degree's Thesis Project developed by me.* </strong
          ><br /><br />
          <strong><h2>Objectives</h2></strong><br />
          -To discover the possibility of web application vulnerabilities.<br />
          -To assist web developers in detecting their web applications that
          have -weaknesses or not.<br />
          -To support the security of web application.<br />
          -To provide the basic information on how to detect SQL injection and
          XSS attack for some people who begin to study the web application
          security.
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="footer">
            <p><strong>Git Hub</strong></p>
            <p>
              <a
                href="https://github.com/ThinzarAung24/WebApplicationVulnerabilityTestingSystem-XSS-SQL-"
              >
                <i class="fab fa-github"></i> Web's Vulnerability Testing System
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
.waviy {
  position: relative;
  color: white;
}
.waviy span {
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
