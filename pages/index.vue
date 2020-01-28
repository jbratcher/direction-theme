<template>
  <v-layout>
    <v-flex>
      <main>
        <!-- Hero Section -->
        <section id="hero">
          <section class="content-container">
            <p>January, 31st, 2020 - 9:00 AM</p>
            <h1>The Intersection of Art &amp; Tech</h1>
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
        </section>

        <!-- Information Section -->
        <section id="information">
          <section>
            <p class="tagline">
              We will be
              <br />
              <span>seeing you soon!</span>
            </p>
            <section class="information-content">
              <section>
                <p class="number">2,793</p>
                <p class="label">Attendees</p>
              </section>
              <section>
                <p class="number">33</p>
                <p class="label">Tech Talks</p>
              </section>
              <section>
                <p class="number">3</p>
                <p class="label">Days</p>
              </section>
            </section>
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

        <!-- Rsvp Section -->
        <section id="rsvp">
          <section class="content-container">
            <p>Hurry, this event is almost sold out!</p>
            <h3>Meet &amp; Greet the Local Leaders of the Tech Industry</h3>
            <v-btn color="blue accent-4" dark name="rsvp" nuxt rounded to="/rsvp" x-large>RSVP Now</v-btn>
          </section>
          <v-img src="/img/event-details-3.jpg" alt="rsvp" />
          <section class="highlights">
            <v-card>
              <v-icon size="4rem">mdi-earth</v-icon>
              <h4>Card title</h4>
              <div></div>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
            </v-card>
            <v-card>
              <v-icon size="4rem">mdi-bulletin-board</v-icon>
              <h4>Card title</h4>
              <div></div>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
            </v-card>
            <v-card>
              <v-icon size="4rem">mdi-chart-areaspline</v-icon>
              <h4>Card title</h4>
              <div></div>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
            </v-card>
          </section>
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

        <!-- Prices Section -->
        <section id="prices">
          <section class="content-container">
            <h2>Prices</h2>
            <section class="sub-container">
              <h3>Ticket Packages</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
            </section>
          </section>
          <section class="packages">
            <v-card>
              <v-img
                class="white--text align-end"
                gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                src="/img/event-details-1.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                min-width="200px"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              >
                <v-icon class="white--text" size="64px">mdi-account-outline</v-icon>
                <v-card-title>$100</v-card-title>
              </v-img>
              <v-btn class="ticket-type" name="package-1" text>Early Bird</v-btn>
              <ul class="d-flex flex-column align-center">
                <li>3 Day Pass</li>
                <li>Free Coffee</li>
                <li>Networking</li>
                <li>Certificate</li>
                <li>Swag Bag</li>
              </ul>
              <v-card-actions>
                <v-btn
                  color="orange accent-4"
                  dark
                  name="early-bird-ticket"
                  nuxt
                  rounded
                  to="/tickets"
                  x-large
                >Get Tickets</v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-img
                class="white--text align-end"
                gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                src="/img/event-details-2.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                min-width="200px"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              >
                <v-icon class="white--text" size="64px">mdi-account-group-outline</v-icon>
                <v-card-title>$300</v-card-title>
              </v-img>
              <v-btn class="ticket-type" name="package-2" text>Team Package</v-btn>
              <ul class="d-flex flex-column align-center">
                <li>3 Day Pass</li>
                <li>Free Coffee</li>
                <li>Networking</li>
                <li>Certificate</li>
                <li>Swag Bag</li>
                <li>Advertisment in Event Packet</li>
                <li>Lunch &amp; Dinner</li>
              </ul>
              <v-card-actions>
                <v-btn
                  color="orange accent-4"
                  dark
                  name="team-ticket"
                  nuxt
                  rounded
                  to="/tickets"
                  x-large
                >Get Tickets</v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-img
                class="white--text align-end"
                gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                src="/img/event-details-3.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                min-width="200px"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              >
                <v-icon class="white--text" size="64px">mdi-account-outline</v-icon>
                <v-card-title>$1000</v-card-title>
              </v-img>
              <v-btn class="ticket-type" name="package-1" text>VIP</v-btn>
              <ul class="d-flex flex-column align-center">
                <li>3 Day Pass</li>
                <li>Free Coffee</li>
                <li>Networking</li>
                <li>Certificate</li>
                <li>Swag Bag</li>
                <li>Advertisment in Event Packet</li>
                <li>Lunch &amp; Dinner</li>
                <li>Sponored Listing</li>
              </ul>
              <v-card-actions>
                <v-btn
                  color="orange accent-4"
                  dark
                  name="vip-ticket"
                  nuxt
                  rounded
                  to="/tickets"
                  x-large
                >Get Tickets</v-btn>
              </v-card-actions>
            </v-card>
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
                min-width="200px"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
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
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-gitlab</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-apple</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-lightbulb</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-github-circle</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-facebook</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-twitter</v-icon>
              </v-btn>
            </section>
          </section>
          <section class="top-sponsors">
            <h4>Top Sponsors</h4>
            <section>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
                <v-icon :size="eventAvatarSize">mdi-github-face</v-icon>
              </v-btn>
              <v-btn name="sponsor-name" href="https://coke.com" text x-large>
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
            <v-card>
              <v-card-title>Venue Location</v-card-title>
              <v-card-subtitle>January 28-31st</v-card-subtitle>
              <v-card-text>100 Main Street</v-card-text>
              <v-card-text>Louisville, KY 40206</v-card-text>
              <v-card-text>
                <v-icon>mdi-map-marker</v-icon>Directions
              </v-card-text>
            </v-card>
          </section>
          <section class="content-container">
            <h2>Blog</h2>
            <section class="sub-container">
              <h3>Stay tuned for updates</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
            </section>
          </section>
          <section class="blog-posts">
            <v-card flat>
              <v-img
                class="white--text align-end"
                src="/img/event-details-1.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              />
              <v-card-title>Post Title</v-card-title>
              <v-card-text>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis</v-card-text>
              <v-btn name="read-more" color="orange accent-4" text>Read More</v-btn>
            </v-card>
            <v-card flat>
              <v-img
                class="white--text align-end"
                src="/img/event-details-2.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              />
              <v-card-title>Post Title</v-card-title>
              <v-card-text>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis</v-card-text>
              <v-btn name="read-more" color="orange accent-4" text>Read More</v-btn>
            </v-card>
            <v-card flat>
              <v-img
                class="white--text align-end"
                src="/img/event-details-3.jpg"
                alt="package 1"
                lazy-src="https://picsum.photos/10/6"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              />
              <v-card-title>Post Title</v-card-title>
              <v-card-text>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis</v-card-text>
              <v-btn name="read-more" color="orange accent-4" text>Read More</v-btn>
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
    threeCardImageWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
    threeCardImageMaxWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
    responsiveWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '300px'
          break
        case 'md':
          value = '25vw'
          break
        case 'lg':
          value = '25vw'
          break
        case 'xl':
          value = '25vw'
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
