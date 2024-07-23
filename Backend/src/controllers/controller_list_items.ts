import type { Request, Response, NextFunction } from "express";
import { ListItems } from "../models";

interface IListItemsController {
  getAll(req: Request, res: Response, next: NextFunction): Promise<Response>;
  getOne(req: Request, res: Response, next: NextFunction): Promise<Response>;
  add(req: Request, res: Response, next: NextFunction): Promise<Response>;
  update(req: Request, res: Response, next: NextFunction): Promise<Response>;
  delete(req: Request, res: Response, next: NextFunction): Promise<Response>;
  deleteAll(req: Request, res: Response, next: NextFunction): Promise<Response>;
}

class ListItemsController implements IListItemsController {
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const list_items = await ListItems.findAll();
      return res.json(list_items);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при получении эелементов списка" });
    }
  }

  async getOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const list_item = await ListItems.findByPk(req.params.id);
      return res.json(list_item);
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при получении эелемента списка" });
    }
  }

  async add(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await ListItems.create(req.body);
      return res.json({ message: "Элемент списка добавлен" });
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при создании эелемента списка" });
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await ListItems.update(req.body, {
        where: { item_id: req.params.id },
      });
      return res.json({ message: "Элемент списка обновлен" });
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при обновлении эелемента списка" });
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await ListItems.destroy({
        where: { item_id: req.params.id },
      });
      return res.json({ message: "Элемент списка удален" });
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при удалении эелемента списка" });
    }
  }

  async deleteAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await ListItems.destroy({
        truncate: true,
      });
      return res.json({ message: "Элемент списка удалены" });
    } catch (error: any) {
      return res
        .status(500)
        .json({ error, message: "Ошибка при удалении эелементов списка" });
    }
  }
}

export { ListItemsController };
