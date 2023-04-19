# Trabajo final - Backend

Este proyecto fue realizado como trabajo final para el curso de Backend de Coderhouse.


## Instalación - clonación de repositorio por [GitHub](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

1. En GitHub.com, vaya a la página principal del repositorio. Luego, encima de la lista de archivos, haga clic en  Código.
2. Copia la dirección URL del repositorio: 
- Para clonar el repositorio con HTTPS, en «HTTPS» haz clic en el ícono de copiar.
- Para clonar el repositorio mediante una clave SSH, incluido un certificado emitido por la entidad de certificación SSH de la organización, haga clic en Usar SSH y luego en ícono de copiar .
- Para clonar un repositorio mediante GitHub CLI, haz clic en GitHub CLI y, después, haz clic en ícono de copiar.
3. Abra Git Bash. 
4. Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio. 
5. Escriba git clone y pegue la dirección URL que ha copiado antes:
```
$ git clone https://github.com/BelyAndreozzi/ecommerce-backend
```
6. Presione **Entrar** para crear el clon local.
```
$ git clone https://github.com/BelyAndreozzi/ecommerce-backend
Cloning into 'ecommerce-backend'...
remote: Enumerating objects: 168, done.
remote: Counting objects: 100% (168/168), done.
remote: Compressing objects: 100% (104/104), done.
Receiving objects:  88% (148/168), 612.00 KiB | 1.17 MiB/s
Receiving objects: 100% (168/168), 775.78 KiB | 1.19 MiB/s, done.
Resolving deltas: 100% (79/79), done.
```

-----
- Segunda opción de clonación: 

1. En GitHub.com, vaya a la página principal del repositorio. Luego, encima de la lista de archivos, haga clic en Código.

2. Haga click en "Descargar ZIP".

3. Extraiga el archivo en el lugar deseado. 

## Uso

```
npm install 

npm start
```

Con npm install se descargarán las dependencias necesarias.  

## Rutas disponibles:
### Autenticación: 
- http://localhost:PORT/auth/signup
- http://localhost:PORT/auth/login
- http://localhost:PORT/auth/logout

### Productos (CRUD DISPONIBLE):
- http://localhost:PORT/products

### Carrito (CRUD DISPONIBLE):
- http://localhost:PORT/cart

### Orden:
- http://localhost:PORT/order/send-email


## Dependencias utilizadas 

- bcrypt: para encriptación de contraseñas.
- connect-mongo: para la persistencia con MongoDB.
- dotenv: para el manejo de variables de entorno. 
- express: para levantar el servidor.
- express-session: para el manejo de sessions del servidor.
- firebase-admin: para la persistencia con firebase.
- log4js: para logs más informativos. 
- minimist: para recuperar argumentos en la CLI. 
- mongoose: para la conexión con MongoDB.
- nodemailer: para el envío de emails.
- passport: para la autenticación.
- passport-local: para la autenticación. 


## Autora
[Belén Andreozzi](https://github.com/BelyAndreozzi).