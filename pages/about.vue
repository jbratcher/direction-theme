<template>
  <v-layout>
    <v-flex>
      <main id="about-page">
        <!-- Main Section -->
        <section>
          <section class="content-container">
            <h1>About</h1>
          </section>
        </section>

        <!-- Benefits Section -->
        <section id="event-details" class="py-12">
          <section class="event-images">
            <v-img
              src="/img/event-details-1.jpg"
              alt
              :aspect-ratio="16/9"
              min-width="200px"
              :width="responsiveWidth"
              :max-width="responsiveMaxWidth"
              min-height="112.5px"
              height="100%"
              max-height="30vh"
            />
            <v-img
              src="/img/event-details-2.jpg"
              alt
              :aspect-ratio="16/9"
              min-width="200px"
              :width="responsiveWidth"
              :max-width="responsiveMaxWidth"
              min-height="112.5px"
              height="100%"
              max-height="30vh"
            />
            <v-img
              src="/img/event-details-3.jpg"
              alt
              :aspect-ratio="16/9"
              min-width="200px"
              :width="responsiveWidth"
              :max-width="responsiveMaxWidth"
              min-height="112.5px"
              height="100%"
              max-height="30vh"
            />
          </section>
          <v-container class="event-text">
            <h2>Event Details</h2>
            <section class="cta-text">
              <h3>The Wave of the Future</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis.</p>
              <v-btn
                color="orange accent-4"
                dark
                name="services"
                nuxt
                rounded
                to="/services"
                x-large
              >Learn More</v-btn>
            </section>
          </v-container>
        </section>

        <!-- Day Schedule Section -->
        <section id="day-schedule">
          <section class="content-container">
            <h2>Day Schedule</h2>
            <section class="sub-container">
              <h3>A List of Events</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
            </section>
          </section>

          <section class="tabs-container">
            <v-tabs v-model="tab" left vertical hide-slider>
              <v-tab v-for="(day, i) in days" :key="i">
                <h4>{{ day.title }}</h4>
                <p>{{ day.datetime }}</p>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(day, i) in days" :key="i">
                <v-card
                  v-for="(event, i) in events.filter(event => event.dayId === day.id)"
                  :key="i"
                >
                  <h4 class="time">{{ event.time }}</h4>
                  <section>
                    <h3 class="event-title">{{ event.title }}</h3>
                    <p class="speaker">{{ event.speaker }}</p>
                    <p class="speaker-title">{{ event.speakerTitle }}</p>
                  </section>
                  <v-avatar :size="eventAvatarSize">
                    <v-img
                      :src="event.image"
                      :alt="event.title"
                      lazy-src="https://picsum.photos/10/6"
                    />
                  </v-avatar>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </section>
        </section>

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

        <!-- Sponsors Section -->
        <section id="sponsors">
          <section class="content-container">
            <h2>Sponors</h2>
            <section class="sub-container">
              <h3>An amazing bunch that deserves your attention</h3>
            </section>
          </section>
          <section class="regular-sponsors">
            <h4>Sponsors</h4>
            <section>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-gitlab</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-apple</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-lightbulb</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-github-circle</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-facebook</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-twitter</v-icon>
              </v-btn>
            </section>
          </section>
          <section class="top-sponsors">
            <h4>Top Sponsors</h4>
            <section>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-github-face</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text>
                <v-icon :size="eventAvatarSize">mdi-longitude</v-icon>
              </v-btn>
            </section>
          </section>
          <section class="sponsor-apply">
            <h4>Want to become a sponsor?</h4>
            <v-btn
              color="orange accent-4"
              dark
              name="sponsor-apply"
              nuxt
              rounded
              to="/sponsor-apply"
              x-large
            >Sponsor</v-btn>
          </section>
        </section>

        <!-- Location Section -->
        <section id="blog">
          <section class="location">
            <v-img src="/img/hero.jpg" alt="venue" />
            <v-card elevation="24">
              <v-card-title>Venue Location</v-card-title>
              <v-card-subtitle>January 28-31st</v-card-subtitle>
              <v-card-text>100 Main Street</v-card-text>
              <v-card-text>Louisville, KY 40206</v-card-text>
              <v-card-text>
                <v-icon>mdi-map-marker</v-icon>Directions
              </v-card-text>
            </v-card>
          </section>
        </section>
      </main>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
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
    speakers() {
      return this.$store.state.speakers
    },
    responsiveWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '200px'
          break
        case 'md':
          value = '20vw'
          break
        case 'lg':
          value = '20vw'
          break
        case 'xl':
          value = '20vw'
          break
      }
      return value
    },
    responsiveMaxWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '90vw'
          break
        case 'sm':
          value = '100%'
          break
        case 'md':
          value = '100%'
          break
        case 'lg':
          value = '100%'
          break
        case 'xl':
          value = '100%'
          break
      }
      return value
    },
    eventAvatarSize() {
      let value = '128px'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '64px'
          break
        case 'sm':
          value = '64px'
          break
        case 'md':
          value = '128px'
          break
        case 'lg':
          value = '128px'
          break
        case 'xl':
          value = '128px'
          break
      }
      return value
    }
  }
}
</script>

<style lang="scss">
</style>
