import express from "express";
const ListItemsRouter = express.Router();

import { ListItemsController } from "../controllers/controller_list_items";

const ListItems: ListItemsController = new ListItemsController();

ListItemsRouter.get("/list-items", ListItems.getAll);
ListItemsRouter.get("/list-items/:id", ListItems.getOne);
ListItemsRouter.post("/list-items/add", ListItems.add);
ListItemsRouter.put("/list-items/update/:id", ListItems.update);
ListItemsRouter.delete("/list-items/delete/:id", ListItems.delete);
ListItemsRouter.delete("/list-items/delete-list-items", ListItems.deleteAll);

export { ListItemsRouter };
