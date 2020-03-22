<template>
  <v-layout>
    <v-flex>
      <main>
        <!-- Hero Section -->
        <section
          id="hero"
          :class="{'mb-6': $breakpoint.mdAndUp, 'my-12 py-12': $breakpoint.smAndDown}"
        >
          <section
            :class="{'content-clip d-flex flex-column justify-center pl-8 pr-12': $breakpoint.mdAndUp, 'content-clip d-flex flex-column text-center px-8': $breakpoint.smAndDown}"
          >
            <p
              :class="{'headline font-weight-regular': $breakpoint.mdAndUp, 'title': $breakpoint.smAndDown}"
            >January, 31st, 2020 - 9:00 AM</p>
            <h1
              :class="{'display-3 font-weight-bold mb-6': $breakpoint.mdAndUp, 'display-1 font-weight-bold mb-6': $breakpoint.smAndDown}"
            >The Intersection of Art &amp; Tech</h1>
            <v-btn
              :class="{'flex-0 elevaton-10 text-uppercase': $breakpoint.mdAndUp, 'flex-0 elevaton-10 text-uppercase align-self-center': $breakpoint.smAndDown}"
              color="orange accent-4"
              dark
              name="about"
              nuxt
              rounded
              to="/about"
              width="12.5rem"
              x-large
            >Learn More</v-btn>
          </section>
        </section>

        <!-- Information Section -->
        <section id="information">
          <section
            class="elevation-10 d-flex flex-column flex-md-row justify-space-evenly ml-6 mb-6"
          >
            <p
              :class="{'display-2 font-weight-regular ml-12 align-self-center': $breakpoint.mdAndUp, 'display-1 font-weight-regular mt-6 pt-12 align-self-center': $breakpoint.smAndDown}"
            >
              We will be
              <br />seeing you soon!
            </p>
            <section class="d-flex flex-wrap pa-12" v-intersect="onIntersect">
              <section class="d-flex flex-column pa-6">
                <p
                  class="display-1 font-weight-bold orange--text accent-4 animated-counter"
                  data-target="2793"
                >0</p>
                <p class="text-uppercase">Attendees</p>
              </section>
              <section class="d-flex flex-column pa-6">
                <p class="display-1 font-weight-bold" data-target="33">33</p>
                <p class="text-uppercase">Tech Talks</p>
              </section>
              <section class="d-flex flex-column pa-6">
                <p class="display-1 font-weight-bold" data-target="3">3</p>
                <p class="text-uppercase">Days</p>
              </section>
            </section>
          </section>
        </section>

        <!-- Benefits Section -->
        <v-container id="event-details" class="d-flex flex-column align-center">
          <section
            class="d-flex flex-column align-center flex-md-row justify-md-center event-images"
          >
            <v-img
              v-for="(event, i) in highlightedEvents"
              :key="`${event.name}${i}`"
              class="my-3"
              :src="event.image"
              :alt="event.name"
              lazy-src="https://picsum.photos/10/6"
              :aspect-ratio="16/9"
              min-width="200px"
              :width="$breakpoint.smAndDown ? '90vw' : '370px'"
              :max-width="$breakpoint.smAndDown ? '90vw' : '100%'"
              min-height="112.5px"
              height="100%"
              max-height="30vh"
            />
          </section>
          <v-container>
            <v-row>
              <v-col class="col-12 col-md-6">
                <h2 class="display-2 font-weight-bold mb-3">Event Details</h2>
              </v-col>
              <v-col class="col-12 col-md-6">
                <h3 class="display-1 font-weight-bold mb-3">The Wave of the Future</h3>
                <p
                  class="mb-6"
                >Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis.</p>
                <v-btn
                  color="orange accent-4"
                  dark
                  name="about"
                  nuxt
                  rounded
                  to="/about"
                  x-large
                >Learn More</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <!-- Rsvp Section -->
        <v-container id="rsvp">
          <v-row class="px-3">
            <v-col class="col-12 col-md-6 mb-12">
              <p>Hurry, this event is almost sold out!</p>
              <h3
                class="display-1 font-weight-bold mb-6"
              >Meet &amp; Greet the Local Leaders of the Tech Industry</h3>
              <v-btn color="blue accent-4" dark name="rsvp" nuxt rounded to="/rsvp" x-large>RSVP Now</v-btn>
            </v-col>
            <v-col class="col-12 col-md-6 mb-12">
              <v-img
                src="/img/event-details-3.jpg"
                lazy-src="https://picsum.photos/10/6"
                alt="rsvp"
              />
            </v-col>
          </v-row>
          <v-container class="d-flex flex-column flex-md-row">
            <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
              <v-card
                :class="{'d-flex flex-column pa-6 mx-6': $breakpoint.mdAndUp, 'd-flex flex-column pa-6 mx-0 mb-12': $breakpoint.smAndDown, 'white--text blue accent-4 elevation-24': hover}"
              >
                <v-icon
                  :class="{'align-self-start': !hover, 'align-self-start white--text': hover}"
                  size="4rem"
                >mdi-earth</v-icon>
                <h4 class="display-1 font-weight-bold mt-6 mb-3">Card title</h4>
                <v-sheet
                  width="4rem"
                  height="0.5rem"
                  :color="hover ? 'white' : 'orange accent-4'"
                  tile
                ></v-sheet>
                <p
                  class="my-6"
                >Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
              </v-card>
            </v-hover>
            <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
              <v-card
                :class="{'d-flex flex-column pa-6 mx-6': $breakpoint.mdAndUp, 'd-flex flex-column pa-6 mx-0 mb-12': $breakpoint.smAndDown, 'white--text blue accent-4 elevation-24': hover}"
              >
                <v-icon
                  :class="{'align-self-start': !hover, 'align-self-start white--text': hover}"
                  size="4rem"
                >mdi-bulletin-board</v-icon>
                <h4 class="display-1 font-weight-bold mt-6 mb-3">Card title</h4>
                <v-sheet
                  width="4rem"
                  height="0.5rem"
                  :color="hover ? 'white' : 'orange accent-4'"
                  tile
                ></v-sheet>
                <p
                  class="my-6"
                >Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
              </v-card>
            </v-hover>
            <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
              <v-card
                :class="{'d-flex flex-column pa-6 mx-6': $breakpoint.mdAndUp, 'd-flex flex-column pa-6 mx-0 mb-12': $breakpoint.smAndDown, 'white--text blue accent-4 elevation-24': hover}"
              >
                <v-icon
                  :class="{'align-self-start': !hover, 'align-self-start white--text': hover}"
                  size="4rem"
                >mdi-chart-areaspline</v-icon>
                <h4 class="display-1 font-weight-bold mt-6 mb-3">Card title</h4>
                <v-sheet
                  width="4rem"
                  height="0.5rem"
                  :color="hover ? 'white' : 'orange accent-4'"
                  tile
                ></v-sheet>
                <p
                  class="my-6"
                >Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
              </v-card>
            </v-hover>
          </v-container>
        </v-container>

        <!-- Day Schedule Section -->
        <v-container id="day-schedule">
          <section class="content-container">
            <h2 class="display-2 font-weight-bold mb-3">Day Schedule</h2>
            <section>
              <h3 class="display-1 font-weight-bold">A List of Events</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor.</p>
            </section>
          </section>

          <section class="tabs-container">
            <v-tabs v-model="tab" left vertical hide-slider>
              <v-tab v-for="(day, i) in days" :key="`${day.datetime}${i}`">
                <h4>{{ day.title }}</h4>
                <p>{{ day.datetime }}</p>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="(day, i) in days" :key="`${day.title}${i}`">
                <v-card
                  v-for="(event, i) in events.filter(event => event.dayId === day.id)"
                  :key="`${event.name}${i}`"
                  class="d-flex mb-12"
                >
                  <v-container>
                    <v-row class="pa-3">
                      <v-col class="col-12 col-md-2">
                        <h4
                          :class="{'headline font-weight-bold orange--text accent-4  align-self-center': $breakpoint.mdAndUp, 'headline font-weight-bold orange--text accent-4 align-self-center': $breakpoint.smAndDown}"
                        >{{ event.time }}</h4>
                      </v-col>
                      <v-col class="col-12 col-md-8">
                        <h3 class="headline font-weight-bold">{{ event.title }}</h3>
                        <p class="title mb-0">{{ event.speaker }}</p>
                        <p class="subtitle-1">{{ event.speakerTitle }}</p>
                      </v-col>
                      <v-col
                        :class="{'col-12 col-md-2 ml-auto': $breakpoint.mdAndUp, 'col-12 col-md-3': $breakpoint.smAndDown}"
                      >
                        <v-avatar :size="$breakpoint.mdAndUp ? '128px' : '64px'">
                          <v-img
                            :src="event.image"
                            :alt="event.title"
                            lazy-src="https://picsum.photos/10/6"
                          />
                        </v-avatar>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </section>
        </v-container>

        <!-- Prices Section -->
        <v-container id="prices">
          <section class="content-container">
            <h2 class="display-2 font-weight-bold mb-3">Prices</h2>
            <section>
              <h3 class="display-1 font-weight-bold">Ticket Packages</h3>
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
        <v-container id="speakers">
          <section class="content-container">
            <h2 class="display-2 font-weight-bold mb-3">Speakers</h2>
            <section>
              <h3 class="display-1 font-weight-bold">Who's Speaking</h3>
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
        </v-container>

        <!-- Sponsors Section -->
        <v-container id="sponsors">
          <section class="content-container">
            <h2 class="display-2 font-weight-bold mb-3">Sponors</h2>
            <section>
              <h3 class="display-1 font-weight-bold">An amazing bunch that deserves your attention</h3>
            </section>
          </section>
          <section class="regular-sponsors">
            <h4>Sponsors</h4>
            <section>
              <v-btn
                v-for="(sponsor, i) in regularSponsors"
                :key="`${sponsor.name}${i}`"
                :href="sponsor.to"
                text
                x-large
              >
                <v-icon :size="$breakpoint.mdAndUp ? '128px' : '64px'">{{ sponsor.icon }}</v-icon>
              </v-btn>
            </section>
          </section>
          <section class="top-sponsors">
            <h4>Top Sponsors</h4>
            <section>
              <v-btn
                v-for="(sponsor, i) in topSponsors"
                :key="`${sponsor.name}${i}`"
                :href="sponsor.to"
                text
                x-large
              >
                <v-icon :size="$breakpoint.mdAndUp ? '128px' : '64px'">{{ sponsor.icon }}</v-icon>
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
        </v-container>

        <!-- Location Section -->
        <v-container id="blog">
          <section class="location">
            <v-img src="/img/hero.jpg" lazy-src="https://picsum.photos/10/6" alt="venue" />
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
            <h2 class="display-2 font-weight-bold mb-3">Blog</h2>
            <section>
              <h3 class="display-1 font-weight-bold">Stay tuned for updates</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus.</p>
            </section>
          </section>
          <section class="blog-posts">
            <v-card v-for="(post, i) in posts" :key="`${post.title}${i}`" flat>
              <v-img
                class="white--text align-end"
                :src="post.thumbnail"
                :alt="post.title"
                lazy-src="https://picsum.photos/10/6"
                :width="threeCardImageWidth"
                :max-width="threeCardImageMaxWidth"
                min-height="112.5px"
                height="200px"
                max-height="200px"
              />
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text>{{ post.body.substring(0, 120) + "..." }}</v-card-text>
              <v-btn
                :name="post.title"
                nuxt
                :to="`blog/${post.slug}`"
                color="orange accent-4"
                text
              >Read More</v-btn>
            </v-card>
          </section>
        </v-container>
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
    isIntersecting: false,
    tab: null
  }),
  computed: {
    days() {
      return this.$store.state.days
    },
    events() {
      return this.$store.state.events
    },
    highlightedEvents() {
      return this.$store.state.events.slice().filter(event => event.hightlight)
    },
    packages() {
      return this.$store.state.packages
    },
    posts() {
      return this.$store.state.blogPosts
    },
    speakers() {
      return this.$store.state.speakers
    },
    regularSponsors() {
      return this.$store.state.sponsors.slice().filter(sponsor => !sponsor.top)
    },
    topSponsors() {
      return this.$store.state.sponsors.slice().filter(sponsor => sponsor.top)
    }
  },
  methods: {
    animatedCounter(elementClass, speed) {
      const counters = document.querySelectorAll(elementClass)
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target')
          const count = +counter.innerText
          // Lower increment to slow and higher to slow
          const increment = target / speed
          if (count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(updateCount, 1)
          } else {
            counter.innerText = target
          }
        }
        updateCount()
      })
    },
    // v-intersect vuetify (intersection observer)
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    }
  },
  watch: {
    // watch for element tagged with v-intersect to scroll into view
    isIntersecting: function(value) {
      if (value) {
        setTimeout(this.animatedCounter('.animated-counter', 200), 500)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
