<template>
  <v-list>
    <v-subheader>Artikel</v-subheader>
    <v-list-item-group v-model="currentItem" color="primary">
      <v-list-item v-for="(item, i) in availableItems" :key="i">
        <v-list-item-content>
          <nuxt-link :to="item.path">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    items: {
      type: String[2],
      required: true
    }
  },
  data: context => ({
    currentItem: 1,
    availableItems: context.$props.items
  })
};
</script>