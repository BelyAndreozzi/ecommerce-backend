import { OrderManager } from "../models/managers/OrderManager.js";

class OrderService {
    static async sendEmailOrder(cartId) {
        return await OrderManager.sendEmailOrder(cartId)
    }
}

export { OrderService }