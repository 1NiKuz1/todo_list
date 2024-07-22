<template>
  <main>
    <VueButton @click="isShowDialog = true">Добавить задачу</VueButton>
    <AddItemForm @close-dialog="isShowDialog = false" v-if="isShowDialog" />
    <TheList @select-item="$router.push('/' + $event)" />
    <VueButton @click="deleteAllListItems">Очистить задачи</VueButton>
  </main>
</template>

<script setup lang="ts">
import TheList from "../components/TheList.vue";
import AddItemForm from "../components/AddItemForm.vue";
import { ref, type Ref } from "vue";
import { useListItemsStore } from "../stores/list_items";

const isShowDialog: Ref<boolean> = ref(false) as Ref<boolean>;

const listItemsStore = useListItemsStore();
const { deleteAllListItems } = listItemsStore;
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0;
}

main > button {
  align-self: start;
}
</style>
