import mongoose from "mongoose";
import {Cart} from "../models/cart.js";

class MongoCartManager { 
    constructor(options, collection){
        this.database = mongoose.connect(options.URI, options.parameters)
        this.collection = collection
    }

    async getById(id){
        return await Cart.findById(id)
    }

    async getAll(){
        return await Cart.find()
    }

    async save(cart){
        
        const newCart = new Cart(cart)
        
        return await newCart.save((err,res)=>{
            if(err)
            console.log(err);
            else console.log(res);
        })
        
    }

    async updateById(id, data){
        return await Cart.findByIdAndUpdate(id, data)
    }

    async deleteById(id){
        return await Cart.findByIdAndDelete(id)
    }

    async deleteProductInCartById(cartId, productId){
        console.log(cartId);
        let carrito = await Cart.findById(cartId);
        console.log(carrito);
        const filter = carrito?.productsId.filter(elemento => elemento != productId);
        console.log(filter);
        return await Cart.updateOne(
            { _id: cartId },
            { $set: { productsId: filter } }
        );
    }
}

export { MongoCartManager }