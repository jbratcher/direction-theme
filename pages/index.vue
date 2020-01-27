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

        <!-- Countdown -->
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
              />
              <v-card-title>{{ speaker.name }}</v-card-title>
              <v-card-subtitle>{{ speaker.title }}</v-card-subtitle>
            </v-card>
          </section>
        </section>

        <!-- Sponsors Section -->
        <section id="sponsors">
          <section class="content-container">
            <v-card>
              <h4>Card title</h4>
              <p>Card subtitle</p>
            </v-card>
          </section>
        </section>

        <!-- Blog Section -->
        <section id="blog">
          <section class="content-container">
            <v-card>
              <h4>Card title</h4>
              <p>Card subtitle</p>
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
          value = '95vw'
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
main {
  .container {
    min-height: 100vh;
  }
}

// hero section
#hero {
  padding: 2rem 0 4rem;

  section.content-container {
    background: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;

    p {
      color: #333;
      font-size: 1.33rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 4rem;
    }

    .v-btn {
      box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
      max-width: 180px;
      text-transform: capitalize;
    }
  }
}

// information section

#information {
  background: #fefefe;
  position: relative;

  & > section {
    background: #fff;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem 2rem;
    position: relative;
    top: -2rem;

    .tagline {
      font-size: 3rem;
      line-height: 1;
      margin: 4rem 0 0 4rem;

      span {
        font-weight: 300;
      }
    }

    .information-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 2rem;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;

        .number {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 2.75rem;
        }

        .label {
          text-transform: capitalize;
        }
      }
    }

    .information-content section:first-of-type {
      .number {
        color: #ff6d00; // orange accent-4
      }
    }
  }
}

// event details section
#event-details {
  display: flex;
  flex-direction: column;
  align-items: center;

  .event-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 95vw;

    .v-image {
      margin: 1rem auto;
      max-width: 95vw;
    }
  }

  .event-text.container {
    display: flex;
    flex-direction: column;
    min-height: 0;

    h2 {
      font-size: 3rem;
      font-weight: 900;
      grid-area: header;
      line-height: 1;
      padding: 1rem 0 2rem;
    }

    .cta-text {
      grid-area: text;
      h3,
      p,
      .v-btn {
        margin: 1rem 0;
      }
      h3 {
        font-size: 2.33rem;
        font-weight: 700;
        line-height: 1;
        margin-top: 0;
      }
    }
  }
}

// RSVP section

#rsvp {
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  section.content-container {
    padding-bottom: 1rem;
    h3,
    p,
    .v-btn {
      margin: 1rem;
    }
    h3 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
      margin-top: 0;
    }
    p {
      font-size: 1.25rem;
    }
  }

  .v-image {
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
    margin: 2rem;
    max-width: 95vw;
  }

  .highlights {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: cards;
    width: 90%;
    margin: 0 auto;
    .v-card {
      margin: 1rem;
      padding: 2rem;
      transition: 0.5s all ease;
      h4 {
        font-size: 1.67rem;
        font-weight: 900;
        padding-bottom: 1rem;
        transition: 0.5s all ease;
      }
      div {
        border: 0.25rem solid #ff6d00;
        width: 25%;
        height: auto;
        transition: 0.5s all ease;
      }
      p {
        font-size: 1.125rem;
        margin: 1rem 0;
        transition: 0.5s all ease;
      }
      &:hover {
        background: #2962ff;

        .v-icon {
          color: #fff;
          transition: 0.5s all ease;
        }

        h4,
        p {
          color: #fff;
        }

        div {
          border-color: #fff;
        }
      }
    }
  }
}

// prominent section heading

#day-schedule,
#prices,
#speakers {
  .content-container {
    padding: 0 2rem;
    h2,
    h3 {
      line-height: 1;
      padding: 1rem 0;
    }
    h2 {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1rem;
    }
    .sub-container {
      border-left: 0.25rem solid #ff6d00;
      margin-left: 0.5rem;
      padding-left: 2.5rem;
      h3 {
        font-size: 2.33rem;
        font-weight: 700;
        padding-top: 0;
      }
      p {
        font-size: 1.33rem;
        padding: 1rem 0;
      }
    }
  }
}

// day schedule section

#day-schedule {
  margin-top: 4rem;
  padding-top: 4rem;
  .tabs-container {
    .v-tabs-bar {
      padding-top: 2rem;
    }
    .v-tab {
      clip-path: polygon(12.5% 0%, 100% 0%, 87.5% 100%, 0% 100%);
      flex-direction: column;
      padding: 4rem;
      margin: 1rem auto;
      h4 {
        font-size: 2rem;
        font-weight: 700;
      }
    }
    .v-tab--active {
      background: #ff6d00;
      h4,
      p {
        color: #fff;
      }
    }
    .v-tabs-items {
      padding-bottom: 4rem;
    }
    .v-tabs-items .v-window-item {
      padding: 2rem 0;
      .v-card {
        margin: 0 2rem 2rem 2rem;
        padding: 2rem;

        .time {
          color: #ff6d00;
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .event-title {
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .speaker {
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
      }
    }
    .v-card > *:last-child:not(.v-btn):not(.v-chip) {
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }
}

#prices {
  padding: 4rem 0;
  .packages {
    padding: 2rem 0;
    .v-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 90vw;
      margin: 0 auto 2rem auto;
      padding-bottom: 2rem;
      position: relative;
      .v-image {
        max-height: 200px;
        max-width: 350px;
      }
      .v-responsive__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        min-width: 100%;
        .v-card__title {
          font-size: 2rem;
          font-weight: 700;
        }
      }
      .v-btn.ticket-type {
        align-self: center;
        background-color: #fff;
        border: 1px solid #ff6d00;
        border-radius: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        position: relative;
        top: -1.25rem;
        min-width: 100px;
      }
      ul {
        padding: 0 0 1rem 0;
        li {
          margin: 0.5rem 0;
        }
      }
      .v-card__actions {
        margin-top: auto;
      }
    }
  }
}

#speakers {
  background: #fefefe;
  padding: 2rem 0;
  .speakers-list {
    background: transparent;
    padding: 2rem 0;
    .v-card {
      background: transparent;
      margin: 2rem 0;
      .v-image {
        border-radius: 0.5rem;
        margin: 0 auto;
        max-height: 200px;
        max-width: 350px;
      }
      .v-card__title {
        padding-top: 0.25rem;
      }
      .v-card__title,
      .v-card__subtitle {
        margin-left: 1rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  // hero section
  #hero {
    background: url('/img/hero.jpg');
    background-size: 50% 100%;
    padding: 0;

    section.content-container {
      background: #fefefe;
      clip-path: polygon(0 0, 70% 0%, 100% 50%, 70% 100%, 0 100%);
      padding: 0 2rem;
      width: 60%;
      min-height: 600px;

      p {
        font-size: 1.33rem;
      }

      h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 4rem;
        margin-right: 20%;
      }

      .v-btn {
        box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
        max-width: 180px;
        text-transform: capitalize;
      }
    }
  }

  // information section

  #information > section {
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 0 2rem 2rem;

    .tagline {
      margin: 0;
    }

    .information-content {
      display: flex;
      align-items: center;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 2rem;
        padding: 2rem 0;

        .number {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 2.75rem;
        }

        .label {
          text-transform: capitalize;
        }
      }
    }

    .information-content section:first-of-type {
      .number {
        color: #ff6d00; // orange accent-4
      }
    }
  }

  // event details section
  #event-details {
    .event-images {
      flex-direction: row;
      justify-content: center;
      position: relative;
      margin-bottom: 5rem;
      .v-image:nth-of-type(2) {
        border: 8px solid #eee;
        position: relative;
        top: 20px;
        left: -20px;
        max-width: 316px;
      }
      .v-image:nth-of-type(3) {
        position: relative;
        top: 40px;
        left: -20px;
        max-width: 316px;
      }
    }

    .event-text.container {
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-areas: 'header text';
      gap: 2rem;
      min-height: 0;

      h2 {
        font-size: 4rem;
        font-weight: 900;
        grid-area: header;
        line-height: 1;
        padding: 0 4rem;
        justify-self: center;
      }

      .cta-text {
        grid-area: text;
        h3,
        p,
        .v-btn {
          margin: 1rem 0;
        }
        h3 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-top: 0;
        }
      }
    }
  }

  // RSVP section

  #rsvp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'txt txt img img'
      'cards cards cards cards';
    gap: 2rem;
    padding: 4rem 0 2rem;

    section.content-container {
      grid-area: txt;
      padding-left: 1rem;
      padding-bottom: 0;
      h3,
      p,
      .v-btn {
        margin: 1rem;
      }
      h3 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
        margin-top: 0;
      }
      p {
        font-size: 1.25rem;
      }
    }

    .v-image {
      grid-area: img;
      margin: 1.5rem 2rem;
    }

    .highlights {
      flex-direction: row;
      grid-area: cards;
      width: 90%;
      margin: 0 auto;
      .v-card {
        margin: 1rem;
        padding: 2rem;
        h4 {
          font-size: 1.67rem;
          font-weight: 900;
          padding-bottom: 1rem;
        }
        div {
          border: 0.25rem solid #ff9100;
          width: 25%;
          height: auto;
        }
        p {
          font-size: 1.125rem;
          margin: 1rem 0;
        }
      }
    }
  }

  // day list section

  #day-schedule {
    padding-top: 0;
    .content-container {
      padding: 4rem 2rem;
      h2,
      h3 {
        line-height: 1;
        padding: 1rem 0;
      }
      h2 {
        font-size: 3rem;
        font-weight: 900;
      }
      .sub-container {
        border-left: 0.5rem solid #ff6d00;
        margin-left: 1rem;
        padding-left: 5rem;
        h3 {
          font-size: 2.33rem;
          font-weight: 700;
          padding-top: 0;
        }
        p {
          font-size: 1.33rem;
          padding: 1rem 0;
          width: 50%;
        }
      }
    }
    .tabs-container {
      .v-tabs-bar {
        padding: 2rem;
      }
      .v-tabs--vertical > .v-tabs-bar .v-tabs-bar__content {
        flex-direction: row;
      }
      .v-tab {
        clip-path: polygon(12.5% 0%, 100% 0%, 87.5% 100%, 0% 100%);
        padding: 4rem;
        margin: 1rem auto;
        h4 {
          font-size: 2rem;
        }
      }
      .v-tabs-items .v-window-item {
        padding: 2rem 4rem;
        .v-card {
          display: flex;
          align-items: center;

          .section {
            display: flex;
            flex-direction: row;
          }
          .time {
            margin-right: 10%;
          }
          .event-title {
            font-size: 1.5rem;
          }
          .speaker {
            font-size: 1.125rem;
          }
          .v-avatar {
            margin-left: auto;
          }
        }
      }
    }
  }

  #prices {
    .packages {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  #speakers {
    .speakers-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .v-card {
        .v-image {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
