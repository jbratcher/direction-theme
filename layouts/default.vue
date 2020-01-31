<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar app elevate-on-scroll hide-on-scroll :height="navHeight" flat light tile>
      <v-btn class="brand" name="brand" href="/" text>{{ title }}</v-btn>
      <v-spacer class="hidden-md-and-up" />
      <v-app-bar-nav-icon class="hidden-md-and-up" color="#000" @click.stop="drawer = !drawer" />
      <MenuLinks :general-links="generalLinks" list-class="hidden-sm-and-down" />
      <v-btn
        class="flex-0 align-self-center hidden-sm-and-down btn-box-shadow"
        color="blue accent-4"
        dark
        nuxt
        rounded
        to="/contact"
        x-large
      >Contact</v-btn>
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed right>
      <MenuLinks :general-links="generalLinks" list-class="mobile" />
      <v-btn
        class="flex-0 align-self-center btn-box-shadow"
        color="primary"
        dark
        nuxt
        rounded
        to="/contact"
        x-large
      >Contact Us</v-btn>
    </v-navigation-drawer>
    <!-- Nuxt content -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- Footer Area -->
    <v-footer>
      <section class="content-container">
        <h2>Direction</h2>
        <p>A event/conference theme for Nuxt and Netlify CMS</p>
        <section class="subscribe-form">
          <v-text-field label="Email" outlined color="orange accent-4" clearable></v-text-field>
          <v-btn
            color="white--text orange accent-4"
            dark
            name="sponsor-apply"
            nuxt
            rounded
            to="/sponsor-apply"
            x-large
          >Get our Newsletter</v-btn>
        </section>
      </section>
      <ul>
        <li v-for="(link, i) in generalLinks" :key="i + link.title">
          <v-btn :href="link.to" rounded text>{{ link.title }}</v-btn>
        </li>
      </ul>
      <v-container>
        {{ new Date().getFullYear() }} —
        <strong>{{title}}</strong>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import MenuLinks from '../components/MenuLinks.vue'

export default {
  components: {
    MenuLinks
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      generalLinks: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-account-group',
          title: 'Speakers',
          to: '/speakers'
        }
      ],
      miniVariant: false,
      title: 'Direction'
    }
  },
  computed: {
    navHeight() {
      let height = '100px'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = '80px'
          break
        case 'sm':
          height = '90px'
          break
        case 'md':
          height = '100px'
          break
        case 'lg':
          height = '110px'
          break
        case 'xl':
          height = '120px'
          break
      }
      return height
    }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
.v-application {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  overflow-x: hidden;
}

ul {
  list-style-type: none;
}

// classes

.v-image {
  object-fit: cover;
}

// nav

.v-toolbar__content {
  margin: 0 0.5rem;
  .v-btn.brand {
    font-size: 2rem;
    font-weight: 900;
  }
}

.v-list {
  display: flex;

  .v-list-item {
    flex: 0;
    margin: 0 0.5rem;
    padding: 0 0.875rem;
  }

  .v-list-item__title {
    font-size: 1.33rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}

.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  height: 3.75rem;
  width: 3.75rem;
}

.v-btn--icon.v-size--default .v-icon {
  font-size: 3rem;
  height: 3rem;
  width: 3rem;
}

.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
}

.btn-box-shadow {
  box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);
}

// card

.v-card__title {
  word-break: break-word;
}

// footer

.v-footer {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-container {
    margin-bottom: 4rem;
    padding: 0 2rem;
    text-align: center;
    h2 {
      font-size: 2.67rem;
      font-weight: 900;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
      padding-bottom: 3rem;
    }
  }

  .subscribe-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .v-input {
      width: 80%;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 1rem 0;
  }

  .container {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }
}

@media screen and (min-width: 768px) {
  // nav

  .v-toolbar__content {
    justify-content: space-between;
    margin: 0 0.75rem;
  }

  .v-list {
    .v-list-item {
      margin: 0 0.25rem;
    }

    .v-list-item__title {
      font-size: 0.875rem;
    }
  }
}

// hero section
#hero {
  padding: 0 0 2rem;

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
        color: #ff6d00; // orange accent-4
      }
    }
  }
}

// prominent section heading

main > .container {
  .content-container {
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

// event details section
#event-details {
  display: flex;
  flex-direction: column;
  align-items: center;

  .event-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90vw;

    .v-image {
      margin: 1rem auto;
      max-width: 90vw;
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
  padding: 3rem;

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
    max-width: 90vw;
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

// day schedule section

#day-schedule {
  padding: 4rem 3rem;
  .tabs-container {
    background: #fafafa;
    .v-tabs-bar {
      background: #fafafa;
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
      background: #fafafa;
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
  padding: 4rem 3rem;
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
        .v-btn {
          padding: 1.5rem;
        }
      }
    }
  }
}

// speakers section

#speakers {
  background: #fefefe;
  padding: 2rem 3rem;
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

// sponsors section

#sponsors {
  padding: 4rem 3rem;
  .regular-sponsors,
  .top-sponsors {
    margin: 2rem 0;
    padding: 2rem;

    h4 {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    & > section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;

      .v-btn {
        margin: 2rem 0;
        max-width: min-content;
      }
    }
  }
  .top-sponsors {
    padding-bottom: 6rem;
  }
  .sponsor-apply {
    padding: 0 2rem;
    h4 {
      font-size: 1.67rem;
      margin-bottom: 1rem;
    }
  }
}

// blog section

#blog {
  background: #fefefe;
  padding: 6rem 3rem 4rem;
  .location {
    position: relative;
    .v-image {
      max-width: 90vw;
      max-height: 300px;
      margin: 0 auto;
    }
    .v-card {
      margin: 0 auto;
      position: relative;
      top: -4rem;
      width: 70vw;

      .v-card__title {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .v-card__subtitle {
        color: #ff6d00;
        font-size: 1.5rem;
      }

      .v-card__text {
        padding: 0.25rem 1rem;
      }

      .v-card__text:last-child {
        padding-bottom: 1rem;
        margin: 2rem 0;
      }
    }
  }
  .blog-posts {
    padding: 4rem 2rem 0;
    .v-card {
      max-width: 90vw;
      margin: 0 auto 4rem auto;
      .v-image {
        max-height: 200px;
        max-width: 350px;
        margin: 0 auto;
      }
    }
  }
}

// pages

#about-page > section:first-child,
#speakers-page > section:first-child,
#rsvp-page > section:first-child,
#contact-page > section:first-child {
  align-items: center;
  background: #2962ff; // blue accent-4
  background-image: linear-gradient(
      to top right,
      rgba(41, 98, 255, 0.5),
      rgba(41, 98, 255, 0.5)
    ),
    url('/img/event-details-1.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    width: fit-content;
    h1 {
      border-bottom: 0.25rem solid #fff;
      color: #fff;
      font-size: 3rem;
      font-weight: 900;
      padding-bottom: 1rem;
      text-align: center;
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
      padding: 0 3rem;
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
      align-items: baseline;

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

  main > .container {
    padding: 4rem 3rem;
  }

  // event details section
  #event-details {
    .event-images {
      flex-direction: row;
      justify-content: center;
      position: relative;
      margin-bottom: 5rem;
      .v-image {
        border: 8px solid #fefefe;
        position: relative;
        max-width: 316px;
      }
      .v-image:nth-of-type(1) {
        left: 40px;
      }
      .v-image:nth-of-type(2) {
        top: 20px;
        left: 20px;
      }
      .v-image:nth-of-type(3) {
        top: 40px;
        left: -20px;
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
    padding: 4rem 3rem 2rem;

    section.content-container {
      grid-area: txt;
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

  // prices section

  #prices {
    .packages {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  // speakers section

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

  // sponsors section

  #sponsors {
    .regular-sponsors,
    .top-sponsors {
      margin: 2rem 0;

      h4 {
        font-size: 1.25rem;
        margin-bottom: 2rem;
      }

      & > section {
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem 0;
        justify-items: center;
      }
    }
    .sponsor-apply {
      h4 {
        font-size: 1.67rem;
        margin-bottom: 1rem;
      }
    }
  }

  // blog section

  #blog {
    padding: 4rem 3rem;
    .location {
      max-height: 350px;
      .v-card {
        width: 25vw;
        top: -270px;
        left: 20vw;
      }
    }
    .blog-posts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }
}
</style>