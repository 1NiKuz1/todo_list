<template>
  <ul v-if="ListItemsComputed.length">
    <VueLi
      v-for="item in ListItemsComputed"
      :key="item.item_id"
      :list-item="item"
      @delete-item-list="deleteListItem($event)"
      @click="$emit('select-item', item.item_id)"
    />
  </ul>
  <p v-else>Нет записей</p>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import VueLi from "./UI/VueLi.vue";
import { useListItemsStore } from "../stores/list_items";
import { storeToRefs } from "pinia";

defineEmits(["select-item"]);

const listItemsStore = useListItemsStore();
const { getAllListItems, deleteListItem } = listItemsStore;
const { ListItemsComputed } = storeToRefs(listItemsStore);

onMounted(async () => {
  getAllListItems();
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
