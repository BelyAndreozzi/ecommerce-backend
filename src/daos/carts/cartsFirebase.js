import { FirebaseCartManager } from "../../models/managers/FirebaseCartManager.js";

class FirebaseCartsDao extends FirebaseCartManager {
    constructor(collection) {
        super(collection)
    }
}

export { FirebaseCartsDao }
