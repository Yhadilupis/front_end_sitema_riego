import { getData } from "../config/connection.config.js";
import { DataTypes, UUIDV4 } from "sequelize";

const Data = getData.sequelizeClient.define(
  "cat_data",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    ambientHumidity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "No se detecto ningun valor de Humedad ambiental",
        },
      }
    },
    soilHumidity:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "No se detectó ningún valor de humedad terrestre",
        },
      }
    },
    ambientTemperature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "No se detectó ningún valor de Temperatura",
        },
      }
    },
    luminosity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "No se detectó ningún valor de del nivel de la luz",
        },
      }
    },
  },
  {
    tableName: "cat_data",
    freezeTableName: true,
  }
);

export const getProduc = { Data };
