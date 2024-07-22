<template>
  <li>
    <h4>{{ listItem?.header }}</h4>
    <p>
      {{
        listItem?.body && listItem?.body?.length > 100
          ? listItem?.body.slice(0, 100) + "..."
          : listItem?.body
      }}
    </p>
    <VueButton @click="$emit('delete-item-list', listItem?.item_id)">
      Удалить
    </VueButton>
  </li>
</template>

<script setup lang="ts">
import { type IListItem } from "../../services/service_list_items";
defineProps<{
  listItem?: IListItem;
}>();
defineEmits(["delete-item-list"]);
</script>

<style scoped>
li {
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:last-child {
  margin-bottom: 0px;
}
h4 {
  font-size: 24px;
  word-break: break-all;
}

p {
  word-break: break-all;
}
</style>
