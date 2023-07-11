import { getData } from "../config/connection.config.js";
import { DataTypes } from "sequelize";
import bcryptjs from "bcryptjs";
import { getProduc } from "./products.model.js";

const User = getData.sequelizeClient.define(
  "cat_users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Ingrese un nombre",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: "",
      },
      validate: {
        notNull: {
          msg: "Ingrese un correo",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Ingrese una contraseña",
        },
      },
    },
    estado:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      validate:{
        notNull:{
          msg:"ingrese un estado",
        }
      }
    },
  },
  {
    tableName: "cat_users",
    freezeTableName: true,
    hooks: {
      beforeCreate: (user, options) => {
        {
          user.password =
            user.password && user.password != ""
              ? bcryptjs.hashSync(user.password, 10)
              : "";
        }
      },
    },
  }
);




export const getUser = { User };
