import { Router } from "express";
import { oneOf, body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.put(
  "/product/:id",
  body("name").optional().isString(),
  handleInputErrors,
  updateProduct
);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional().isString(),
  updateUpdate
);

router.post(
  "/update",
  body("updatedAt").optional().isString(),
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("version").optional().isString(),
  body("productId").exists().isString(),
  createUpdate
);

router.delete("/update/:id", deleteUpdate);

/**
 * Update point
 */
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("discription").optional().isString(),
  body("updateId").exists().isString(),
  () => {}
);

router.post(
  "/updatepoint",
  body("name").optional().isString(),
  body("discription").optional().isString(),
  body("updateId").exists().isString(),
  () => {}
);

router.delete("/updatepoint/:id", () => {});

export default router;
