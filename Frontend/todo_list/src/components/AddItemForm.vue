<template>
  <body @click="$emit('close-dialog')">
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
        placeholder="Описание"
      ></textarea>
      <VueButton
        type="button"
        @click="addListItem({ header, body }), $emit('close-dialog')"
        >Добавить</VueButton
      >
    </form>
  </body>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useListItemsStore } from "../stores/list_items";

defineEmits(["close-dialog"]);
const body: Ref<string> = ref("") as Ref<string>;
const header: Ref<string> = ref("") as Ref<string>;
const listItemsStore = useListItemsStore();
const { addListItem } = listItemsStore;
</script>

<style scoped>
body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
form {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: var(--color-background-soft);
  border-radius: 10px;
}

input,
textarea {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
}

textarea {
  min-width: 200px;
  min-height: 60px;
}
</style>
