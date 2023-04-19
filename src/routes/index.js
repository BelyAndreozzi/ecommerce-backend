import express from "express";
import { productRouter } from "./api/product.routes.js";
import { cartRouter } from "./api/cart.routes.js";
import { orderRouter } from "./order.js";
import { authRouter } from "./auth.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter)
router.use("/auth", authRouter)

export { router as apiRouters };
