import { ManagerDaoCarts } from "../config/daosConfig.js";

class CartService {
    static async getCarts() {
        return await ManagerDaoCarts.getAll();
    }

    static async saveCart(body) {
        return await ManagerDaoCarts.save(body)
    }

    static async getCart(id) {
        return await ManagerDaoCarts.getById(id)
    }

    static async updateCart(id, body) {
        return await ManagerDaoCarts.updateById(id, body)
    }

    static async deleteCart(id) {
        return await ManagerDaoCarts.deleteById(id)
    }

    //metodo para borrar un producto del carrito 
    static async deleteProductInCartById(cartId, productId) {
        return await ManagerDaoCarts.deleteProductInCartById(cartId, productId)
    }
}

export { CartService }
