// import express, { Application } from 'express'

// // Create a new express application instance
// const app: Application = express()

// const puerto = 3000

// app.listen(puerto, function () {
//   console.log(`Servidor escuchando en el puerto ${puerto}`);
// });

// app.get('/', function (req, res) {
//   res.send('Hola Mundo Soy Wilmar!!!');
// })

async function average(a: number, b: number){
  try {
  const response = a + b / 2;
  return response;
  } catch (e) {
  throw new TypeError("Ha ocurrido un error con este reto");
  }
  }

 console.log( average(5, 3) )