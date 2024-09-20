import Challenge from '../Challenge.js'

/**
     * @openapi
     * '/challenge/sumArrayBody/':
     *  post:
     *     tags:
     *     - Sum ArrayBody
     *     summary: Suma de un array de números ingresado en el body
     *     description: Suma de un array de números método de acceso post porque el body es obligatorio
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               array:
     *                 type: array
     *                 description: Matriz de números
     *                 items:
     *                   type: number
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
     *       400 | 500:
     *         description: Error en el body
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Mensaje de método
     *                 error:
     *                   type: string
     *                   description: Mensaje de error
     * */
const sumArray = async (req, res) => {
  const arr = req.body?.array ?? []

  const arrNum = arr.map(i => Number(i))

  const ch = new Challenge()

  return res.send({
    response: ch.sumArray(arrNum)
  })
}

export default sumArray
