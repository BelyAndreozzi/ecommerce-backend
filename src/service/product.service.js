import { ManagerDaoProducts } from "../config/daosConfig.js";


class ProductService {

    static async getProducts() {
        return await ManagerDaoProducts.getAll();
    }

    static async saveProduct(body) {
        return await ManagerDaoProducts.save(body)
    }

    static async getProduct(id) {
        return await ManagerDaoProducts.getById(id)
    }

    //update product
    static async updateProduct(id, body) {
        return await ManagerDaoProducts.updateById(id, body)
    }

    static async deleteProduct(id) {
        return await ManagerDaoProducts.deleteById(id)
    }

    static async deleteAllProducts() {
        return await ManagerDaoProducts.deleteAllProducts()
    }
};

export { ProductService }