import options from "./databaseConfig.js"
import admin from "firebase-admin"

let ManagerDaoCarts
let ManagerDaoProducts
let databaseType = "Firebase"

switch (databaseType) {
    case "mongoDB":
        const { MongoCartsDao } = await import("../daos/carts/cartsMongo.js")
        const { MongoProductsDao } = await import("../daos/products/productsMongo.js")
        ManagerDaoCarts = new MongoCartsDao(options.MongoDB, 'carritos')
        ManagerDaoProducts = new MongoProductsDao(options.MongoDB, 'productos')
        break;

    case "Firebase":
        const { FirebaseCartsDao } = await import("../daos/carts/cartsFirebase.js")
        const { FirebaseProductsDao } = await import("../daos/products/productsFirebase.js")
        admin.initializeApp({
            credential: admin.credential.cert(options.firebase.key),
            databaseURL: options.firebase.dbUrl,
        });
        ManagerDaoCarts = new FirebaseCartsDao('carritos')
        ManagerDaoProducts = new FirebaseProductsDao('productos')
        break;

    default:
        break;
}


export { ManagerDaoCarts, ManagerDaoProducts }