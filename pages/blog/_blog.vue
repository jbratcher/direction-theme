<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col class="ma-0 pa-0">
        <v-sheet class="ma-0" color="primary" dark tile>
          <h1 display="headline">Blog > {{ blogPost.title }}</h1>
        </v-sheet>
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
            <v-card-title>{{blogPost.title}}</v-card-title>
            <v-card-subtitle>{{blogPost.description}}</v-card-subtitle>
            <v-card-text v-html="$md.render(blogPost.body)"></v-card-text>
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
h1 {
  font-size: 2rem;
  padding: 1rem 3rem;
}

.v-card__title {
  font-size: 2rem;
  margin: 2rem 0 1rem;
}

.v-card__subtitle {
  font-size: 1.25rem;
  margin: 1rem 0 2rem;
}

.v-card__text {
  padding: 0 5vw;
}

@media screen and (min-width: 768px) {
  .v-card__title {
    font-size: 3rem;
  }

  .v-card__subtitle {
    font-size: 1.67rem;
  }

  .v-card__text {
    padding: 0 20vw;
  }
}
</style>