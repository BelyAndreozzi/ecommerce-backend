//create the equivalent of this snippet from src/routes/api/product.routes.js:
import express from "express";
import { CartController } from "../../controller/cart.controller.js";
import { checkUserLoggued } from "../../middlewares/userAuth.js";
import { checkAdminRole } from "../../middlewares/adminRole.js";

const router = express.Router();

router.get("/", checkUserLoggued, CartController.getCarts);
router.get("/:id/products", checkUserLoggued, CartController.getCart);
router.post("/", checkAdminRole, CartController.saveCart);
router.put("/:id", checkUserLoggued, CartController.updateCart);
router.delete("/:id", checkUserLoggued, CartController.deleteCart);
router.delete("/:id/product/:id_prod", checkUserLoggued, CartController.deleteProductById);

export { router as cartRouter };

