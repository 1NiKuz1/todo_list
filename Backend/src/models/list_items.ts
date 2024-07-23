import { DataTypes, Model, Sequelize } from "sequelize";

class ListItems extends Model {
  declare item_id: number;
  declare header: string;
  declare body: string;
}

export const ListItemsModel = (sequelize: Sequelize) => {
  ListItems.init(
    {
      item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      header: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "list_items",
      timestamps: false,
      sequelize,
      modelName: "List",
    }
  );

  return ListItems;
};
