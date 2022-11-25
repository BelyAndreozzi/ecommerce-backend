const fs = require('fs')
const express = require('express')
const { Router } = express;

const PORT = process.env.PORT || 8080
const app = express()

const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Router
const routerProductos = Router();
app.use("/api/productos", routerProductos);
const routerCarrito = Router();
app.use("/api/carrito", routerCarrito);

app.use("*", (req, res) => {
    res.status(404).send("La ruta a la que intentas acceder, no existe!");
})



const ManagerProductos = require('./managers/ManagerProductos.js')
const managerProductos = new ManagerProductos('./datos/productos.txt')

const Producto = require('./objs/Producto.js');

const ManagerCarrito = require('./managers/ManagerCarrito.js');
const managerCarrito = new ManagerCarrito('./datos/carritos.txt')

const Carrito = require('./objs/Carrito.js');

const DateHelper = require('./helpers/DateHelper.js')
const dateHelper = new DateHelper()


//admin - NO SÉ CÓMO HACER ESTO. AYUDA. 
let isAdmin = true;


//endpoints productos 
routerProductos.get("/", async (req, res) => {
    const result = await managerProductos.getAll()
    if (typeof result == "string") {
        res.status(404).send('El archivo no existe')
    } else {
        res.json(result)
    }
});

routerProductos.get("/:id", async (req, res) => {
    console.log(req.params.id);
    res.json(await managerProductos.getById(req.params.id));
});

routerProductos.post("/", async (req, res) => {
    try {
        const product = new Producto(req.body.title, req.body.price, req.body.thumbnail)
        const result = await managerProductos.addProduct(product);
        res.json(result);
    } catch (error) {
        return 'Faltan datos del producto'
    }
});

routerProductos.put("/", async (req, res) => {
    try {
        if (req.body.title == undefined || req.body.price == undefined || req.body.thumbnail == undefined) {
            throw 'Faltan datos del producto a actualizar'
        }
        else {
            const product = new Producto(req.body.title, req.body.price, req.body.thumbnail)
            const result = await managerProductos.updateProduct(product, req.body.id);
            res.json(result);
        }
    } catch (error) {
        res.status(404).send(error)
    }
}); // ¿ LO CAMBIO ? 

routerProductos.delete("/:id", async (req, res) => {
    const result = await managerProductos.deleteById(req.params.id);
    res.json(result);
});


//endpoints carrito
routerCarrito.get("/:id/productos", async (req, res) => {
    const result = await managerCarrito.getCart(req.params.id)
    if (typeof result == "string") {
        res.status(404).send('El carrito no existe')
    } else {
        res.json(result)
    }
});

routerCarrito.post("/", async (req, res) => {
    try {
        const carrito = new Carrito(dateHelper.getDate(), req.body.productsId == undefined ? [] : req.body.productsId)
        const result = await managerCarrito.addCart(carrito);
        res.json(result);
    } catch (error) {
        return error
    }
});

routerCarrito.post("/:id/productos", async (req, res) => {
    try {
        const result = await managerCarrito.addProduct(req.body.id, req.params.id)
        res.json(result)
    } catch (error) {
        return error
    }
})

routerCarrito.delete("/:id", async (req, res) =>{
    const result = await managerCarrito.deleteCartById(req.params.id);
    res.json(result);
})

routerCarrito.delete("/:id/productos/:id_prod", async (req, res) =>{
    const result = await managerCarrito.deleteProductInCartById(req.params.id_prod,req.params.id);
    res.json(result);
})