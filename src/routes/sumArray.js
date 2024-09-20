import Challenge from '../Challenge.js'

/* método que reciba una matriz de solo números (positivos y negativos), con el fin de
retornar un objeto con las siguientes propiedades:
1. La suma total de la matriz
2. La suma de sus enteros positivos
3. La suma de los números pares
4. La suma de los números impares
Importante, si la matriz no contiene nada, el resultado debe ser 0. */

/**
     * @openapi
     * '/challenge/sumArray/':
     *  get:
     *     tags:
     *     - Sum Array
     *     summary: Suma de un array de números ingresado en los parámetros
     *     description: Suma de un array de números
     *     parameters:
     *      - name: array
     *        in: query
     *        description: Matriz de números
     *        required: false
     *        schema:
     *          type: string
     *     responses:
     *       200:
     *         description: Resultado del proceso
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 response:
     *                   type: object
     *                   description: Objeto con las propiedades de la suma
     *                   properties:
     *                     sumaTotal:
     *                       type: number
     *                       description: Suma total de la matriz
     *                     sumaEntPos:
     *                       type: number
     *                       description: Suma de los enteros positivos
     *                     sumaPares:
     *                       type: number
     *                       description: Suma de los números pares
     *                     sumaImpares:
     *                       type: number
     *                       description: Suma de los números impares
     * */
const sumArray = async (req, res) => {
  const arrNum = req.query?.array ? String(req.query.array).split(',').map(i => Number(i)) : []

  const ch = new Challenge()

  res.send({
    response: ch.sumArray(arrNum)
  })
}

export default sumArray
