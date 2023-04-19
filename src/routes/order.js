import { transporter, gMail } from "../messages/email.js";
import express from "express";
import { ManagerDaoCarts } from "../config/daosConfig.js";
import { ManagerDaoProducts } from "../config/daosConfig.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
    try {
        const carrito = await ManagerDaoCarts.getById(req.body.cartId)
        const productos = await ManagerDaoProducts.getByIds(carrito.productsId)

        let htmlProductos = ""
        for (let i = 0; i < productos.length; i++) {
            htmlProductos += `
                <div class="producto">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <div class="info">
                            <h3>${productos[i].title}</h3>
                            <p>Precio: $${productos[i].price}</p>
                        </div>
                    </div>`

        }
        console.log(productos)
        await transporter.sendMail({
            from: "server app Node",
            to: gMail, //destinatario
            subject: `Nuevo pedido de: ${req.user.name} [${req.user.email}].`,
            html: `<html>
                <head>
                    <title>Lista de productos comprados</title>
                    <style>
                .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 0 20px;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #555;
            }
            .heading {
                font-size: 24px;
                font-weight: bold;
                margin-top: 30px;
                margin-bottom: 20px;
            }
            .producto {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 20px;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            .producto img {
                flex: 1;
                max-width: 100px;
                height: auto;
                margin-right: 10px;
                border-radius: 4px 0 0 4px;
            }
            .producto .info {
                flex: 2;
                padding: 10px;
                justify-content: center;
            }
            .producto .info h3 {
                margin-top: 0;
                margin-bottom: 10px;
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .producto .info p {
                margin-bottom: 5px;
                font-size: 16px;
                color: #555;
            }
            .producto:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2 class="heading">Lista de productos comprados</h2>
                    ${htmlProductos}	
                </body>
                </html>`
        })
        res.send('El mensaje se ha enviado correctamente')
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
})

export { router as orderRouter };
