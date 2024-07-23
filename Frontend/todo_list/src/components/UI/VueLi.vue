<template>
  <li>
    <h4>{{ listItem?.header ? listItem?.header : "Заголовок" }}</h4>
    <p>
      {{
        listItem?.body
          ? listItem?.body?.length > 100
            ? listItem?.body.slice(0, 100) + "..."
            : listItem?.body
          : "Описание..."
      }}
      <!--{{
        listItem?.body && listItem?.body?.length > 100
          ? listItem?.body.slice(0, 100) + "..."
          : listItem?.body
      }}-->
    </p>
    <VueButton @click.stop="$emit('delete-item-list', listItem?.item_id)">
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  max-height: 50vh;
  overflow: hidden;
}
li:last-child {
  margin-bottom: 0px;
}

li:hover {
  transform: translateX(10px);
  transition: transform 0.2s ease;
}

li:focus {
  border: solid 3px var(--vt-c-indigo);
}

h4 {
  font-size: 24px;
  word-break: break-all;
}

p {
  word-break: break-all;
  white-space: pre-wrap;
}

button {
  align-self: flex-start;
}
</style>
