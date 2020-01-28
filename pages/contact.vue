<template>
  <v-layout>
    <v-flex>
      <main id="contact-page">
        <!-- Main Section -->
        <section>
          <section class="content-container">
            <h1>Contact</h1>
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
