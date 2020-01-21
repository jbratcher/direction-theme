<template>
  <v-layout>
    <v-flex>
      <main>
        <!-- Hero Section -->
        <section id="hero">
          <section class="content-container">
            <p>January, 31st, 2020 - 9:00 AM</p>
            <h1>The Intersection of Art &amp; Tech</h1>
            <v-btn color="orange accent-3" dark nuxt rounded to="/services" x-large>Learn More</v-btn>
          </section>
        </section>

        <!-- Countdown -->
        <section id="information">
          <section class="justify-space-evenly">
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
            <v-img src="/img/event-details-1.jpg" alt />
            <v-img src="/img/event-details-2.jpg" alt />
            <v-img src="/img/event-details-3.jpg" alt />
          </section>
          <v-container class="event-text">
            <h2>Event Details</h2>
            <section class="cta-text">
              <h3>The Wave of the Future</h3>
              <p>Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis.</p>
              <v-btn color="orange accent-3" dark nuxt rounded to="/services" x-large>Learn More</v-btn>
            </section>
          </v-container>
        </section>

        <!-- Rsvp Section -->
        <section id="rsvp">
          <section class="content-container">
            <p>Hurry, this event is almost sold out!</p>
            <h3>Meet &amp; Greet the Local Leaders of the Tech Industry</h3>
            <v-btn color="blue accent-3" dark nuxt rounded to="/rsvp" x-large>RSVP Now</v-btn>
          </section>
          <v-img src="/img/event-details-3.jpg" alt />
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-12">
          <h1 class="display-1 pl-12">Contact Section</h1>
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
        color: #ff9100; // orange accent-3
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
    margin: 1rem auto;
    max-width: 95vw;
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
      padding: 0 2rem;
      width: 50%;
      min-height: 600px;

      p {
        font-size: 1.33rem;
      }

      h1 {
        font-size: 4rem;
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

  #information > section {
    background: #fff;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
    flex-direction: row;
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
        color: #ff9100; // orange accent-3
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
      .v-image {
        max-width: 300px;
      }
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
        font-size: 5rem;
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
          font-size: 4rem;
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
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    padding: 0;

    section.content-container {
      padding-left: 1rem;
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
      margin: 0;
    }
  }
}
</style>
