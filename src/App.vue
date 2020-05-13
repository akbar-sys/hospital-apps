<template>
  <div id="app">
  <!-- Buefy Nav -->
    <template>
        <b-navbar class="is-spaced has-shadow is-fixed-top">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <h1 class="title is-4 has-text-primary is-italic">Le Hospitale</h1>
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    Documentation
                </b-navbar-item>
                <b-navbar-dropdown class="is-hoverable" label="Company">
                    <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                        About
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/testimonial' }">
                        Testimonial
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                        Contact Us
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-dropdown class="is-hoverable" label="Help">
                    <b-navbar-item tag="router-link" :to="{ path: '/disclaimer' }">
                        Disclaimer
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/privacypolicy' }">
                        Privacy Policy
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/termnconditions' }">
                        Term & Conditions
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <b-button type="is-primary" outlined>Sign Up</b-button>
                        <b-button type="is-primary">Login</b-button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </template>
  <!-- Load Component based on router -->
    <router-view/>
  <!-- Footer -->
    <template>
      <div class="section">
          <div class="container is-fluid">
              <div class="columns">
                  <div class="column">
                      <p class="title is-4">Company</p>
                      <ul>
                          <li><router-link to="/about">About Us</router-link></li>
                          <li><router-link to="/testimoni">Testimonial</router-link></li>
                          <li><router-link to="/contact">Contatc Us</router-link></li>
                      </ul>
                  </div>
                  <div class="column">
                      <p class="title is-4">Media Center</p>
                      <ul>
                          <li><a tag="router-link" :to="{ path: '/' }">Article</a></li>
                          <li><a tag="router-link" :to="{ path: '/' }">Publication</a></li>
                          <li><a tag="router-link" :to="{ path: '/' }">Gallery</a></li>
                      </ul>
                  </div>
                  <div class="column">
                      <p class="title is-4">Help</p>
                      <ul>
                          <li><router-link to="/disclaimer">Disclaimer</router-link></li>
                          <li><router-link to="/privacypolicy">Privacy Policy</router-link></li>
                          <li><router-link to="/termnconditions">Term & Conditions</router-link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </template>
    
    <div class="container is-fluid has-text-right">
        <a href="#app">
            <strong>Back to Top </strong>
            <i class="mdi mdi-18px mdi-arrow-expand-up"></i>
        </a>
    </div>
        
  <!-- footer end -->
    <template>
      <div class="has-background-primary has-text-light is-clearfix">
          <div class="container is-fluid has-text-centered">
              <p class="section">
                  <strong class="has-text-light">©Copyright</strong> - Le Hospitale 2020 develop by  <a tag="router-link" :to="{ path: '/' }" class="has-text-white">Kelompok 6</a>. 
              </p>
          </div>
      </div>
    </template>

  </div>
</template>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  #app {
      padding-top: 50px;
  }
</style>

