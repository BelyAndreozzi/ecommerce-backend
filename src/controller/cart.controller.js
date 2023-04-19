import { CartService } from "../service/cart.service.js";
import { DateHelper } from "../helpers/DateHelper.js";

class CartController {
    static async getCarts(req, res) {
        try {
            const result = await CartService.getCarts()
            if (typeof result == "string") {
                res.status(404).send('El archivo no existe')
            } else {
                res.json(result)
            }
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async saveCart(req, res) {
        try {
            const result = await CartService.saveCart({ timestamp: DateHelper.getDate(), productsId: req.body.productsId })
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async getCart(req, res) {
        try {
            res.json(await CartService.getCart(req.params.id));
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }

    }

    static async updateCart(req, res) {
        try {
            const result = await CartService.updateCart(req.params.id, req.body)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async deleteCart(req, res) {
        try {
            const result = await CartService.deleteCart(req.params.id)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }

    static async deleteProductById(req, res) {
        try {
            const result = await CartService.deleteProductInCartById(req.params.id, req.params.id_prod)
            res.json(result);
        } catch (error) {
            res.status(400).json({
                status: "ERROR",
                message: `Hubo un error ${error}`
            })
        }
    }


}

export { CartController }