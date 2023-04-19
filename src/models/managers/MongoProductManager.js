import mongoose from "mongoose";
import { Product } from "../dbModels/product.js";
import { logger } from "../../helpers/logger.js";

class MongoProductManager {
    constructor(options, collection) {
        this.database = mongoose.connect(options.URI, options.parameters)
        this.collection = collection
        logger.info("Connected to MongoDB - Product Manager")
    }

    async getById(id) {
        return await Product.findById(id)
    }

    async getByIds(idList) {
        return await Product.find({ _id: { $in: idList } })
    }

    async getAll() {
        return await Product.find()
    }

    async save(product) {
        const newProduct = new Product(product)
        return await newProduct.save()

    }

    async updateById(id, data) {
        return await Product.findByIdAndUpdate(id, data)
    }

    async deleteById(id) {
        return await Product.findByIdAndDelete(id)
    }

    async deleteAllProducts() {
        return await Product.deleteMany({})
    }
}

export { MongoProductManager }