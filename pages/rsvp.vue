<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col>
        <main id="rsvp-page">
          <!-- Main Section -->
          <v-container class="d-flex flex-column align-center py-12" fluid>
            <v-container class="content-container d-flex flex-column justify-center">
              <h1
                :class="{'display-3 font-weight-bold white--text text-center pb-3': $breakpoint.mdAndUp, 'display-1 font-weight-bold white--text text-center pb-3': $breakpoint.smAndDown}"
              >RSVP</h1>
            </v-container>
          </v-container>

          <!-- Prices Section -->
          <v-container id="prices">
            <v-container>
              <h2
                :class="{'display-2 font-weight-bold mb-6': $breakpoint.mdAndUp, 'display-1 font-weight-bold mb-3': $breakpoint.smAndDown}"
              >Prices</h2>
              <v-container class="bl-3-orange-accent-4 pt-0 pl-9 pb-3">
                <h3
                  :class="{'display-1 font-weight-bold': $breakpoint.mdAndUp, 'headline font-weight-bold': $breakpoint.smAndDown}"
                >Ticket Packages</h3>
                <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
              </v-container>
            </v-container>
            <v-container class="packages">
              <v-row>
                <v-col v-for="(pkg, i) in packages" :key="`${pkg}${i}`" class="col-12 col-md-4">
                  <!-- package is a reserved keyword -->
                  <v-card class="d-flex flex-column align-center" height="100%">
                    <v-img
                      class="align-end white--text"
                      gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                      :src="pkg.image"
                      :alt="pkg.name"
                      lazy-src="https://picsum.photos/10/6"
                      min-width="200px"
                      :width="threeCardImageWidth"
                      :max-width="threeCardImageMaxWidth"
                      min-height="112.5px"
                      height="200px"
                      max-height="200px"
                    >
                      <v-icon class="white--text" size="64px">{{ pkg.icon }}</v-icon>
                      <v-card-title class="display-1 font-weight-bold">{{ pkg.price }}</v-card-title>
                    </v-img>
                    <v-btn :name="pkg.name" rounded text>Early Bird</v-btn>
                    <ul class="d-flex flex-column align-center mb-12 pl-0">
                      <li
                        v-for="(feature, i) in pkg.features"
                        :key="`${feature}${i}`"
                        class="py-2"
                      >{{ feature }}</li>
                    </ul>
                    <v-card-actions class="mt-auto">
                      <v-btn
                        class="px-6"
                        color="orange accent-4"
                        dark
                        :name="pkg.name"
                        nuxt
                        rounded
                        to="/tickets"
                        x-large
                      >Get Tickets</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>

          <!-- Speakers Section -->
          <v-container id="speakers" class="py-12 px-9">
            <v-container>
              <h2
                :class="{'display-2 font-weight-bold mb-6': $breakpoint.mdAndUp, 'display-1 font-weight-bold mb-3': $breakpoint.smAndDown}"
              >Speakers</h2>
              <v-container class="bl-3-orange-accent-4 pt-0 pl-9 pb-3">
                <h3
                  :class="{'display-1 font-weight-bold': $breakpoint.mdAndUp, 'headline font-weight-bold': $breakpoint.smAndDown}"
                >Who's Speaking</h3>
                <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
              </v-container>
            </v-container>
            <v-container class="speakers-list py-12">
              <v-row>
                <v-col
                  v-for="(speaker, i) in speakers"
                  :key="`${speaker.name}${i}`"
                  class="col-12 col-md-4"
                >
                  <v-card class="my-6" color="transparent" flat>
                    <v-img
                      class="align-end mx-auto white--text"
                      gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                      :src="speaker.image"
                      :alt="speaker.name"
                      lazy-src="https://picsum.photos/10/6"
                      min-width="200px"
                      :width="threeCardImageWidth"
                      :max-width="threeCardImageMaxWidth"
                      min-height="112.5px"
                      height="200px"
                      max-height="200px"
                    />
                    <v-card-title class="ml-3 pt-1">{{ speaker.name }}</v-card-title>
                    <v-card-subtitle class="ml-3">{{ speaker.title }}</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { imageSizesMixin } from '../mixins/imageSizes.js'

export default {
  mixins: [imageSizesMixin],
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  data: () => ({
    tab: null
  }),
  computed: {
    days() {
      return this.$store.state.days
    },
    events() {
      return this.$store.state.events
    },
    packages() {
      return this.$store.state.packages
    },
    speakers() {
      return this.$store.state.speakers
    }
  }
}
</script>

<style lang="scss">
</style>
