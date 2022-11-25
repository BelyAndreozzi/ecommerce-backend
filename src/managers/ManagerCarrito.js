const fs = require('fs');

class ManagerCarrito {
    constructor(filename) {
        this.filename = filename
    }

    async getCart(cartId) {
        try {
            let cart
            const contenido = await fs.promises.readFile(this.filename, "utf-8")
            const carritos = JSON.parse(contenido)
            cart = carritos.find(carrito => carrito.id == cartId)
            if (cart == undefined) {
                throw 'No existe ese carrito'
            } else {
                return cart.productsId
            }
        } catch (err) {
            return err
        }
    }/* Recibe un id y devuelve el objeto con ese id, o null si no está. */

    async deleteCartById(cartId) {
        try {
            const carritos = await this.getAll();
            const carritosActualizados = carritos.filter(elemento => elemento.id != cartId);
            await fs.promises.writeFile(this.filename, JSON.stringify(carritosActualizados, null, 2));
        } catch (err) {
            return "El elemento no pudo ser eliminado"
        }
    } /* Elimina del archivo el objeto con el id buscado. */

    async deleteProductInCartById(productId, cartId) {
        try {
            const carritos = await this.getAll();
            const carritoAModificarIndex = carritos.findIndex(elemento => elemento.id == cartId);
            if (carritoAModificarIndex == -1) {
                throw 'No existe el carrito'
            } 
            const idProductosActualizados = carritos[carritoAModificarIndex].productsId.filter(elemento => elemento != productId);

            carritos[carritoAModificarIndex].productsId = idProductosActualizados
            await fs.promises.writeFile(this.filename, JSON.stringify(carritos, null, 2));
        } catch (err) {
            return err
        }
    } /* Elimina del archivo el producto con el id buscado. */

    async addCart(cart) {
        let nuevoId

        try {
            if (fs.existsSync(this.filename)) {
                const contenido = await this.getAll();
                if (contenido.length > 0) {
                    nuevoId = contenido[contenido.length - 1].id + 1;
                    cart.id = nuevoId
                    contenido.push(cart);
                    await fs.promises.writeFile(this.filename, JSON.stringify(contenido, null, 2));
                } else {
                    nuevoId = 1;
                    cart.id = nuevoId
                    await fs.promises.writeFile(this.filename, JSON.stringify([cart], null, 2))
                }
            } else {
                nuevoId = 1;
                cart.id = nuevoId
                await fs.promises.writeFile(this.filename, JSON.stringify([cart], null, 2));
            }
            return nuevoId
        } catch (err) {
            console.log(err);
        }
    } /* Recibe un objeto, lo guarda en el archivo, devuelve el id asignado. */

    async addProduct(productId, cartId) {
        try {
            const carritos = await this.getAll();
            const carritoAModificarIndex = carritos.findIndex(elemento => elemento.id == cartId);
            if (carritoAModificarIndex == -1) {
                throw 'No existe el carrito'
            } 
            carritos[carritoAModificarIndex].productsId.push(productId);
            await fs.promises.writeFile(this.filename, JSON.stringify(carritos, null, 2))
        } catch (err) {
            return err
        }
    } /* Recibe un objeto, lo guarda en el archivo, devuelve el id asignado. */ 

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.filename, "utf-8")
            const carritos = JSON.parse(contenido)
            return carritos
        } catch (err) {
            return "No se pudo leer el archivo"
        }
    }
}



module.exports = ManagerCarrito