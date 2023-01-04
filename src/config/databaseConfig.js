import {readFileSync} from 'fs'


const serviceAccount = JSON.parse(readFileSync("./src/config/firebaseKey.json"))

const options = {
    MongoDB: {
        URI: "mongodb+srv://belen:32175@ecommerce.b823iwp.mongodb.net/ecommerce?retryWrites=true&w=majority",
        parameters: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firebase:{
        key: serviceAccount,
        dbUrl: "https://ecommerce-778be.firebase.io"
    }
}


export default options