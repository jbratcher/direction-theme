<template>
  <v-app>
    <!-- Header Area -->
    <v-app-bar app elevate-on-scroll height="100px" fixed flat light tile>
      <v-toolbar-title v-text="title" />
      <v-spacer class="hidden-md-and-up" />
      <v-app-bar-nav-icon class="hidden-md-and-up" color="#000" @click.stop="drawer = !drawer" />
      <MenuLinks
        :general-links="generalLinks"
        list-class="hidden-md-and-down"
        list-item-class="row-menu"
      />
      <v-btn
        class="flex-0 align-self-center hidden-md-and-down"
        color="#4125ff"
        dark
        nuxt
        rounded
        to="/contact"
        x-large
      >Contact Us</v-btn>
    </v-app-bar>
    <!-- side/mobile navigation -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed right>
      <MenuLinks :general-links="generalLinks" list-class="mobile" />
      <v-btn
        class="flex-0 align-self-center"
        color="#4125ff"
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
      <ul>
        <li v-for="(link, i) in footerLinks" :key="i + link.title">
          <v-btn text rounded>{{ link.title }}</v-btn>
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
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-account',
          title: 'About Us',
          to: '/about'
        },
        {
          icon: 'mdi-account-group',
          title: 'Team',
          to: '/team'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Services',
          to: '/services'
        }
      ],
      miniVariant: false,
      title: 'DirectionTheme'
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

html {
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

// nav

.v-toolbar__content {
  margin: 0 0.5rem;
}

.v-toolbar__title {
  font-size: 2rem;
  font-weight: 900;
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

// card

.v-card__title {
  word-break: break-word;
}

.justify-space-evenly {
  justify-content: space-around;
  justify-content: space-evenly;
}

// footer

.v-footer {
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin: 0 2rem;
  }

  .v-list {
    .v-list-item__title {
      font-size: 1rem;
    }
  }
}
</style>