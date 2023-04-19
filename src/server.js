import express from "express"
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { logger } from "./helpers/logger.js";
import { apiRouters } from "./routes/index.js";
import options from "./config/databaseConfig.js";

// Server config
const PORT = process.env.PORT
const app = express()
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`))

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Session config
app.use(session({
    store: MongoStore.create({
        mongoUrl: options.MongoDB.URI,
    }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 300000
    }
}))

//Passport config
app.use(passport.initialize());
app.use(passport.session());

//Router
app.use(apiRouters)

app.use("*", (req, res) => {
    res.status(404).send("La ruta a la que intentas acceder, no existe!");
})
