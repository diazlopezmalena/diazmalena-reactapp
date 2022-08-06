# E-commerce: "Adorno Bookstore"

Este proyecto realizado con React es un e-commerce de libros, con géneros disponibles como Ficción, Crónicas y Ensayos.

Su nombre es "Adorno" porque así se llamó el gato de Julio Cortázar, en referencia a uno de los máximos representates de la escuela de Fráncfor: Theodor Adorno (Filósofo).

![Logo](https://i.ibb.co/RPCySdC/logo-Adorno.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/diazlopezmalena/diazmalena-reactapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Routes

Las rutas se encuentran configuradas en App.js con react-router-dom

1. La ruta por defecto '/' todos los productos a través del componente ItemListContainer.

2. La ruta dinámica '/category/:categoryId' muestra los productos filtrados (a través del componente ItemListContainer) de acuerdo a la categoría, en este caso secciones 'ficcion', 'cronicas' o 'ensayos', a los que se accede clickeando sobre los Links del componente Navbar.

3. La ruta dinámica '/detail/:id' muestra el detalle de cada producto (a través del componente ItemDetailContainer), al que se accede clickenado en "Ver detalles" dentro de la card de cada producto.

4. La ruta '*' devuelve un Error 404 cuando se ingresa una ruta no existente.

## Demo - Gif

- https://imgur.com/a/2iNCtDM
- o dentro del directorio: public > images > Malena-Diaz-gif-navegacion.gif

## Authors

[@diazlopezmalena](https://github.com/diazlopezmalena)

## Aditional

Detalle de Links configurados:

- Al clickear en el brand se navega a '/'.
- Al Clickear en el Link "Ver detalle" de un Item.js se navega a '/detail/:id'.
- Al clickear en una categoría del navbar se navega a '/category/:categoryId'.