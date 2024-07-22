import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import {
  ListItemsService,
  type IListItemsService,
  type IListItem,
} from "../services/service_list_items";

export const useListItemsStore = defineStore("list_items", () => {
  const list_items: Ref<IListItem[]> = ref([]);
  const ListItems: IListItemsService = new ListItemsService();

  function $reset() {
    list_items.value = [];
  }

  async function getAllListItems(): Promise<void> {
    try {
      list_items.value = await ListItems.getAll();
    } catch (error) {
      console.log(error);
    }
  }
  async function getOneListItem(id: number): Promise<IListItem | never> {
    try {
      return await ListItems.getOne(id);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async function addListItem(listItem: IListItem): Promise<void> {
    try {
      await ListItems.add(listItem);
      await getAllListItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function updateListItem(
    id: number,
    listItem: IListItem
  ): Promise<void> {
    try {
      await ListItems.update(id, listItem);
      await getAllListItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteListItem(id: number): Promise<void> {
    try {
      await ListItems.delete(id);
      await getAllListItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteAllListItems(): Promise<void> {
    try {
      await ListItems.deleteAll();
      $reset();
    } catch (error) {
      console.log(error);
    }
  }

  const ListItemsComputed = computed(() => {
    return list_items.value;
  });

  return {
    list_items,
    getAllListItems,
    getOneListItem,
    addListItem,
    updateListItem,
    deleteListItem,
    deleteAllListItems,
    ListItemsComputed,
  };
});

export type { IListItem };
