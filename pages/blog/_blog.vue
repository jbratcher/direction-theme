<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col>
        <article>
          <v-card class="d-flex flex-column align-center mx-auto pb-12" flat tile>
            <v-img
              class="align-end"
              :src="blogPost.hero"
              :alt="blogPost.title"
              lazy-src="https://picsum.photos/10/6"
              width="100%"
              max-height="300"
            />
            <v-card-title
              :class="{'display-2 font-weight-bold mb-6': $breakpoint.mdAndUp, 'display-1 font-weight-bold mb-6': $breakpoint.smAndDown}"
            >{{blogPost.title}}</v-card-title>
            <v-card-subtitle
              :class="{'headline font-weight-bold mb-9 px-6': $breakpoint.mdAndUp, 'title font-weight-bold mb-9 px-6': $breakpoint.smAndDown}"
            >{{blogPost.description}}</v-card-subtitle>
            <v-card-text
              v-html="$md.render(blogPost.body)"
              :class="{'body-1': $breakpoint.mdAndUp, 'body-1 px-6': $breakpoint.smAndDown}"
            ></v-card-text>
          </v-card>
        </article>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .v-card__title,
  .v-card__subtitle,
  .v-card__text {
    max-width: 60vw;
  }
}
</style>