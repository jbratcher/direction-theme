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
  }
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
</style>
