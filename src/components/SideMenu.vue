<template>
  <v-list>
    <v-subheader>Artikel</v-subheader>
    <v-list-item-group v-model="indexOfSelectedItem" color="primary">
      <v-list-item v-for="(item, i) in sortedItems" :key="i" :href="item.path">
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: {
    availableItems: {
      type: String[2],
      required: true
    },
    selectedItem: {
      type: String,
      required: true
    }
  },
  computed: {
    sortedItems() {
      return this.availableItems.slice(0).sort((a, b) => a.title > b.title);
    },
    indexOfSelectedItem: {
      get: function() {
        return this.availableItems.findIndex(
          file => file.path === this.selectedItem
        );
      },
      set: function(val) {}
    }
  }
};
</script>