import path from "path";
import dotenv from "dotenv";
import { dataEnv } from "../config/env.config.js";
import { fileURLToPath } from "url";
import { getProduc } from "../models/products.model.js";
import { PutObjectCommand, S3Client, GetObjectCommand} from "@aws-sdk/client-s3";
import  { PrismaClient}  from '@prisma/client';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const s3 = new S3Client({
  credentials:{
    accessKeyId: dataEnv.parsed.ACCESS_KEY,
    secretAccessKey: dataEnv.parsed.SECRET_ACCESS_KEY
  },
  region:dataEnv.parsed.BUCKET_REGION
});



const produc_view = async function (req, res) {
  getProduc.Data
    .findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};



const produc_create = (req, res) => {
  getProduc.Data.create(
    {
      ambientHumidity: req.body.ambientHumidity,
      soilHumidity: req.body.soilHumidity,
      ambientTemperature: req.body.ambientTemperature,
      luminosity: req.body.luminosity,
    },
    { fields: ["ambientHumidity", "soilHumidity", "ambientTemperature","luminosity"] }

  )
    .then((r) => {
      res.send("send successful");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const Product_update = (req, res) => {
  let id = req.body.id;
  let ambientHumidity = req.file.ambientHumidity;
  let soilHumidity = req.body.soilHumidity;
  let ambientTemperature = req.body.ambientTemperature;
  let luminosity = req.body.luminosity;
  getProduc.Data
    .findOne({ where: { id: id } })

    .then((r) => {
      res.status(200).json({ message: "update successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const Product_delete = async function (req, res) {
  let id = req.body.id;
  getProduc.products
    .destroy({ where: { id: id } })
    .then((r) => {
      res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const producController = {
  produc_create,
  Product_update,
  produc_view,
  Product_delete,
  
};
