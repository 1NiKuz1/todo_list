import express from "express";
import { ListItemsRouter } from "./router_list_items";

const router = express.Router();

router.use("/api/", ListItemsRouter);

export { router };
