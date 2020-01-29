<template>
  <v-layout>
    <v-flex>
      <main id="speakers-page">
        <!-- Main Section -->
        <section>
          <section class="content-container">
            <h1>Speakers</h1>
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
      </main>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  computed: {
    speakers() {
      return this.$store.state.speakers
    },
    threeCardImageWidththreeCardImageWidth() {
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
    }
  }
}
</script>

<style lang="scss">
</style>
