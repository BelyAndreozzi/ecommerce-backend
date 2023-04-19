import { MongoProductManager } from "../../models/managers/MongoProductManager.js";

class MongoProductsDao extends MongoProductManager {
    constructor(options, collection) {
        super(options, collection)
    }
}

export { MongoProductsDao }