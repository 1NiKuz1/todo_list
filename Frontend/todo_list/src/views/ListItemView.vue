<template>
  <div class="list-item">
    <form @submit.prevent @click.stop>
      <input
        v-model.trim="header"
        name="header"
        type="text"
        maxlength="100"
        placeholder="Заголовок"
      />
      <textarea
        v-model.trim="body"
        name="body"
        maxlength="5000"
        placeholder="Описание..."
      ></textarea>
      <div class="list-item__buttons-wrapper">
        <VueButton type="button" @click="$router.push('/')">Назад</VueButton>
        <VueButton
          v-show="body !== bodyOldValue || header !== headerOldValue"
          type="button"
          @click="saveChangesOfListItem"
          >Сохранить изменения</VueButton
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { useListItemsStore, type IListItem } from "../stores/list_items";
import { useRoute } from "vue-router";

const route = useRoute();

const body: Ref<string> = ref("");
const header: Ref<string> = ref("");
const bodyOldValue: Ref<string> = ref("");
const headerOldValue: Ref<string> = ref("");
const listItemsStore = useListItemsStore();
const { updateListItem, getOneListItem } = listItemsStore;

async function loadListItem() {
  try {
    const listItem: IListItem = await getOneListItem(+route.params.id);
    body.value = bodyOldValue.value = listItem.body;
    header.value = headerOldValue.value = listItem.header;
  } catch (error) {}
}

async function saveChangesOfListItem() {
  try {
    await updateListItem(+route.params.id, {
      header: header.value,
      body: body.value,
    });
    bodyOldValue.value = body.value;
    headerOldValue.value = header.value;
  } catch (error) {}
}

onMounted(() => {
  loadListItem();
});
</script>

<style scoped>
.list-item {
  background-color: transparent;
  padding: 40px 0px;
}

.list-item__buttons-wrapper {
  display: flex;
  gap: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
textarea {
  padding: 5px 10px;
  background-color: var(--color-background-soft);
  border: none;
  color: var(--vt-c-white-soft);
  font-size: 16px;
  border-radius: 5px;
}

textarea {
  min-height: 80vh;
  height: auto;
  resize: none;
}
</style>
