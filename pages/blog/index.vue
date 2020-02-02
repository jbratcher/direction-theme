<template>
  <v-layout>
    <v-flex>
      <main>
        <v-sheet class="ma-0" color="primary" dark tile>
          <h1>Blog&nbsp;></h1>
        </v-sheet>
        <v-list>
          <v-list-item three-line v-for="(post, i) in posts" :key="`${post.title}${i}`">
            <v-card class="d-flex flex-column">
              <v-img
                :src="post.thumbnail"
                :alt="post.title"
                lazy-src="https://picsum.photos/10/6"
                max-width="100%"
                height="300px"
                max-height="300px"
              />
              <v-card-title class="display-1">{{post.title.substring(0, 70)}}</v-card-title>
              <v-card-subtitle class="subtitle-1">{{post.description.substring(0, 80)}}</v-card-subtitle>
              <v-card-text>{{post.body.substring(0, 144) + '...'}}</v-card-text>
              <v-btn
                class="mt-auto mb-12 ml-3"
                max-width="120px"
                color="primary"
                nuxt
                :to="`blog/${post.slug}`"
              >Read more...</v-btn>
            </v-card>
          </v-list-item>
        </v-list>
      </main>
    </v-flex>
  </v-layout>
</template>
<script>
import { imageSizesMixin } from '../../mixins/imageSizes.js'
export default {
  mixins: [imageSizesMixin],
  computed: {
    posts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
<style lang="scss">
main {
  & > .v-sheet {
    padding: 2rem 3rem;
    h1 {
      font-size: 2rem;
    }
  }

  & > .v-list {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .v-list-item {
      margin-bottom: 2rem;
    }
  }
}

@media screen and (min-width: 768px) {
  main {
    & > .v-list {
      align-items: flex-start;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem 1rem;

      .v-list-item {
        margin-bottom: 0;
        min-height: stretch;

        // prevent image from overflowing card
        .v-card {
          min-height: stretch;
          max-width: calc(47.5vw - 4rem); // is this too 'hard-coded'?
        }
      }
    }
  }
}
</style>