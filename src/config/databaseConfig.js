import * as dotenv from 'dotenv'
dotenv.config()

const options = {
    MongoDB: {
        URI: process.env.URI_MONGO,
        parameters: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },

    firebase: process.env.CONFIG_FIREBASE

}


export default options