<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar
      class="justify-space-between"
      app
      elevate-on-scroll
      flat
      :height="navHeight"
      hide-on-scroll
      light
      scroll-threshold="200"
      tile
    >
      <v-btn
        :class="{'display-1 font-weight-bold': $breakpoint.mdAndUp, 'headline': $breakpoint.smAndDown}"
        name="brand"
        href="/"
        text
      >{{ formattedAppTitle }}</v-btn>
      <v-spacer class="hidden-md-and-up" />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <MenuLinks
        :general-links="generalLinks"
        list-class="hidden-sm-and-down d-md-flex mx-auto py-0"
      />
      <v-btn
        class="flex-0 align-self-center hidden-sm-and-down elevation-10"
        color="blue accent-4"
        dark
        nuxt
        rounded
        to="/contact"
        x-large
      >Contact</v-btn>
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer
      class="align-center"
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      right
    >
      <MenuLinks :general-links="generalLinks" list-class="mobile" />
      <v-btn
        class="flex-0 align-self-center elevation-10 mt-12"
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
    <v-footer class="py-12">
      <v-container>
        <v-row>
          <v-col>
            <v-container class="mb-8 px-6 text-center">
              <h2
                :class="{'display-3 font-weight-bold mb-3': $breakpoint.mdAndUp, 'display-1 font-weight-bold mb-3': $breakpoint.smAndDown}"
              >{{ appTitle }}</h2>
              <p
                :class="{'headline mb-12': $breakpoint.mdAndUp, 'title font-weight-regular mb-12': $breakpoint.smAndDown}"
              >{{ appDescription }}</p>
              <v-container class="d-flex flex-column align-center">
                <v-text-field label="Email" color="orange accent-4" clearable outlined></v-text-field>
                <v-btn
                  color="white--text orange accent-4"
                  dark
                  name="sponsor-apply"
                  nuxt
                  rounded
                  to="/sponsor-apply"
                  x-large
                >Get our Newsletter</v-btn>
              </v-container>
            </v-container>
            <ul class="d-flex justify-center">
              <li v-for="(link, i) in footerLinks" :key="i + link.title">
                <v-btn :href="link.to" rounded text>{{ link.title }}</v-btn>
              </li>
            </ul>
            <v-container class="text-center">
              <p>
                {{ new Date().getFullYear() }}&nbsp;—&nbsp;
                <strong>{{appTitle}}</strong>
              </p>
            </v-container>
          </v-col>
        </v-row>
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
      appTitle: process.env.title,
      appDescription: process.env.description,
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
      footerLinks: [
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
        },
        {
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-ticket',
          title: 'RSVP',
          to: '/rsvp'
        },
        {
          icon: 'mdi-contact',
          title: 'contact',
          to: '/contact'
        }
      ],
      miniVariant: false
    }
  },
  computed: {
    formattedAppTitle() {
      if (this.appTitle.length > 10) {
        return this.appTitle.substring(0, 10) + '...'
      } else {
        return this.appTitle
      }
    },
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
  word-break: keep-all;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.v-application .v-card__title {
  word-break: keep-all;
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

.justify-space-evenly {
  justify-content: space-around;
  justify-content: space-evenly;
}

.bl-3-orange-accent-4 {
  border-left: 0.25rem solid #ff6d00;
}

// components

.v-image {
  object-fit: cover;
}

// nav

.v-toolbar--prominent .v-toolbar__content {
  align-items: center;
}

// information section

#information {
  position: relative;

  & > .container {
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    position: relative;
    top: -1.5rem;
  }
}

// RSVP section

#rsvp {
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
  }
}

#prices {
  .packages {
    .v-card {
      position: relative;
      .v-responsive__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        min-width: 100%;
      }
      .v-btn {
        background-color: #fff;
        border: 1px solid #ff6d00;
        position: relative;
        top: -1.25rem;
      }
    }
  }
}

// blog section

#blog {
  .location {
    position: relative;
    .v-card {
      position: relative;
      top: -7rem;
    }
  }
}

// pages

#about-page > .container:first-child,
#speakers-page > .container:first-child,
#rsvp-page > .container:first-child,
#contact-page > .container:first-child,
#blog-page > .container:first-child {
  background: #2962ff; // blue accent-4
  background-image: linear-gradient(
      to top right,
      rgba(41, 98, 255, 0.5),
      rgba(41, 98, 255, 0.5)
    ),
    url('/img/event-details-1.jpg');
  background-size: cover;
  background-position: center center;
  .content-container {
    min-height: 200px;
    width: fit-content;
    h1 {
      border-bottom: 0.25rem solid #fff;
    }
  }
}

@media screen and (min-width: 768px) {
  // hero section
  #hero {
    background: url('/img/hero.jpg');
    background-size: 50% 100%;
    padding: 0;

    .content-clip {
      background: #fefefe;
      clip-path: polygon(0 0, 70% 0%, 100% 50%, 70% 100%, 0 100%);
      padding: 0 3rem;
      width: 60%;
      min-height: 600px;
    }
  }

  // event details section
  #event-details {
    .event-images {
      position: relative;
      margin-bottom: 5rem;
      .v-image {
        border: 8px solid #fafafa;
        position: relative;
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
  }
  // blog section

  #blog {
    .location {
      max-height: 350px;
      .v-card {
        top: -270px;
        left: 20vw;
      }
    }
  }
}
</style>