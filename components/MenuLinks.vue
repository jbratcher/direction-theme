/* eslint-disable */
<template>
  <!-- Links Wrapper -->
  <v-list :class="listClass" rounded>
    <!-- General links -->
    <v-list-item
      v-for="(item, i) in generalLinks"
      :key="i + `-${item.title}`"
      :to="item.to"
      :class="`${listItemClass} mb-0`"
      router
      exact
    >
      <v-list-item-action v-if="item.icon" class="mr-1">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>

    <v-menu open-on-hover offset-x>
      <template v-slot:activator="{ on }">
        <v-btn class="more-button" v-on="on" text>
          <v-icon class="mr-1">mdi-briefcase</v-icon>More
        </v-btn>
      </template>

      <v-list class="d-flex flex-column">
        <v-list-item v-for="(page, i) in pages" :key="`${page.name}${i}`" :to="page.to">
          <v-icon class="mr-1">{{ page.icon }}</v-icon>
          <v-list-item-title>{{ page.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-list>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MenuLinks',
  props: {
    generalLinks: {
      type: Array,
      default() {
        return []
      }
    },
    listClass: {
      type: String,
      default: ''
    },
    listItemClass: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    pages: [
      {
        name: 'Blog',
        icon: 'mdi-post',
        to: '/blog'
      },
      {
        name: 'RSVP',
        icon: 'mdi-ticket',
        to: '/rsvp'
      }
    ]
  })
}
</script>

<style lang="scss">
.mobile {
  flex-direction: column;
  margin: 0.5rem auto 1rem;
}

.mobile.v-list .v-list-item {
  margin: 1rem 0;
}

.more-button {
  margin: 1rem auto 0 0;

  .v-btn__content {
    font-size: 1.33rem;
    font-weight: 700;
  }
}

@media screen and (min-width: 768px) {
  .more-button {
    margin: auto;
    .v-btn__content {
      font-size: 0.875rem;
      font-weight: 700;
    }
  }
}
</style>
