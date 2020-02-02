<template>
  <v-layout>
    <v-flex>
      <main id="rsvp-page">
        <!-- Main Section -->
        <section>
          <section class="content-container">
            <h1>RSVP</h1>
          </section>
        </section>

        <!-- Prices Section -->
        <v-container id="prices">
          <section class="content-container">
            <h2>Prices</h2>
            <section class="sub-container">
              <h3>Ticket Packages</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
            </section>
          </section>
          <section class="packages">
            <!-- package is a reserved keyword -->
            <v-card v-for="(pkg, i) in packages" :key="`${pkg}${i}`">
              <v-img
                class="white--text align-end"
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
                <v-card-title>{{ pkg.price }}</v-card-title>
              </v-img>
              <v-btn class="ticket-type" :name="pkg.name" text>Early Bird</v-btn>
              <ul class="d-flex flex-column align-center">
                <li v-for="(feature, i) in pkg.features" :key="`${feature}${i}`">{{ feature }}</li>
              </ul>
              <v-card-actions>
                <v-btn
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
          </section>
        </v-container>

        <!-- Speakers Section -->
        <section id="speakers">
          <section class="content-container">
            <h2>Speakers</h2>
            <section class="sub-container">
              <h3>Who's Speaking</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
            </section>
          </section>
          <section class="speakers-list">
            <v-card v-for="(speaker, i) in speakers" :key="`${speaker.name}${i}`" flat>
              <v-img
                class="white--text align-end"
                gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                :src="speaker.image"
                :alt="speaker.name"
                lazy-src="https://picsum.photos/10/6"
              />
              <v-card-title>{{ speaker.name }}</v-card-title>
              <v-card-subtitle>{{ speaker.title }}</v-card-subtitle>
            </v-card>
          </section>
        </section>
      </main>
    </v-flex>
  </v-layout>
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
