import express from "express";
import { ProductController } from "../../controller/product.controller.js";
import { checkUserLoggued } from "../../middlewares/userAuth.js";
import { checkAdminRole } from "../../middlewares/adminRole.js";

const router = express.Router()

router.get("/", checkUserLoggued, ProductController.getProducts)
router.get("/:id", checkUserLoggued, ProductController.getProductById)
router.post("/", checkUserLoggued, ProductController.saveProduct)
router.put("/:id", checkAdminRole, ProductController.updateProduct)
router.delete("/:id", checkUserLoggued, ProductController.deleteProduct)
router.delete("/", checkAdminRole, ProductController.deleteAllProducts)

export { router as productRouter }

