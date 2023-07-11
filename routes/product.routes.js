import { producController } from "../controllers/products.controller.js";
import { Router } from "express";
import bodyParser from "body-parser";
import multer from "multer";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * @openapi
 * '/api/data/create':
 *  post:
 *     tags:
 *     - Product
 *     summary: Crear Producto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ambientHumidity
 *              - soilHumidity
 *              - ambientTemperature
 *              - luminosity
 *            properties:
 *              ambientHumidity:
 *                type: integer
 *                format: binary
 *                default: 30
 *              soilHumidity:
 *                 type: integer
 *                 default: 20
 *              ambientTemperature:
 *                type: integer
 *                default: 30
 *              luminosity:
 *                type: integer
 *                default: 200
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.post("/create", (req, res) =>  producController.produc_create(req, res));

/**
 * @openapi
 * '/api/data/update':
 *  put:
 *     tags:
 *     - Product
 *     summary: actualizar Producto
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *           schema:
 *            type: object
 *            required:
 *              -id
 *              - name
 *              - description
 *              - price
 *              - amount
 *            properties:
 *              id:
 *                type: UUID
 *                default:
 *              name:
 *                type: string
 *                format: binary
 *                default: img
 *              description:
 *                type: string
 *                default: producto descripcion
 *              price:
 *                type: integer
 *                default: 200
 *              amount:
 *                 type: integer
 *                 default: 10
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put("/update", upload.single("name"), (req, res) =>
  producController.Product_update(req, res, upload)
);

/**
 * @openapi
 * '/api/data/view':
 *  get:
 *     tags:
 *     - Product
 *     summary: visualizar Productos
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.get("/view", (req, res) => producController.produc_view(req, res));

/**
 * @openapi
 * '/api/data/delete':
 *  delete:
 *     tags:
 *     - Product
 *     summary: eliminar Producto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            required:
 *              -id
 *            properties:
 *              id:
 *                type: UUID
 *                default: fc1ea539-6af5-428b-9fd1-2b71fddead23
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.delete("/delete", (req, res) =>
  producController.Product_delete(req, res, upload)
);


export default router;
