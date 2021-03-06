import express, { Application } from 'express'

import routes from './routes'

const morgan = require('morgan')

const cors = require('cors')

const app: Application = express()

const puerto: number = 3000

app.listen(puerto, function () {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

app.use(morgan('dev'))
app.use(cors({
  origin: '*'
}))
app.use('/challenge', routes)


//Probando Servidor

// const ingredients = [
//   {
//     "id": "1",
//     "item": "Bacon"
//   },
//   {
//     "id": "2",
//     "item": "Eggs"
//   },
//   {
//     "id": "3",
//     "item": "Milk"
//   },
//   {
//     "id": "4",
//     "item": "Butter"
//   }
// ];

// app.get('/ingredients', (req, res) =>{
//   res.send(ingredients);
// });

// app.get('/', function (req, res) {
//   res.send('Hola Mundo Soy Wilmar Zapaat!!!');
// })

export default app