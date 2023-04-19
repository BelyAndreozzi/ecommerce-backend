import { FirebaseProductManager } from "../../models/managers/FirebaseProductManager.js";

class FirebaseProductsDao extends FirebaseProductManager {
    constructor(collection) {
        super(collection)
    }
}

export { FirebaseProductsDao }