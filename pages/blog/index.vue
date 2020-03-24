<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col>
        <main id="blog-page">
          <!-- Main Section -->
          <v-container class="d-flex flex-column align-center py-12" fluid>
            <v-container class="content-container d-flex flex-column justify-center">
              <h1
                :class="{'display-3 font-weight-bold white--text text-center pb-3': $breakpoint.mdAndUp, 'display-1 font-weight-bold white--text text-center pb-3': $breakpoint.smAndDown}"
              >Blog</h1>
            </v-container>
          </v-container>

          <v-container>
            <v-row>
              <v-col v-for="(post, i) in posts" :key="`${post.title}${i}`" class="col-12 col-md-6">
                <v-card class="d-flex flex-column" height="100%">
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
              </v-col>
            </v-row>
          </v-container>
        </main>
      </v-col>
    </v-row>
  </v-container>
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
</style>