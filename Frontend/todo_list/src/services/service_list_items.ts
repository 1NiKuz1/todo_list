import { api } from "./api";

interface IListItem {
  item_id?: number;
  header: string;
  body: string;
}

interface IListItemsService {
  getAll(): Promise<IListItem[] | never>;
  getOne(id: number): Promise<IListItem | never>;
  add(listItem: IListItem): Promise<any | never>;
  update(id: number, listItem: IListItem): Promise<any | never>;
  delete(id: number): Promise<any | never>;
  deleteAll(): Promise<any | never>;
}

class ListItemsService implements IListItemsService {
  async getAll(): Promise<IListItem[] | never> {
    try {
      const result = await api.get("/list-items");
      return result?.data != null ? result.data : [];
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async getOne(id: number): Promise<IListItem | never> {
    try {
      const result = await api.get("/list-items/" + id);
      return result?.data != null ? result.data : {};
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async add(listItem: IListItem): Promise<any | never> {
    try {
      return api.post("/list-items/add", listItem);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async update(id: number, listItem: IListItem): Promise<any | never> {
    try {
      return await api.put("/list-items/update/" + id, listItem);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async delete(id: number): Promise<any | never> {
    try {
      return await api.delete("/list-items/delete/" + id);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteAll(): Promise<any | never> {
    try {
      return await api.delete("/list-items/delete-list-items");
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export { ListItemsService };
export type { IListItemsService, IListItem };
