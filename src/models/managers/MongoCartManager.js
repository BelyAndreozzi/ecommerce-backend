import mongoose from "mongoose";
import { Cart } from "../dbModels/cart.js";
import { logger } from "../../helpers/logger.js";

mongoose.set('strictQuery', false)

class MongoCartManager {
    constructor(options, collection) {
        this.database = mongoose.connect(options.URI, options.parameters)
        this.collection = collection
        logger.info("Connected to MongoDB - Cart Manager")
    }

    async getById(id) {
        return await Cart.findById(id)
    }

    async getAll() {
        return await Cart.find()
    }

    async save(cart) {

        const newCart = new Cart(cart)

        return await newCart.save((err, res) => {
            if (err)
                console.log(err);
            else console.log(res);
        })

    }

    async updateById(id, data) {
        return await Cart.findByIdAndUpdate(id, data)
    }

    async deleteById(id) {
        return await Cart.findByIdAndDelete(id)
    }

    async deleteProductInCartById(cartId, productId) {
        return await Cart.findByIdAndUpdate(cartId, { $pull: { productsId: productId } });
    }
}

export { MongoCartManager }